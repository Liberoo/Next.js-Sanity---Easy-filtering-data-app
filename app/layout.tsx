import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ease Filter App",
  description: "Filtering ease next-13 app",
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "twitter:image": "https://i.ibb.com/d6TXxB2/homepage-thumbnail.jpg",
    "twitter:card": "summary_large_image",
    "og:url": "kamiljamroz.pl",
    "og:image": "https://i.ibb.com/d6TXxB2/homepage-thumbnail.jpg",
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins text-white">
        {children}
      </body>
    </html>
  );
}
