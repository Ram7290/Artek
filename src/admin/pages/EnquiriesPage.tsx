import { useCallback, useEffect, useState } from "react";
import { LogOutIcon, SearchIcon } from "lucide-react";
import { useAuth } from "@/admin/lib/auth";
import { api } from "@/admin/lib/api";
import { ENQUIRY_STATUSES, type Enquiry, type EnquiryStatus } from "@/admin/lib/types";
import { Alert } from "@/admin/components/ui/alert";
import { Button } from "@/admin/components/ui/button";
import { Card, CardContent } from "@/admin/components/ui/card";
import { Input } from "@/admin/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/admin/components/ui/select";
import { Skeleton } from "@/admin/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/admin/components/ui/table";
import { StatusBadge } from "@/admin/components/StatusBadge";
import { EnquirySheet } from "@/admin/components/EnquirySheet";

const PAGE_SIZE = 25;
const fmt = (iso: string) => new Date(iso).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });

export function EnquiriesPage() {
  const { user, logout } = useAuth();
  const [items, setItems] = useState<Enquiry[]>([]);
  const [total, setTotal] = useState(0);
  const [counts, setCounts] = useState<Partial<Record<EnquiryStatus, number>>>({});
  const [status, setStatus] = useState<"" | EnquiryStatus>("");
  const [q, setQ] = useState("");
  const [offset, setOffset] = useState(0);
  const [selected, setSelected] = useState<Enquiry | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [list, stats] = await Promise.all([
        api.listEnquiries({ status: status || undefined, q: q || undefined, limit: PAGE_SIZE, offset }),
        api.stats(),
      ]);
      setItems(list.items);
      setTotal(list.total);
      setCounts(stats.counts);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not load enquiries.");
    } finally {
      setLoading(false);
    }
  }, [status, q, offset]);

  useEffect(() => {
    const t = window.setTimeout(load, q ? 300 : 0);
    return () => window.clearTimeout(t);
  }, [load, q]);

  async function changeStatus(next: EnquiryStatus) {
    if (!selected) return;
    setSaving(true);
    try {
      const { enquiry } = await api.updateStatus(selected.id, next);
      setSelected(enquiry);
      setItems((prev) => prev.map((e) => (e.id === enquiry.id ? enquiry : e)));
      setCounts((await api.stats()).counts);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not update the status.");
    } finally {
      setSaving(false);
    }
  }

  const page = Math.floor(offset / PAGE_SIZE) + 1;
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const tiles = [
    { key: "all" as const, label: "All", value: Object.values(counts).reduce<number>((a, b) => a + (b ?? 0), 0) },
    ...ENQUIRY_STATUSES.map((s) => ({ key: s, label: s, value: counts[s] ?? 0 })),
  ];

  return (
    <div className="min-h-dvh">
      <header className="bg-card border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div>
            <p className="text-muted-foreground text-[11px] font-bold tracking-[0.2em] uppercase">ARTEK Computers</p>
            <h1 className="text-lg font-semibold tracking-tight">Website enquiries</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground hidden text-sm sm:inline">
              {user?.name} · <span className="capitalize">{user?.role}</span>
            </span>
            <Button variant="outline" size="sm" onClick={() => void logout()}>
              <LogOutIcon />
              Sign out
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-5 px-4 py-6 sm:px-6">
        {/* Summary tiles double as status filters */}
        <section aria-label="Totals by status" className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {tiles.map((tile) => {
            const active = tile.key === "all" ? status === "" : status === tile.key;
            return (
              <Card
                key={tile.key}
                className={`cursor-pointer py-4 transition-shadow hover:shadow-md ${active ? "ring-2 ring-primary" : ""}`}
                onClick={() => {
                  setStatus(tile.key === "all" ? "" : tile.key);
                  setOffset(0);
                }}
              >
                <CardContent className="px-4">
                  <p className="text-2xl font-semibold tabular-nums">{tile.value}</p>
                  <p className="text-muted-foreground text-xs capitalize">{tile.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <Card className="gap-0 py-0">
          <div className="flex flex-col gap-3 border-b p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-sm">
              <SearchIcon className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
              <Input
                type="search"
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setOffset(0);
                }}
                placeholder="Search name, email, phone, company…"
                className="pl-9"
                aria-label="Search enquiries"
              />
            </div>
            <div className="flex items-center gap-2">
              <Select
                value={status || "all"}
                onValueChange={(v) => {
                  setStatus(v === "all" ? "" : (v as EnquiryStatus));
                  setOffset(0);
                }}
              >
                <SelectTrigger className="w-[150px]" aria-label="Filter by status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  {ENQUIRY_STATUSES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {error && (
            <div className="p-4 pb-0">
              <Alert tone="destructive">{error}</Alert>
            </div>
          )}

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Emirate</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Received</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading && items.length === 0
                ? Array.from({ length: 5 }).map((_, i) => (
                    <TableRow key={i}>
                      {Array.from({ length: 6 }).map((__, j) => (
                        <TableCell key={j}>
                          <Skeleton className="h-4 w-full max-w-[140px]" />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                : items.length === 0
                  ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-muted-foreground py-14 text-center">
                        No enquiries {status ? `with status “${status}”` : ""}
                        {q ? ` matching “${q}”` : ""} yet.
                      </TableCell>
                    </TableRow>
                  )
                  : items.map((e) => (
                    <TableRow
                      key={e.id}
                      className="cursor-pointer"
                      onClick={() => setSelected(e)}
                      data-state={selected?.id === e.id ? "selected" : undefined}
                    >
                      <TableCell>
                        <span className="font-medium">{e.fullName}</span>
                        {e.companyName && <div className="text-muted-foreground text-xs">{e.companyName}</div>}
                      </TableCell>
                      <TableCell>
                        <a
                          href={`mailto:${e.email}`}
                          onClick={(ev) => ev.stopPropagation()}
                          className="underline-offset-4 hover:underline"
                        >
                          {e.email}
                        </a>
                        <div>
                          <a
                            href={`tel:${e.phone.replace(/\s/g, "")}`}
                            onClick={(ev) => ev.stopPropagation()}
                            className="text-muted-foreground hover:underline"
                          >
                            {e.phone}
                          </a>
                        </div>
                      </TableCell>
                      <TableCell>{e.service}</TableCell>
                      <TableCell className="text-muted-foreground">{e.emirate}</TableCell>
                      <TableCell>
                        <StatusBadge status={e.status} />
                      </TableCell>
                      <TableCell className="text-muted-foreground whitespace-nowrap">{fmt(e.createdAt)}</TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </Card>

        <nav aria-label="Pagination" className="flex items-center justify-between text-sm">
          <p className="text-muted-foreground">
            {total === 0 ? "No results" : `${offset + 1}–${Math.min(offset + PAGE_SIZE, total)} of ${total}`}
          </p>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" disabled={offset === 0} onClick={() => setOffset(Math.max(0, offset - PAGE_SIZE))}>
              Previous
            </Button>
            <span className="text-muted-foreground">
              Page {page} / {pages}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={offset + PAGE_SIZE >= total}
              onClick={() => setOffset(offset + PAGE_SIZE)}
            >
              Next
            </Button>
          </div>
        </nav>

        <p className="text-muted-foreground text-xs">
          Leads are stored in Postgres. Status here is for staff tracking only and is not shown to the customer.
        </p>
      </main>

      <EnquirySheet
        enquiry={selected}
        open={Boolean(selected)}
        onOpenChange={(open) => !open && setSelected(null)}
        onChangeStatus={changeStatus}
        saving={saving}
      />
    </div>
  );
}
