import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? '/api',
});

export interface LeadPayload {
  source: 'partner' | 'contacts';
  /** Ключи повторяют имена полей формы (кириллица), см. data-атрибуты в эталоне. */
  fields: Record<string, string>;
}

export function submitLead(payload: LeadPayload) {
  return api.post('/lead', payload);
}
