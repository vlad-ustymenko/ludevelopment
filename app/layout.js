import { Geist, Geist_Mono } from "next/font/google";
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
  src: "../public/fonts/Mariupol-Medium.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
});


export const metadata = {
  title: "LineUp Development",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={`${MariupolBold.className} ${MariupolMedium.className} ${MariupolRegular.className}`}>
        {children}
      </body>
    </html>
  );
}
