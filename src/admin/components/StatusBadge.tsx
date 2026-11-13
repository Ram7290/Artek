import type { Enquiry, EnquiryStatus } from "@/admin/lib/types";
import { Badge } from "@/admin/components/ui/badge";

/** Enquiry workflow badge — semantic colours so staff can scan by state. */
const STATUS_CLASSES: Record<EnquiryStatus, string> = {
  new: "border-transparent bg-primary text-primary-foreground",
  contacted: "border-transparent bg-blue-100 text-blue-800",
  quoted: "border-transparent bg-amber-100 text-amber-900",
  won: "border-transparent bg-emerald-100 text-emerald-900",
  lost: "border-transparent bg-secondary text-muted-foreground",
};

export function StatusBadge({ status }: { status: EnquiryStatus }) {
  return (
    <Badge className={`capitalize ${STATUS_CLASSES[status]}`}>
      {status}
    </Badge>
  );
}

/** Whether ARTEK was actually emailed — "skipped" means development log-only. */
export function NotificationBadge({ status }: { status: Enquiry["notificationStatus"] }) {
  const label: Record<Enquiry["notificationStatus"], string> = {
    pending: "Mail pending",
    sent: "Mail sent",
    failed: "Mail failed",
    skipped: "Dev (logged)",
  };
  const tone = status === "sent" ? "outline" : status === "failed" ? "destructive" : "secondary";
  return <Badge variant={tone}>{label[status]}</Badge>;
}
