import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        "/comment-gerer-le-stress-et-l-anxiete-au-quotidien-conseils-pratiques",
      ],
    },
    sitemap: "https://tds-blog.vercel.app/sitemap.xml",
  };
}
