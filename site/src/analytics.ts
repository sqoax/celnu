/**
 * Plausible custom events. Each name must match a "Custom event" goal set up in Plausible,
 * or the event is recorded but doesn't show under Goals.
 */
export type EventName = 'Open email draft' | 'Email address click' | 'View Before';

declare global {
  interface Window {
    plausible?: (event: string, options?: Record<string, unknown>) => void;
  }
}

/** Sends one event. Safe if Plausible is blocked or missing: nothing happens. */
export function track(name: EventName): void {
  window.plausible?.(name);
}
