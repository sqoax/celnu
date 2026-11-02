/** Trims spaces and strips http(s):// and trailing slashes. Returns "" if nothing is left. */
export function cleanUrl(raw: string): string {
  return raw
    .trim()
    .replace(/^https?:\/\//i, '')
    .replace(/\/+$/, '');
}

/** Builds the homepage-concept email from an already cleaned URL. */
export function buildMailto(email: string, url: string): string {
  const domain = url.split(/[/?#]/)[0];
  const subject = `Homepage concept: ${domain}`;
  const body = `Hi Hiatt,\r\n\r\nHere is my firm's website: https://${url}\r\n\r\nI'd like to see a homepage concept.`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
