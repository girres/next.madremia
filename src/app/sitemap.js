export default function sitemap() {
    const url = process.env?.SITE_URL || 'http://localhost:3000';
    return [
      {
        url: url,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
        alternates: {
          languages: {
            es: `${url}/es`,
            en: `${url}/en`
          }
        }
      },
      {
        url: `${url}/diagnosis`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: {
          languages: {
            es: `${url}/diagnosis/es`,
            en: `${url}/diagnosis/en`
          }
        }
      },
      {
        url: `${url}/us`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
        alternates: {
          languages: {
            es: `${url}/diagnosis/es`,
            en: `${url}/diagnosis/en`
          }
        }
      },
    ]
  }