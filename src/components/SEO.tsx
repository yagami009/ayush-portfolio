import { Helmet } from "react-helmet-async";

const BASE = "https://ayushmh.com";
const OG_IMAGE = `${BASE}/opengraph.jpg`;

type SEOProps = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export function SEO({ title, description, path, type = "website" }: SEOProps) {
  const url = `${BASE}${path}`;
  const fullTitle = `${title} — Ayush Mahajan`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:site_name" content="Ayush Mahajan" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  );
}