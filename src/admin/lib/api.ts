import type { AdminUser, Enquiry, EnquiryStatus } from "./types";

/**
 * Thin API client. `credentials: "include"` is what sends the httpOnly JWT
 * cookie; the token itself is never visible to this code.
 */
const BASE = import.meta.env.VITE_API_BASE ?? "/api";

type ApiError = Error & { status?: number; fields?: Record<string, string[]> };

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...init,
  });

  const body = await res.json().catch(() => ({}) as Record<string, unknown>);
  if (!res.ok) {
    const err: ApiError = new Error((body.error as string) ?? `Request failed (${res.status})`);
    err.status = res.status;
    err.fields = body.fields as Record<string, string[]> | undefined;
    throw err;
  }
  return body as T;
}

export const api = {
  login: (email: string, password: string) =>
    request<{ ok: true; user: AdminUser }>("/admin/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  logout: () => request<{ ok: true }>("/admin/logout", { method: "POST" }),

  me: () => request<{ ok: true; user: AdminUser }>("/admin/me"),

  listEnquiries: (params: { status?: string; q?: string; limit?: number; offset?: number }) => {
    const search = new URLSearchParams();
    if (params.status) search.set("status", params.status);
    if (params.q) search.set("q", params.q);
    search.set("limit", String(params.limit ?? 25));
    search.set("offset", String(params.offset ?? 0));
    return request<{ ok: true; items: Enquiry[]; total: number; limit: number; offset: number }>(
      `/admin/enquiries?${search}`,
    );
  },

  stats: () =>
    request<{ ok: true; counts: Partial<Record<EnquiryStatus, number>>; total: number }>(
      "/admin/enquiries/stats",
    ),

  updateStatus: (id: string, status: EnquiryStatus) =>
    request<{ ok: true; enquiry: Enquiry }>(`/admin/enquiries/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
};
