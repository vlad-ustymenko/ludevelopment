export const revalidate = 3600;

export default async function sitemap() {
  const baseUrl = "https://lineup.dev";

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
