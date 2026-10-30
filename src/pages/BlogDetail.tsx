import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { supabase } from "@/lib/supabase";
import { BlogPost, getPostDate, getPostModified } from "@/types/blog";
import { getBlogPostingSchema } from "@/lib/schema";
import { getLocalGuide } from "@/data/guides";
import { trackWhatsAppClick, WHATSAPP_LINK } from "@/lib/whatsapp";

// A closing paragraph per post that links readers on to the page that answers their next question.
type NextStepLink = { to: string; label: string };
type NextStep = { lead: string; links: NextStepLink[] };

const NEXT_STEPS: Record<string, NextStep> = {
  "hiring-an-architect-in-johor-bahru": {
    lead: "Planning a home or renovation in Johor Bahru? See how we take a project from brief to approval in our",
    links: [
      { to: "/services/architectural-design/", label: "architectural design service" },
      { to: "/contact/", label: "talk to an architect in Johor Bahru" },
    ],
  },
  "architecture-in-johor-bahru": {
    lead: "Want a tropical home that stays cool without relying on air-conditioning? Read about our",
    links: [
      { to: "/services/architectural-design/", label: "architectural design service" },
      { to: "/contact/", label: "arrange a consultation for your site" },
    ],
  },
  "architecture-and-interior-design-planning": {
    lead: "We plan the building and its interiors as one project. Learn more about our",
    links: [
      { to: "/services/interior-design/", label: "interior design service" },
      { to: "/contact/", label: "discuss your project with us" },
    ],
  },
  "design-and-build-your-dream-house": {
    lead: "Ready to move from concept to completion? Explore our",
    links: [
      { to: "/services/", label: "architecture and interior design services" },
      { to: "/contact/", label: "start your project with an enquiry" },
    ],
  },
  "certificate-of-completion-and-compliance-malaysia": {
    lead: "Building your own home and want the plans, approvals and CCC handled by a registered architect? See our",
    links: [
      { to: "/services/authority-submissions/", label: "authority submissions service" },
      { to: "/contact/", label: "ask us about your project" },
    ],
  },
  "what-does-an-architect-do-malaysia": {
    lead: "Planning a new home or a major renovation and want a registered architect to take it from brief to CCC? See our",
    links: [
      { to: "/services/architectural-design/", label: "architectural design service" },
      { to: "/contact/", label: "talk to us about your project" },
    ],
  },
  "house-renovation-malaysia": {
    lead: "Planning an extension or a structural renovation and want the drawings and council submissions handled by a registered architect? See our",
    links: [
      { to: "/services/authority-submissions/", label: "authority submissions service" },
      { to: "/contact/", label: "tell us about your renovation" },
    ],
  },
  "build-house-on-own-land-malaysia": {
    lead: "Building on your own land and want the drawings, submissions and approvals handled by a registered architect? See our",
    links: [
      { to: "/services/authority-submissions/", label: "authority submissions service" },
      { to: "/contact/", label: "tell us about your land" },
    ],
  },
  "interior-design-malaysia": {
    lead: "Planning the interior of a new home or a renovation? See how we work in our",
    links: [
      { to: "/services/interior-design/", label: "interior design service" },
      { to: "/contact/", label: "tell us about your space" },
    ],
  },
  "pam-member-in-architect-industry": {
    lead: "Hidi Lau is a LAM-registered architect and PAM member. Read",
    links: [
      { to: "/about/", label: "about our practice and credentials" },
      { to: "/contact/", label: "speak to a registered architect" },
    ],
  },
};

const DEFAULT_NEXT_STEP: NextStep = {
  lead: "Thinking about your own project? Explore our",
  links: [
    { to: "/services/", label: "architecture and interior design services" },
    { to: "/contact/", label: "get in touch with our studio" },
  ],
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const localGuide = getLocalGuide(slug);
  const [post, setPost] = useState<BlogPost | null>(localGuide || null);
  const [loading, setLoading] = useState(!localGuide);

  useEffect(() => {
    const guide = getLocalGuide(slug);
    if (guide) {
      setPost(guide);
      setLoading(false);
      return;
    }

    const fetchPost = async () => {
      setLoading(true);

      // 先用 slug 查
      let { data, error } = await supabase
        .from("HidiLauTable")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      // slug 找不到，再用 id 查
      if (!data) {
        const result = await supabase
          .from("HidiLauTable")
          .select("*")
          .eq("id", slug)
          .maybeSingle();
        data = result.data;
      }

      if (data) setPost(data);
      setLoading(false);
    };

    if (slug) fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="space-y-2 w-full max-w-2xl px-6">
            <div className="animate-pulse h-3 bg-muted w-1/4 mb-6" />
            <div className="animate-pulse h-6 bg-muted w-3/4 mb-4" />
            <div className="animate-pulse aspect-[16/9] bg-muted mb-8" />
            <div className="animate-pulse h-3 bg-muted w-full mb-2" />
            <div className="animate-pulse h-3 bg-muted w-full mb-2" />
            <div className="animate-pulse h-3 bg-muted w-2/3" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Article not found
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  const postDate = getPostDate(post);
  // A guide with its own address (/guides/<slug>/) keeps it as its canonical, with the slash.
  const pagePath = post.path || `/blog/${post.slug || post.id}`;
  const description = post.excerpt || `${post.title} — HIDI Lau Architect Journal`;
  // Repo guides import their cover from the build, so it comes as a root-relative path.
  const image = post.image?.startsWith("/") ? `https://hidilauarchitect.com${post.image}` : post.image;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title={post.seoTitle || `${post.title} | HIDI Lau Architect`}
        description={description}
        path={pagePath}
        schema={getBlogPostingSchema({
          title: post.title || "",
          description,
          url: `https://hidilauarchitect.com${pagePath}`,
          image,
          author: post.author,
          datePublished: postDate,
          dateModified: getPostModified(post),
        })}
        trailingSlash={pagePath.endsWith("/")}
        breadcrumbs={[
          { name: "Journal", path: "/blog/" },
          { name: post.title, path: pagePath },
        ]}
        image={image}
        type="article"
      />
      <Header />
      <main className="flex-1">
        {/* Title bar */}
        <div className="border-b border-border py-10 px-6">
          <div className="max-w-3xl mx-auto flex items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                {post.tags && (
                  <span className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground border border-border px-2 py-1">
                    {post.tags.split(",")[0].trim()}
                  </span>
                )}
                {postDate && (
                  <time dateTime={postDate} className="text-[9px] tracking-[0.2em] text-muted-foreground">
                    {new Date(postDate).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      timeZone: "Asia/Kuala_Lumpur",
                    })}
                  </time>
                )}
              </div>
              <h1 className="text-xl md:text-2xl tracking-[0.12em] uppercase font-light text-foreground leading-relaxed">
                {post.title}
              </h1>
              {post.author && (
                <p className="text-[10px] tracking-[0.2em] text-muted-foreground mt-3 uppercase">
                  By {post.author}
                </p>
              )}
            </div>
            <Link to="/blog" className="group flex items-center gap-2 shrink-0">
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                All Articles
              </span>
              <div className="w-6 h-6 border border-border flex items-center justify-center transition-colors duration-300 group-hover:border-foreground">
                <ArrowUpRight
                  size={10}
                  className="text-muted-foreground group-hover:text-foreground transition-colors rotate-180"
                />
              </div>
            </Link>
          </div>
        </div>

        {post.image && (
          <div className="max-w-3xl mx-auto px-6 py-8">
            <img
              src={post.image}
              alt={post.title || ""}
              className="w-full h-auto object-contain rounded-none"
            />
          </div>
        )}

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
          {post.excerpt && (
            <p className="text-sm leading-8 text-muted-foreground font-light border-l-2 border-foreground pl-6 mb-10 italic">
              {post.excerpt}
            </p>
          )}
          {post.content && (
            <div
              className="prose prose-sm max-w-none
                prose-headings:font-light prose-headings:tracking-[0.15em] prose-headings:uppercase prose-headings:text-foreground
                prose-h2:text-base prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-sm prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-8 prose-p:font-light prose-p:text-xs
                prose-strong:text-foreground prose-strong:font-medium
                prose-ul:text-muted-foreground prose-ul:text-xs prose-ul:leading-8
                prose-ol:text-muted-foreground prose-ol:text-xs prose-ol:leading-8
                prose-li:marker:text-muted-foreground
                prose-img:w-full prose-img:my-8
                prose-a:text-foreground prose-a:underline-offset-4
                prose-blockquote:border-l-foreground prose-blockquote:text-muted-foreground prose-blockquote:font-light prose-blockquote:italic"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          )}
          {(() => {
            const next = NEXT_STEPS[post.slug || ""] || DEFAULT_NEXT_STEP;
            return (
              <p className="mt-12 pt-8 border-t border-border text-xs leading-8 text-muted-foreground font-light">
                {next.lead}{" "}
                <Link to={next.links[0].to} className="text-foreground underline underline-offset-4">
                  {next.links[0].label}
                </Link>
                , or{" "}
                <Link to={next.links[1].to} className="text-foreground underline underline-offset-4">
                  {next.links[1].label}
                </Link>
                .
              </p>
            );
          })()}
          {localGuide && (
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppClick}
              className="mt-8 inline-flex items-center gap-3 border border-foreground px-6 py-3 text-[10px] tracking-[0.25em] uppercase text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              WhatsApp our architect
              <ArrowUpRight size={12} />
            </a>
          )}
        </div>

        {/* Back to blog */}
        <div className="border-t border-border px-6 py-10">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="group inline-flex items-center gap-3"
            >
              <div className="w-8 h-px bg-muted-foreground group-hover:w-12 transition-all duration-300" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                Back to Journal
              </span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;