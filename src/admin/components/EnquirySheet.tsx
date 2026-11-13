import type { Enquiry, EnquiryStatus } from "@/admin/lib/types";
import { Badge } from "@/admin/components/ui/badge";
import { Button } from "@/admin/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/admin/components/ui/sheet";
import { NotificationBadge, StatusBadge } from "@/admin/components/StatusBadge";
import { ENQUIRY_STATUSES } from "@/admin/lib/types";

const fmt = (iso: string) =>
  new Date(iso).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });

function DetailRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-4 text-sm">
      <dt className="shrink-0 text-muted-foreground">{label}</dt>
      <dd className="text-right">{children}</dd>
    </div>
  );
}

/**
 * Enquiry detail in a shadcn Sheet (Radix Dialog) — focus trap, Escape and
 * overlay-click close come from the primitive.
 */
export function EnquirySheet({
  enquiry,
  open,
  onOpenChange,
  onChangeStatus,
  saving,
}: {
  enquiry: Enquiry | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onChangeStatus: (status: EnquiryStatus) => void;
  saving: boolean;
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        {enquiry && (
          <>
            <SheetHeader>
              <SheetTitle>{enquiry.fullName}</SheetTitle>
              <SheetDescription>{enquiry.companyName ?? "Individual enquiry"}</SheetDescription>
              <div className="mt-2 flex flex-wrap gap-2">
                <StatusBadge status={enquiry.status} />
                <NotificationBadge status={enquiry.notificationStatus} />
              </div>
            </SheetHeader>

            <div className="flex-1 space-y-5 overflow-y-auto p-5">
              <dl className="space-y-2">
                <DetailRow label="Email">
                  <a href={`mailto:${enquiry.email}`} className="underline-offset-4 hover:underline">
                    {enquiry.email}
                  </a>
                </DetailRow>
                <DetailRow label="Phone">
                  <a href={`tel:${enquiry.phone.replace(/\s/g, "")}`} className="underline-offset-4 hover:underline">
                    {enquiry.phone}
                  </a>
                </DetailRow>
                <DetailRow label="Service">{enquiry.service}</DetailRow>
                <DetailRow label="Emirate">{enquiry.emirate}</DetailRow>
                <DetailRow label="Received">{fmt(enquiry.createdAt)}</DetailRow>
                <DetailRow label="Source">
                  <Badge variant="outline">{enquiry.source}</Badge>
                </DetailRow>
              </dl>

              <div>
                <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Message</p>
                <p className="mt-1 rounded-lg bg-muted p-3 text-sm whitespace-pre-wrap">{enquiry.message || "—"}</p>
              </div>
            </div>

            <SheetFooter>
              <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Update status</p>
              <div className="flex flex-wrap gap-2">
                {ENQUIRY_STATUSES.map((s) => (
                  <Button
                    key={s}
                    size="sm"
                    variant={s === enquiry.status ? "default" : "outline"}
                    className="capitalize"
                    disabled={saving || s === enquiry.status}
                    onClick={() => onChangeStatus(s)}
                  >
                    {s}
                  </Button>
                ))}
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
