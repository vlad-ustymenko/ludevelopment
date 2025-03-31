import localFont from "next/font/local";
import { MenuProvider } from "@/context/MenuContext";
import { ViewportWidthProvider } from "@/context/ViewportWidthContext";
import { ModalProvider } from "@/context/ModalContext";

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

export const metadata = {
  // metadataBase: new URL("https://sofua.army"),
  title: "LineUP Development",
  description: "Studio Architecture",
  // openGraph: {
  //   title: "Рекрутинг Сил спеціальних операцій.",
  //   description: "Звичайні люди. Надзвичайні задачі.",
  //   images: [
  //     {
  //       url: "og-image.jpg",
  //       width: 1920,
  //       height: 1080,
  //       alt: "Рекрутинг Сил спеціальних операцій.",
  //     },
  //   ],
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${MariupolBold.className} ${MariupolMedium.className} ${MariupolRegular.className}`}
      >
        <ModalProvider>
          <ViewportWidthProvider>
            <MenuProvider>{children}</MenuProvider>
          </ViewportWidthProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
