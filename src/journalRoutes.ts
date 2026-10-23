import { lazy } from "react";

// The Journal pages carry the Supabase client (the largest part of the site's
// code), so they load as their own file instead of slowing every other page.
const loadBlog = () => import("./pages/Blog");
const loadBlogDetail = () => import("./pages/BlogDetail");

export const BlogPost = lazy(loadBlog);
export const BlogDetail = lazy(loadBlogDetail);

// Called before the first render: a visitor who lands on a Journal page gets
// its code first, so the ready-made page is replaced without a blank moment.
export const preloadJournalRoute = (path: string): Promise<unknown> => {
  if (/^\/(blog|guides)\/[^/]+/.test(path)) return loadBlogDetail();
  if (/^\/blog\/?$/.test(path)) return loadBlog();
  return Promise.resolve();
};
