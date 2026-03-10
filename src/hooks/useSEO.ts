import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  canonicalUrl?: string;
  schema?: any;
  googleSiteVerification?: string;
}

export const useSEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterTitle,
  twitterDescription,
  canonicalUrl,
  schema,
  googleSiteVerification,
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    updateMetaTag("name", "title", title);
    updateMetaTag("name", "description", description);
    updateMetaTag("name", "keywords", keywords.join(", "));

    // Open Graph
    updateMetaTag("property", "og:title", ogTitle || title);
    updateMetaTag("property", "og:description", ogDescription || description);
    if (ogImage) updateMetaTag("property", "og:image", ogImage);
    if (ogUrl) updateMetaTag("property", "og:url", ogUrl);

    // Twitter Card
    updateMetaTag("name", "twitter:title", twitterTitle || title);
    updateMetaTag("name", "twitter:description", twitterDescription || description);

    // Canonical
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", canonicalUrl);
    }

    // Google Site Verification
    if (googleSiteVerification) {
      updateMetaTag("name", "google-site-verification", googleSiteVerification);
    }

    // Schema.org Structured Data
    if (schema) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.setAttribute("type", "application/ld+json");
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    }

    return () => {
      // Cleanup if needed
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, schema]);
};

function updateMetaTag(
  attribute: "name" | "property",
  attributeValue: string,
  content: string
) {
  let element = document.querySelector(
    `meta[${attribute}="${attributeValue}"]`
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}
