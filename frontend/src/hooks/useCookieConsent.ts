import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'fgb_cookie_consent';

interface Consent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

function writeConsent(consent: Consent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // localStorage недоступен (приватный режим и т.п.) — молча игнорируем
  }
}

/**
 * Cookie-баннер (#fgb-cookie) — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 6409-6469.
 */
export function useCookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!readConsent()) {
      const timer = setTimeout(() => setVisible(true), 900);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = useCallback(() => setVisible(false), []);

  const acceptAll = useCallback(() => {
    writeConsent({ necessary: true, analytics: true, marketing: true });
    dismiss();
  }, [dismiss]);

  const declineOptional = useCallback(() => {
    writeConsent({ necessary: true, analytics, marketing });
    dismiss();
  }, [analytics, marketing, dismiss]);

  const closeOnly = useCallback(() => {
    writeConsent({ necessary: true, analytics: false, marketing: false });
    dismiss();
  }, [dismiss]);

  const toggleExpanded = useCallback(() => setExpanded((prev) => !prev), []);

  /** Кнопка «Управление cookie» в подвале — сбрасывает согласие и показывает баннер снова. */
  const reopen = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setVisible(true);
  }, []);

  return {
    visible,
    expanded,
    analytics,
    marketing,
    setAnalytics,
    setMarketing,
    acceptAll,
    declineOptional,
    closeOnly,
    toggleExpanded,
    reopen,
  };
}
