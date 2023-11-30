import React, { type ReactNode } from "react";
import AppLayout from "~/components/AppLayout";
import type { Metadata, Viewport } from "next";
import type { Icon } from "next/dist/lib/metadata/types/metadata-types";

const favicons: Icon[] = [];

if (process.env.FAVICON_URL_16) {
  favicons.push({ url: process.env.FAVICON_URL_16, sizes: "16x16", type: "image/png" });
}
if (process.env.FAVICON_URL_32) {
  favicons.push({ url: process.env.FAVICON_URL_32, sizes: "32x32", type: "image/png" });
}
if (process.env.FAVICON_URL_96) {
  favicons.push({ url: process.env.FAVICON_URL_96, sizes: "96x96", type: "image/png" });
}
if (process.env.FAVICON_URL_192) {
  favicons.push({ url: process.env.FAVICON_URL_192, sizes: "192x192", type: "image/png" });
}

export const metadata: Metadata = {
  title: process.env.SEO_TITLE,
  description: process.env.SEO_DESCRIPTION,
  keywords: process.env.SEO_KEYWORDS?.split(","),
  authors: [{ name: process.env.PROFILE_NAME, url: process.env.PROFILE_GITHUB_URL }],
  creator: process.env.PROFILE_NAME,
  publisher: process.env.PROFILE_NAME,
  icons: {
    icon: favicons,
  },
  metadataBase: new URL(process.env.WEBSITE_URL || "https://google.com"),
  openGraph: {
    title: process.env.SEO_TITLE,
    description: process.env.SEO_DESCRIPTION,
    type: "profile",
  },
  verification: {
    other: {
      "google-adsense-account": "ca-pub-1487783963443396",
    },
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#040B14",
};

type RootLayoutProps = {
  children: ReactNode,
};

const RootLayout = ({
  children,
}: RootLayoutProps) => (
  <html lang="en">
    <body>
      <AppLayout>
        {children}
      </AppLayout>
    </body>
  </html>
);

export default RootLayout;
