const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const SEO_ENDPOINT = (slug: string) =>
  `/seo-meta/getSeoMetaData?slug=${slug}`;

export { SEO_ENDPOINT }