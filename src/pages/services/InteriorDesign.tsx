import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ContactSection from "@/components/ContactSection";
import heroImg from "@/Archive/Services/08aor-min.webp";
import img2 from "@/Archive/Services/07aor-min.jpg";
import img3 from "@/Archive/Projects/emw_01-min.jpg";
import { getInteriorDesignSchema } from "@/lib/schema";
import { projects } from "@/data/projects";

const processItems = [
  "Interior concept development",
  "Space planning and furniture layout",
  "Material and colour selection",
  "Lighting atmosphere and ambience planning",
  "Built-in cabinet and storage design",
  "Feature wall and ceiling design",
  "Selection of finishes, textures, and details",
  "Coordination between interior design and architectural structure",
];

// The studio's own Johor Bahru projects that include interior design.
const jbInteriorProjects = projects.filter(
  (p) => p.location?.includes("Johor Bahru") && p.scope?.includes("Interior Design"),
);

const questions = [
  {
    q: "Do you take on interior design projects in Johor Bahru?",
    a: (
      <>
        Yes. Our studio is at Taman Pelangi, Johor Bahru, and most of our
        residential interiors are Johor Bahru homes, from terrace houses to
        bungalows in areas such as Horizon Hills. We also design interiors
        elsewhere in Malaysia, such as{" "}
        <Link to="/project/rabbit-hole-kl/" className="underline underline-offset-4 hover:text-foreground">
          The Rabbit Hole KL
        </Link>{" "}
        in Kuala Lumpur.
      </>
    ),
  },
  {
    q: "Can an architect design my interior?",
    a: (
      <>
        Yes. The Board of Architects Malaysia (LAM) states that an architect
        registered with the Board is entitled to practise as an Interior
        Designer. Our studio is led by Ar. Hidi Lau Wei Lin, a LAM-registered
        architect, so the building and its interior can be designed together
        by one team.
      </>
    ),
  },
  {
    q: "How are interior design fees charged?",
    a: (
      <>
        When an architectural practice provides interior design, the
        Architects (Scale of Minimum Fees) Rules 2010 treat it as a
        supplementary service with a minimum fee of 10% of the total cost of
        works. The fee and what it covers should be agreed in writing before
        work starts. Our guide to{" "}
        <Link to="/blog/architect-fees-malaysia" className="underline underline-offset-4 hover:text-foreground">
          architect fees in Malaysia
        </Link>{" "}
        explains the fee scale.
      </>
    ),
  },
  {
    q: "How do I check that an interior designer is registered?",
    a: (
      <>
        LAM keeps a Register of Interior Designers under Part VA of the
        Architects Act 1967, and only a registered person may use the title
        "Interior Designer". You can search names on LAM's{" "}
        <a
          href="https://classic.lam.gov.my/registration-check"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-foreground"
        >
          registration check
        </a>
        . Our{" "}
        <Link to="/guides/interior-design-malaysia/" className="underline underline-offset-4 hover:text-foreground">
          guide to interior design in Malaysia
        </Link>{" "}
        explains who you can hire and how the work is regulated.
      </>
    ),
  },
];

const otherServices = [
  { num: "01", title: "Architectural Design", href: "/services/architectural-design/" },
  { num: "03", title: "Authority Submissions", href: "/services/authority-submissions/" },
  { num: "04", title: "Passionate Craftsmanship", href: "/services/craftsmanship/" },
];

const InteriorDesign = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Interior Design Johor Bahru | Hidi Lau Architect"
        description="Interior design in Johor Bahru by Hidi Lau Architect, est. 1989: space planning, built-in cabinets, lighting, materials and finishes for homes and workplaces."
        path="/services/interior-design/"
        breadcrumbs={[
          { name: "Services", path: "/services/" },
          { name: "Interior Design", path: "/services/interior-design/" },
        ]}
        schema={getInteriorDesignSchema()}

      />
      <Header />

      <main className="flex-1">

        {/* ── Breadcrumb / back nav ───────────────────────────────── */}
        <div className="flex items-center justify-between px-6 md:px-10 py-4 md:py-5 border-b border-border">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <ArrowLeft size={11} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
            <span className="text-[9px] md:text-[10px] tracking-[0.35em] font-fiona uppercase font-light">
              Services
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-4 md:w-5 h-px bg-foreground/30" />
            <span className="text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.45em] font-fiona uppercase text-muted-foreground font-light">
              02 — Interior Design
            </span>
            <div className="w-4 md:w-5 h-px bg-foreground/30" />
          </div>
        </div>

        {/* ── Hero ───────────────────────────────────────────────── */}
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "clamp(320px, 46vw, 580px)" }}
        >
          <img
            src={heroImg}
            alt="Interior design by Hidi Lau Architect, Johor Bahru"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.52)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 52%)" }}
          />
          <div className="absolute bottom-0 left-0 px-6 md:px-10 pb-8 md:pb-12">
            <p className="text-[9px] md:text-[10px] tracking-[0.35em] font-fiona uppercase text-white/40 mb-2 md:mb-3 font-light">
              02
            </p>
            <h1
              className="text-white font-fiona font-light leading-[1.1] mb-3 md:mb-5"
              style={{ fontSize: "clamp(38px, 6vw, 72px)", letterSpacing: "-0.01em" }}
            >
              Interior
              <br />
              Design
            </h1>
            <p
              className="text-white/60 font-fiona font-light leading-relaxed"
              style={{
                fontSize: "clamp(10px, 1.1vw, 13px)",
                letterSpacing: "0.1em",
                maxWidth: "clamp(280px, 38vw, 500px)",
              }}
            >
              A well-designed interior should not feel separate from the
              architecture. It should complete the experience of the space.
            </p>
          </div>
        </div>

        {/* ── Main content: intro + process ──────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border">

          {/* Left: body copy */}
          <div className="px-6 md:px-10 py-10 md:py-16 border-b md:border-b-0 md:border-r border-border flex flex-col gap-5 md:gap-7">
            <p className="text-[14px] md:text-[17px] lg:text-[19px] font-futura font-light leading-[1.85] md:leading-[1.9] text-foreground/80">
              Our interior design service in Johor Bahru focuses on creating interiors that are
              visually refined, comfortable, and practical for everyday living or
              working. We look beyond furniture and decoration. Instead, we
              consider how the interior connects with the overall architectural
              language, movement flow, lighting, materials, storage needs, and
              the lifestyle of the users.
            </p>

            {/* Residential / Commercial split */}
            <div className="grid grid-cols-2 gap-4 md:gap-5 border-t border-border pt-6 md:pt-7">
              <div>
                <p className="text-[9px] md:text-[10px] tracking-[0.4em] font-fiona uppercase text-muted-foreground/50 font-light mb-2 md:mb-3">
                  Residential
                </p>
                <p className="text-[11px] md:text-[12px] lg:text-[13px] font-futura font-light tracking-[0.06em] md:tracking-[0.08em] leading-[1.8] md:leading-[1.85] text-muted-foreground">
                  We design interiors that feel personal, warm, and highly
                  liveable — spaces that reflect how you truly live.
                </p>
              </div>
              <div>
                <p className="text-[9px] md:text-[10px] tracking-[0.4em] font-fiona uppercase text-muted-foreground/50 font-light mb-2 md:mb-3">
                  Commercial
                </p>
                <p className="text-[11px] md:text-[12px] lg:text-[13px] font-futura font-light tracking-[0.06em] md:tracking-[0.08em] leading-[1.8] md:leading-[1.85] text-muted-foreground">
                  We create environments that support brand identity, customer
                  experience, workflow, and long-term functionality.
                </p>
              </div>
            </div>

            <p className="text-[11px] md:text-[12px] lg:text-[13px] font-futura font-light tracking-[0.08em] md:tracking-[0.1em] leading-[1.85] md:leading-[1.9] text-muted-foreground border-t border-border pt-6 md:pt-7">
              We believe interior design should bring harmony between beauty and
              daily function. Every detail is considered carefully — from how a
              room feels when you enter, to how practical it is when used every
              day. The result is an interior that does not only look good in
              photos, but also feels comfortable, intentional, and lasting.
            </p>
          </div>

          {/* Right: process list */}
          <div className="px-6 md:px-10 py-10 md:py-16 flex flex-col">
            <p className="text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.45em] font-fiona uppercase text-muted-foreground/50 font-light mb-6 md:mb-8">
              Our Approach
            </p>
            <ul className="flex flex-col">
              {processItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 md:gap-4 py-3.5 md:py-4 border-b border-border last:border-b-0 group">
                  <span className="text-[8px] md:text-[9px] tracking-[0.2em] text-muted-foreground/30 font-fiona font-light tabular-nums mt-0.5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-3 h-px bg-foreground/30 mt-[9px] flex-shrink-0 transition-all duration-500 group-hover:w-5 group-hover:bg-foreground/60" />
                  <span className="text-[10px] md:text-[11px] lg:text-[12px] font-fiona font-light tracking-[0.08em] md:tracking-[0.1em] leading-[1.7] text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Image pair ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
          <div className="overflow-hidden aspect-[4/3]">
            <img src={img2} alt="Interior project" className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 hover:scale-[1.03] transition-all duration-700" />
          </div>
          <div className="overflow-hidden aspect-[4/3] border-t md:border-t-0 md:border-l border-border">
            <img src={img3} alt="Interior detail" className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 hover:scale-[1.03] transition-all duration-700" />
          </div>
        </div>

        {/* ── Johor Bahru interior projects ───────────────────────── */}
        <div>
          <div className="px-6 md:px-10 py-6 md:py-8 border-b border-border">
            <h2 className="text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.45em] font-fiona uppercase text-muted-foreground/50 font-light">
              Interior Design Projects in Johor Bahru
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {jbInteriorProjects.map((p) => (
              <Link
                key={p.id}
                to={`/project/${p.id}/`}
                className="group flex items-start justify-between gap-4 px-6 md:px-10 py-6 md:py-7 border-b border-border md:border-r md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0 hover:bg-muted/10 transition-colors duration-200"
              >
                <div className="flex flex-col gap-1.5">
                  <span className="text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.28em] font-fiona uppercase text-foreground font-normal">
                    {p.title}
                  </span>
                  <span className="text-[10px] md:text-[11px] font-futura font-light tracking-[0.06em] leading-[1.7] text-muted-foreground">
                    {p.projectType} · {p.location?.replace(", Malaysia", "")}
                  </span>
                </div>
                <ArrowUpRight size={11} className="mt-0.5 flex-shrink-0 text-muted-foreground/40 transition-all duration-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </div>

        {/* ── Common questions ───────────────────────────────────── */}
        <div className="border-b border-border">
          <div className="px-6 md:px-10 py-6 md:py-8 border-b border-border">
            <h2 className="text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.45em] font-fiona uppercase text-muted-foreground/50 font-light">
              Common Questions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {questions.map((item, i) => (
              <div
                key={i}
                className="px-6 md:px-10 py-8 md:py-10 border-b border-border last:border-b-0 md:[&:nth-child(odd)]:border-r md:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <h3 className="text-[13px] md:text-[15px] lg:text-[16px] font-futura font-light leading-[1.6] text-foreground/85 mb-3 md:mb-4">
                  {item.q}
                </h3>
                <p className="text-[11px] md:text-[12px] lg:text-[13px] font-futura font-light tracking-[0.06em] md:tracking-[0.08em] leading-[1.85] md:leading-[1.9] text-muted-foreground">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Other services ─────────────────────────────────────── */}
        <div className="border-b border-border">
          <div className="px-6 md:px-10 py-6 md:py-8 border-b border-border">
            <p className="text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.45em] font-fiona uppercase text-muted-foreground/50 font-light">
              Other Services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {otherServices.map((s, i) => (
              <Link
                key={i}
                to={s.href}
                className="group flex items-center justify-between px-6 md:px-10 py-6 md:py-7 border-b md:border-b-0 border-r border-border last:border-r-0 hover:bg-muted/10 transition-colors duration-200"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-[8px] md:text-[9px] tracking-[0.25em] font-fiona text-muted-foreground/35 font-light">
                    {s.num}
                  </span>
                  <div className="w-3 h-px bg-foreground/40 transition-all duration-300 group-hover:w-5" />
                  <span className="text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.28em] font-fiona uppercase text-foreground font-normal">
                    {s.title}
                  </span>
                </div>
                <ArrowUpRight size={11} className="text-muted-foreground/40 transition-all duration-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </div>

      </main>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default InteriorDesign;