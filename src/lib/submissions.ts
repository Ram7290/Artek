import type { EnquiryValues } from "@/lib/validation";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  LEAD SUBMISSION SERVICE — powered by Web3Forms
 *
 *  Submits directly to the Web3Forms API (https://api.web3forms.com/submit).
 *  No backend required — the access key is a public client-side key.
 *
 *    1. Set VITE_WEB3FORMS_ACCESS_KEY in the environment (.env.local).
 *    2. The API receives a JSON POST with the form fields + access_key.
 *    3. Until the key is configured the form runs in DEMO MODE — it never
 *       fakes a successful send; it shows the demo notice instead.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export type SubmissionResult =
  | { status: "ok" }
  | { status: "error"; message: string }
  | { status: "demo" };

export type EnquiryPayload = EnquiryValues & { source: string };

export const getWeb3FormsKey = (): string | undefined =>
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || undefined;

export const isDemoMode = (): boolean => !getWeb3FormsKey();

export async function submitEnquiry(payload: EnquiryPayload): Promise<SubmissionResult> {
  const accessKey = getWeb3FormsKey();
  if (!accessKey) {
    // Demo mode: nothing is sent anywhere. Never fake success.
    console.info("[ARTEK demo] enquiry captured locally (not sent):", payload);
    return { status: "demo" };
  }

  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Website enquiry — ${payload.service} (${payload.fullName})`,
        from_name: "Artek Website",
        name: payload.fullName,
        email: payload.email,
        phone: payload.phone,
        company: payload.companyName || "—",
        service: payload.service,
        emirate: payload.emirate,
        message: payload.message,
        source: payload.source,
        botcheck: payload.botcheck ?? "",
      }),
    });

    const data = await res.json();

    if (data.success) {
      return { status: "ok" };
    }

    return {
      status: "error",
      message: data.message || "The enquiry could not be sent. Please call us instead.",
    };
  } catch {
    return {
      status: "error",
      message: "A network problem prevented sending. Please try again or call +971 4 379 7128.",
    };
  }
}
