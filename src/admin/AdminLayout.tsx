import { type ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthProvider, useAuth } from "./lib/auth";

/**
 * Route guard: requires a logged-in admin user.
 * Redirects to /admin/login if unauthenticated.
 */
export function Protected({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="grid min-h-dvh place-items-center text-sm text-muted-foreground">
        Loading…......
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }
  return <>{children}</>;
}

/**
 * Route guard: only for guests/signed-out visitors.
 * Redirects already logged-in admins to /admin.
 */
export function PublicOnly({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (user) {
    return <Navigate to="/admin" replace />;
  }
  return <>{children}</>;
}

/**
 * Top-level Admin layout.
 * Encapsulates the light theme and AuthProvider.
 */
export function AdminLayout() {
  return (
    <div className="admin-portal min-h-dvh bg-background text-foreground">
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </div>
  );
}
