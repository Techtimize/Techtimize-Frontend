const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
console.log(baseUrl)

const SEO_ENDPOINT = (slug: string) =>
  `${baseUrl}/api/v1/seo-meta/getSeoMetaData?slug=${slug}`;

export { SEO_ENDPOINT };
