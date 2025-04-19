export const revalidate = 3600;

const locales = ["uk", "en"];
const baseUrl = "https://building.lineup.in.ua";

export default async function sitemap() {
  const lastModified = new Date().toISOString();

  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 1.0,
    alternates: locales.map((altLocale) => ({
      hreflang: altLocale,
      href: `${baseUrl}/${altLocale}`,
    })),
  }));
}
