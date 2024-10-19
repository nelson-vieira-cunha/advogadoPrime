const generateSiteMap = (urls) => {
    return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls
          .map((url) => {
            return `
              <url>
                <loc>${url.loc}</loc>
                <lastmod>${url.lastmod}</lastmod>
                <changefreq>${url.changefreq}</changefreq>
                <priority>${url.priority}</priority>
              </url>
            `;
          })
          .join('')}
      </urlset>
    `;
  };
  
  export default async function handler(req, res) {
    const urls = [
      { loc: 'https://www.exemplo.com/', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 1.0 },
    ];
  
    const sitemap = generateSiteMap(urls);
  
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
  }
  