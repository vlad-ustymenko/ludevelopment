import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import localFont from "next/font/local";
import "./globals.css";

const MariupolBold = localFont({
  src: "../public/fonts/Mariupol-Bold.ttf",
  weight: "700",
  style: "normal",
  display: "swap",
});

const MariupolMedium = localFont({
  src: "../public/fonts/Mariupol-Medium.ttf",
  weight: "500",
  style: "normal",
  display: "swap",
});

const MariupolRegular = localFont({
  src: "../public/fonts/Mariupol-Regular.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const generateMetadata = async ({ params }) => {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "Metadata",
  });

  return {
    metadataBase: new URL("https://building.lineup.in.ua"),
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: "/og-image.jpg",
          width: 1920,
          height: 1080,
          alt: t("ogTitle"),
        },
      ],
    },
  };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${MariupolBold.className} ${MariupolMedium.className} ${MariupolRegular.className}`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
