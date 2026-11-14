import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EnquiryWidget } from "@/components/common/EnquiryWidget";
import { SEOHead } from "@/components/common/SEOHead";
import { getLenis, initLenis } from "@/lib/lenis";

export function MainLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    initLenis();
  }, []);
  useEffect(() => {
    // Lenis drives scroll position virtually — route resets must go through it.
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <SEOHead />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <EnquiryWidget />
    </div>
  );
}
