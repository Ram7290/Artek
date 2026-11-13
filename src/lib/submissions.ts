import type { EnquiryValues } from "@/lib/validation";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  LEAD SUBMISSION SERVICE
 *  Wire this to ARTEK's backend, email provider or CRM later:
 *
 *    1. Set VITE_ENQUIRY_ENDPOINT (e.g. https://forms.company.com/artek)
 *       in the environment (.env / hosting config).
 *    2. The endpoint receives a JSON POST:
 *         { fullName, companyName, email, phone, service, emirate, message, source }
 *    3. Until an endpoint is configured the form runs in DEMO MODE — it never
 *       fakes a successful send; it shows the demo notice instead.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type SubmissionResult =
  | { status: "ok" }
  | { status: "error"; message: string }
  | { status: "demo" };

export type EnquiryPayload = EnquiryValues & { source: string };

export const getEnquiryEndpoint = (): string | undefined =>
  import.meta.env.VITE_ENQUIRY_ENDPOINT || undefined;

export const isDemoMode = (): boolean => !getEnquiryEndpoint();

export async function submitEnquiry(payload: EnquiryPayload): Promise<SubmissionResult> {
  const endpoint = getEnquiryEndpoint();
  if (!endpoint) {
    // Demo mode: nothing is sent anywhere. Never fake success.
    console.info("[ARTEK demo] enquiry captured locally (not sent):", payload);
    return { status: "demo" };
  }
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      return { status: "error", message: `The server could not accept the enquiry (error ${res.status}). Please call us instead.` };
    }
    return { status: "ok" };
  } catch {
    return {
      status: "error",
      message: "A network problem prevented sending. Please try again or call +971 4 379 7128.",
    };
  }
}
