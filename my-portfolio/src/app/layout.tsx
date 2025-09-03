/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Layout, FixedPlugin } from "@/components";
import "@fontsource/roboto";

export const metadata: Metadata = {
  title: "Michael Esther Portfolio",
  description:
    "Meet Michael Esther- a creative backend engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="font-roboto">
        <Layout>
          {children}
          {/* <FixedPlugin /> */}
        </Layout>
      </body>
    </html>
  );
}
