/**
 * Fires a GA4 custom event via the globally-loaded gtag function.
 * Safe to call before gtag is available — it no-ops silently.
 */
export function fireGAEvent(
  eventName: string,
  params: Record<string, string | undefined>
): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  // Strip undefined values so GA4 doesn't receive empty parameters
  const clean: Record<string, string> = {};
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== "") clean[k] = v;
  }
  window.gtag("event", eventName, clean);
}
