import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Products from "@/pages/Products";
import Solutions from "@/pages/Solutions";
import SolutionTemplate from "@/pages/solutions/SolutionTemplate";
import Locations from "@/pages/Locations";
import LocationTemplate from "@/pages/locations/LocationTemplate";
import LocationServiceTemplate from "@/pages/locations/LocationServiceTemplate";
import Industries from "@/pages/Industries";
import IndustryTemplate from "@/pages/industries/IndustryTemplate";
import Blog from "@/pages/Blog";
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";
import TermsAndConditions from "@/pages/legal/TermsAndConditions";
import NotFound from "@/pages/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="solutions/:slug" element={<SolutionTemplate />} />
        <Route path="locations" element={<Locations />} />
        <Route path="locations/:emirate" element={<LocationTemplate />} />
        <Route path="locations/:emirate/:service" element={<LocationServiceTemplate />} />
        <Route path="industries" element={<Industries />} />
        <Route path="industries/:slug" element={<IndustryTemplate />} />
        <Route path="blog" element={<Blog />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
