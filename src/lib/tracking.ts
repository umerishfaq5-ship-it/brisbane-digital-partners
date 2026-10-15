/**
 * Site-wide GA4 lead tracking.
 * Sends `generate_lead` on every lead form submit and on phone / email clicks,
 * so GA4 can report which pages and channels produce enquiries.
 * Mark `generate_lead` as a key event in GA4 (Admin → Events).
 */
type Gtag = (command: "event", name: string, params: Record<string, string>) => void;

const send = (method: string, extra: Record<string, string> = {}) => {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (!gtag || window.location.pathname.startsWith("/hamza")) return;
  gtag("event", "generate_lead", { method, page_path: window.location.pathname, ...extra });
};

export function initLeadTracking() {
  document.addEventListener(
    "click",
    (e) => {
      const link = (e.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) send("phone_click");
      else if (href.startsWith("mailto:")) send("email_click");
      else if (href.includes("wa.me/")) send("whatsapp_click");
    },
    true,
  );

  document.addEventListener(
    "submit",
    (e) => {
      const form = e.target as HTMLFormElement;
      send("form_submit", { form_id: form.id || form.getAttribute("aria-label") || "form" });
    },
    true,
  );
}
