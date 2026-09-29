const siteUrl = 'https://www.tazkera.academy';

export default function sitemap() {
  return ['/', '/about', '/contact'].map((path) => ({
    url: `${siteUrl}${path}`,
  }));
}
