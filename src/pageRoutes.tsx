import { lazy, useState, type ComponentType } from "react";

// Every page except the homepage loads as its own file, so the homepage (where most
// visitors land) downloads only its own code. Before the first render, main.tsx loads
// the code of the page the visitor landed on, and that page then draws at once, with
// no blank moment between the ready-made page and React's copy.
type PageModule = { default: ComponentType };

const lazyPage = (load: () => Promise<PageModule>) => {
  let loaded: PageModule | undefined;
  const preload = () =>
    load().then((mod) => {
      loaded = mod;
      return mod;
    });
  const Lazy = lazy(preload);
  const Page = () => {
    // Decided once per mount, so a page never switches between the two and redraws.
    const [ready] = useState(() => loaded);
    if (ready) {
      const Loaded = ready.default;
      return <Loaded />;
    }
    return <Lazy />;
  };
  return { Page, preload };
};

const about = lazyPage(() => import("./pages/About"));
const services = lazyPage(() => import("./pages/Services"));
const contact = lazyPage(() => import("./pages/Contact"));
const project = lazyPage(() => import("./pages/ProjectDetail"));
const blog = lazyPage(() => import("./pages/Blog"));
const blogDetail = lazyPage(() => import("./pages/BlogDetail"));
const architecturalDesign = lazyPage(() => import("./pages/services/ArchitecturalDesign"));
const interiorDesign = lazyPage(() => import("./pages/services/InteriorDesign"));
const authoritySubmissions = lazyPage(() => import("./pages/services/AuthoritySubmissions"));
const craftsmanship = lazyPage(() => import("./pages/services/Craftsmanship"));
const notFound = lazyPage(() => import("./pages/NotFound"));

export const About = about.Page;
export const Services = services.Page;
export const Contact = contact.Page;
export const ProjectDetail = project.Page;
export const BlogPost = blog.Page;
export const BlogDetail = blogDetail.Page;
export const ArchitecturalDesign = architecturalDesign.Page;
export const InteriorDesign = interiorDesign.Page;
export const AuthoritySubmissions = authoritySubmissions.Page;
export const PassionateCraftsmanship = craftsmanship.Page;
export const NotFound = notFound.Page;

// Same paths as the routes in App.tsx (trailing slash optional).
const byPath: [RegExp, () => Promise<unknown>][] = [
  [/^\/$/, () => Promise.resolve()],
  [/^\/about\/?$/, about.preload],
  [/^\/services\/?$/, services.preload],
  [/^\/contact\/?$/, contact.preload],
  [/^\/project\/[^/]+\/?$/, project.preload],
  [/^\/blog\/?$/, blog.preload],
  [/^\/(blog|guides)\/[^/]+\/?$/, blogDetail.preload],
  [/^\/services\/architectural-design\/?$/, architecturalDesign.preload],
  [/^\/services\/interior-design\/?$/, interiorDesign.preload],
  [/^\/services\/authority-submissions\/?$/, authoritySubmissions.preload],
  [/^\/services\/craftsmanship\/?$/, craftsmanship.preload],
];

export const preloadRoute = (path: string): Promise<unknown> =>
  (byPath.find(([re]) => re.test(path))?.[1] ?? notFound.preload)();
