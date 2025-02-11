import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "http://5nonblondes.com",
      lastModified: new Date()
    }
  ]
};
