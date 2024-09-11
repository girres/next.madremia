export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: `${(process.env?.SITE_URL || 'http://localhost:3000')}/sitemap.xml`,
    }
  }