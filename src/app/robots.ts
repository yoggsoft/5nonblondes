import { MetadataRoute } from "next";

export default function robots (): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/css', 'privacy']
			}
		],
		sitemap: `https://www.5nonblondes.com/sitemap.xml`
	}
}