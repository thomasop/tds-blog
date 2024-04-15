import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: [
        "/profile",
        "/api",
        "/_next",
        "/static",
        "/public",
        "/dev",
        "/utilisateur",
        "/utilisateurs",
        "/reinitialisation-mot-de-passe/*",
      ],
      allow: [
        "/",
        "/comment-gerer-le-stress-et-l-anxiete-au-quotidien-conseils-pratiques",
      ],
    },
    sitemap: "https://tds-blog.vercel.app/sitemap.xml",
  };
}
