import { useState } from 'react';
import { smoothScrollToId } from '../utils/scroll';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Клиентская валидация формы входа (демо, без реального бэкенда) — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 5337-5360.
 */
export function useLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword((prev) => !prev);
  }

  function handleSubmit() {
    const emailOk = EMAIL_RE.test(email.trim());
    const passOk = password.length >= 1;

    setEmailError(!emailOk);
    setPasswordError(!passOk);

    if (emailOk && passOk) {
      smoothScrollToId('fgb-contacts');
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    togglePasswordVisibility,
    emailError,
    passwordError,
    handleSubmit,
  };
}
