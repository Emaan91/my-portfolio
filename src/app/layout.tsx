import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const newYorkEscape = localFont({
  src: "./fonts/newyorkescape.ttf",
  variable: "--new-york-escape",
  weight: "100 400",
});
const robotoLight = localFont({
  src: "./fonts/Roboto-Light.ttf",
  variable: "--roboto-light",
  weight: "100 400",
});

export const metadata: Metadata = {
  title: "Emaan Arshad - Portfolio",
  description: "Portfolio showcasing my front-end development skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${newYorkEscape.variable} ${robotoLight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
