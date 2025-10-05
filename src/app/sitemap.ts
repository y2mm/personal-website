import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "http://localhost:3000/", priority: 1 },
    { url: "http://localhost:3000/#about" },
    { url: "http://localhost:3000/#projects" },
    { url: "http://localhost:3000/#experience" },
  ];
}