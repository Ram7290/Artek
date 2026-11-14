export type AdminUser = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "staff";
};

export type EnquiryStatus = "new" | "contacted" | "quoted" | "won" | "lost";
export type NotificationStatus = "pending" | "sent" | "failed" | "skipped";

export type Enquiry = {
  id: string;
  fullName: string;
  companyName: string | null;
  email: string;
  phone: string;
  service: string;
  emirate: string;
  message: string | null;
  source: string;
  notificationStatus: NotificationStatus;
  status: EnquiryStatus;
  createdAt: string;
  updatedAt: string;
};

export const ENQUIRY_STATUSES: EnquiryStatus[] = ["new", "contacted", "quoted", "won", "lost"];
