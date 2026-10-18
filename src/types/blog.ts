export interface BlogPost {
    id: string;
    createdAt: string;
    updatedAt?: string;
    author?: string;
    content?: string;
    excerpt?: string;
    image?: string;
    publishedAt?: string;
    tags?: string;
    title?: string;
    featured?: boolean;
    slug?: string;
  }
  
  export type BlogCategory = "All" | "设计知识" | "项目故事";
// publishedAt is empty on every post, so fall back to the row's createdAt.
// Supabase sends updatedAt without a time zone: it is UTC.
const asUtc = (d: string) => (/[zZ]|[+-]\d\d:?\d\d$/.test(d) ? d : `${d}Z`);

export const getPostDate = (post: BlogPost): string | undefined => {
  const d = post.publishedAt || post.createdAt;
  return d ? new Date(asUtc(d)).toISOString() : undefined;
};

export const getPostModified = (post: BlogPost): string | undefined =>
  post.updatedAt ? new Date(asUtc(post.updatedAt)).toISOString() : getPostDate(post);
