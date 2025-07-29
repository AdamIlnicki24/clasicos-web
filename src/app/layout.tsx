import { AppProviders } from "@/context/AppProviders";
import type { Metadata } from "next";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HOMEPAGE_HTML_TITLE } from "@/constants/htmlTitles";
import { HOMEPAGE_META_DESCRIPTION } from "@/constants/metaDescriptions";
import { Lato } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Footer } from "@/components/footer/Footer/Footer";
import { Nav } from "@/components/nav/Nav/Nav";

export const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${HOMEPAGE_HTML_TITLE}`,
    default: HOMEPAGE_HTML_TITLE,
  },
  description: HOMEPAGE_META_DESCRIPTION,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
  ),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
      "pl-PL": "/pl-PL",
    },
  },
  openGraph: { images: "/opengraph-image.jpg" },
  twitter: { images: "/twitter-image.jpg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pl" className={`${lato.className} antialiased`}>
      <body className="bg-defaultBlack text-defaultWhite">
        <AppProviders>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            theme="light"
            transition={Bounce}
            style={{ top: "4rem" }}
          />
          <header>
            <nav>
              <Nav />
            </nav>
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </AppProviders>
      </body>
    </html>
  );
}
