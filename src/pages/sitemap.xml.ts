import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE_URL } from "../data/site";

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  const staticUrls = [
    { loc: "/", priority: "1.0", changefreq: "weekly" },
    { loc: "/#hizmetler", priority: "0.9", changefreq: "monthly" },
    { loc: "/#sektorler", priority: "0.9", changefreq: "monthly" },
    { loc: "/#kapsama-alani", priority: "0.9", changefreq: "monthly" },
    { loc: "/#iletisim", priority: "0.9", changefreq: "monthly" },
    { loc: "/blog", priority: "0.8", changefreq: "weekly" },
    { loc: "/gizlilik-politikasi", priority: "0.3", changefreq: "yearly" },
  ];

  const postUrls = posts.map((post) => ({
    loc: `/blog/${post.id}`,
    priority: "0.7",
    changefreq: "monthly",
    lastmod: post.data.date.toISOString().split("T")[0],
  }));

  const urls = [...staticUrls, ...postUrls];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${new URL(url.loc, SITE_URL).toString()}</loc>
    ${"lastmod" in url && url.lastmod ? `<lastmod>${url.lastmod}</lastmod>\n    ` : ""}<changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
};
