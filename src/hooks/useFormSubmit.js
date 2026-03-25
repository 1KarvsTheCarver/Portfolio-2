import { useState } from 'react';
import { FORMSPREE_URL } from '../utils/constants';
import { sanitize } from '../utils/sanitize';

export function useFormSubmit() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  async function submit({ name, email, message }) {
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: sanitize(name),
          email: sanitize(email),
          message: sanitize(message),
        }),
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  return { status, submit, reset: () => setStatus('idle') };
}
