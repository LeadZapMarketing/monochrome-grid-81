import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
// Every page but the homepage loads its own code when visited, so the homepage
// downloads only what it needs. main.tsx renders in a transition with no boundary
// around the routes, so the prerendered page stays on screen until that code arrives.
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const BlogPost = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const WhatsAppChatWidget = lazy(() => import("./components/WhatsAppChatWidget"));
const ArchitecturalDesign = lazy(() => import("./pages/services/ArchitecturalDesign"));
const InteriorDesign = lazy(() => import("./pages/services/InteriorDesign"));
const AuthoritySubmissions = lazy(() => import("./pages/services/AuthoritySubmissions"));
const PassionateCraftsmanship = lazy(() => import("./pages/services/Craftsmanship"));


const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about/" element={<About />} />
            <Route path="/services/" element={<Services />} />
            <Route path="/contact/" element={<Contact />} />
            <Route path="/project/:id/" element={<ProjectDetail />} />
            <Route path="/blog/" element={<BlogPost />} />
            <Route path="/blog/:slug/" element={<BlogDetail />} />
            <Route path="/services/architectural-design/" element={<ArchitecturalDesign />} />
            <Route path="/services/interior-design/" element={<InteriorDesign />} />
            <Route path="/services/authority-submissions/" element={<AuthoritySubmissions />} />
            <Route path="/services/craftsmanship/" element={<PassionateCraftsmanship />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Suspense fallback={null}>
            <WhatsAppChatWidget />
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;