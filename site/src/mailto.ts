/** Trims spaces and strips http(s):// and trailing slashes. Returns "" if nothing is left. */
export function cleanUrl(raw: string): string {
  return raw
    .trim()
    .replace(/^https?:\/\//i, '')
    .replace(/\/+$/, '');
}

/** The domain part of an already cleaned URL. */
export function domainOf(url: string): string {
  return url.split(/[/?#]/)[0];
}

/** Builds the homepage-concept email from an already cleaned URL. */
export function buildMailto(email: string, url: string): string {
  const subject = `Homepage concept: ${domainOf(url)}`;
  const body = `Hi Hiatt,\r\n\r\nHere is my firm's website: https://${url}\r\n\r\nI'd like to see a homepage concept.`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
