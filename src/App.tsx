import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
const WhatsAppChatWidget = lazy(() => import("./components/WhatsAppChatWidget"));
import ArchitecturalDesign from "./pages/services/ArchitecturalDesign";
import InteriorDesign from "./pages/services/InteriorDesign";
import AuthoritySubmissions from "./pages/services/AuthoritySubmissions";
import PassionateCraftsmanship from "./pages/services/Craftsmanship";
import { BlogPost, BlogDetail } from "./journalRoutes";



const App = () => (
  <HelmetProvider>
    <Toaster />
    <BrowserRouter future={{ v7_startTransition: true }}>
      <ScrollToTop />
      <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about/" element={<About />} />
        <Route path="/services/" element={<Services />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/project/:id/" element={<ProjectDetail />} />
        <Route path="/blog/" element={<BlogPost />} />
        <Route path="/blog/:slug/" element={<BlogDetail />} />
        <Route path="/guides/:slug/" element={<BlogDetail />} />
        <Route path="/services/architectural-design/" element={<ArchitecturalDesign />} />
        <Route path="/services/interior-design/" element={<InteriorDesign />} />
        <Route path="/services/authority-submissions/" element={<AuthoritySubmissions />} />
        <Route path="/services/craftsmanship/" element={<PassionateCraftsmanship />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
      <Suspense fallback={null}>
        <WhatsAppChatWidget />
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;