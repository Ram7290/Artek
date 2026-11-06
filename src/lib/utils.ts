import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Builds "Page | ARTEK" style titles consistently */
export function joinTitle(...parts: string[]): string {
  return parts.filter(Boolean).join(" | ");
}
