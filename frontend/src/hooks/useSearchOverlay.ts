import { useEffect, useMemo, useRef, useState } from 'react';
import { SEARCH_INDEX } from '../data/searchIndex';

/**
 * Поисковый оверлей (#fgb-search-overlay) — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 5987-6127.
 */
export function useSearchOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    return SEARCH_INDEX.filter(
      (item) => item.title.toLowerCase().includes(q) || item.tag.toLowerCase().includes(q),
    ).slice(0, 10);
  }, [query]);

  const hasQuery = query.trim().length > 0;
  const noResults = hasQuery && results.length === 0;

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
    setQuery('');
  }

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => inputRef.current?.focus(), 100);
    return () => {
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape') close();
    }
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [isOpen]);

  return { isOpen, query, setQuery, results, noResults, open, close, inputRef };
}
