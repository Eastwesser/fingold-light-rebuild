import { useCallback, useState } from 'react';
import type { FormEvent } from 'react';
import { submitLead } from '../utils/api';
import type { LeadPayload } from '../utils/api';

type Fields = Record<string, string>;

export function useLeadForm(source: LeadPayload['source'], initialFields: Fields) {
  const [fields, setFields] = useState<Fields>(initialFields);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const setField = useCallback((name: string, value: string) => {
    setFields((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setSubmitting(true);
      setError(null);
      try {
        await submitLead({ source, fields });
        setSubmitted(true);
        setFields(initialFields);
      } catch {
        setError('Не удалось отправить заявку. Попробуйте ещё раз позже.');
      } finally {
        setSubmitting(false);
      }
    },
    [source, fields, initialFields],
  );

  return { fields, setField, handleSubmit, submitted, submitting, error };
}
