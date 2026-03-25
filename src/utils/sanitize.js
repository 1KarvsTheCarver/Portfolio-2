/**
 * Strips HTML tags and trims input to prevent XSS before Formspree submission.
 */
export function sanitize(str) {
  return String(str)
    .replace(/<[^>]*>/g, '')
    .replace(/[<>"'&]/g, (c) => ({ '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":"&#39;", '&':'&amp;' }[c]))
    .trim();
}
