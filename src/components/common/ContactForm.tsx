import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CheckCircle2, AlertTriangle, Info, Loader2, Send } from "lucide-react";
import { enquirySchema, type EnquiryValues } from "@/lib/validation";
import { submitEnquiry } from "@/lib/submissions";
import { Input, Textarea } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { coreServices } from "@/data/services";

const EMIRATES = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Other (UAE)"] as const;

const SERVICE_OPTIONS = [...coreServices.map((s) => s.title), "Other"];

/**
 * Accessible quote/enquiry form — React Hook Form + Zod.
 * Submission goes through lib/submissions.ts; without a configured endpoint
 * the form clearly states it is in demo mode and fakes nothing.
 */
export function ContactForm({ className }: { className?: string }) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    mode: "onBlur",
    defaultValues: { service: "", emirate: "", companyName: "" },
  });

  const [result, setResult] = useState<null | { kind: "ok" | "demo" | "error"; message?: string }>(null);
  const emirate = watch("emirate");
  const service = watch("service");

  const onSubmit = handleSubmit(async (values) => {
    setResult(null);
    const res = await submitEnquiry({ ...values, source: "website-contact-form" });
    if (res.status === "ok") {
      setResult({ kind: "ok" });
      reset();
    } else if (res.status === "demo") {
      setResult({ kind: "demo" });
    } else {
      setResult({ kind: "error", message: res.message });
    }
  });

  const labelCls = "mb-1.5 block text-sm font-medium text-slate-200";
  const errCls = "mt-1 text-xs text-red-600";

  if (result?.kind === "ok") {
    return (
      <div className={`rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center ${className ?? ""}`} role="status">
        <CheckCircle2 className="mx-auto size-10 text-emerald-600" aria-hidden="true" />
        <h3 className="mt-4 text-lg font-semibold text-ink">Enquiry sent</h3>
        <p className="mt-2 text-sm text-slate-300">
          Thank you — our team will get back to you shortly. For urgent matters call +971 4 379 7128.
        </p>
        <Button variant="outline" className="mt-5" onClick={() => setResult(null)}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={className} aria-label="Request a quote">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelCls}>
            Full Name <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <Input id="fullName" autoComplete="name" aria-required="true" aria-invalid={!!errors.fullName} {...register("fullName")} />
          {errors.fullName && <p className={errCls} role="alert">{errors.fullName.message}</p>}
        </div>
        <div>
          <label htmlFor="companyName" className={labelCls}>
            Company Name <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <Input id="companyName" autoComplete="organization" aria-invalid={!!errors.companyName} {...register("companyName")} />
          {errors.companyName && <p className={errCls} role="alert">{errors.companyName.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email Address <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <Input id="email" type="email" autoComplete="email" inputMode="email" aria-required="true" aria-invalid={!!errors.email} {...register("email")} />
          {errors.email && <p className={errCls} role="alert">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone Number <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <Input id="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+971 5X XXX XXXX" aria-required="true" aria-invalid={!!errors.phone} {...register("phone")} />
          {errors.phone && <p className={errCls} role="alert">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="service" className={labelCls}>
            Service Required <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <Select
            value={service}
            onValueChange={(v) => setValue("service", v, { shouldValidate: true })}
          >
            <SelectTrigger id="service" aria-invalid={!!errors.service}>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {SERVICE_OPTIONS.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service && <p className={errCls} role="alert">{errors.service.message}</p>}
        </div>
        <div>
          <label htmlFor="emirate" className={labelCls}>
            Emirate / Location <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <Select
            value={emirate}
            onValueChange={(v) => setValue("emirate", v, { shouldValidate: true })}
          >
            <SelectTrigger id="emirate" aria-invalid={!!errors.emirate}>
              <SelectValue placeholder="Select your location" />
            </SelectTrigger>
            <SelectContent>
              {EMIRATES.map((e) => (
                <SelectItem key={e} value={e}>{e}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.emirate && <p className={errCls} role="alert">{errors.emirate.message}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>
            Message <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <Textarea
            id="message"
            placeholder="Tell us about your requirement — site size, number of cameras, systems involved…"
            aria-required="true"
            aria-invalid={!!errors.message}
            {...register("message")}
          />
          {errors.message && <p className={errCls} role="alert">{errors.message.message}</p>}
        </div>
      </div>

      {result?.kind === "error" && (
        <p className="mt-4 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert">
          <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {result.message}
        </p>
      )}
      {result?.kind === "demo" && (
        <p className="mt-4 flex items-start gap-2 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-slate-300" role="status">
          <Info className="mt-0.5 size-4 shrink-0 text-accent-600" aria-hidden="true" />
          Demo mode — your details were validated but <strong className="font-semibold">not sent</strong>. Set
          the submission endpoint in <code className="rounded bg-mist-2 px-1 py-0.5 text-xs">VITE_ENQUIRY_ENDPOINT</code> to enable live sending.
        </p>
      )}

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden="true" />
            Request a Free Quote
          </>
        )}
      </Button>
    </form>
  );
}
