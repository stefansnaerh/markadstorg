import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderHideOnScroll from "./components/Headers/HeaderHideOnScroll";
import FooterMinimal from "./components/Footer/FooterMinimal/FooterMinimal";
const workSans = localFont({
  src: [
    {
      path: "../public/fonts/work-sans-v24-latin-regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/work-sans-v24-latin-600.woff2",
      weight: "600",
    },
    {
      path: "../public/fonts/work-sans-v24-latin-700.woff2",
      weight: "700",
    },
  ],
  variable: "--font-body",
});
const playfair = localFont({
  src: [
    {
      path: "../public/fonts/playfair-display-v40-latin-regular.woff2",
      weight: "400",
    },

    {
      path: "../public/fonts/playfair-display-v40-latin-500.woff2",
      weight: "500",
    },
  ],
  variable: "--font-headline",
});
export const metadata: Metadata = {
  title: "Markaðstorg",
  description:
    "Bókhaldsþjónusta fyrir fyrirtæki og einstaklinga. Persónuleg og fagleg þjónusta byggð á reynslu og nákvæmni.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <HeaderHideOnScroll />
        <main className="pt-[90px]">{children}</main>
        <FooterMinimal />
      </body>
    </html>
  );
}
