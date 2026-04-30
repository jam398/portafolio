import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jose Addiel Martinez De La Cruz | Portfolio",
  description:
    "Professional portfolio for Jose Addiel Martinez De La Cruz, a software developer building practical AI-powered web systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="motion-js-flag" strategy="beforeInteractive">
          {`document.documentElement.dataset.js = "true";`}
        </Script>
        {children}
      </body>
    </html>
  );
}