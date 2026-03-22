import type { Metadata } from "next";
import { Inter, Noto_Serif_KR } from "next/font/google";
import { LocaleProvider } from "@/lib/locale-context";
import { ThemeProvider } from "@/lib/theme-context";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif_KR({
  variable: "--font-serif",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "djangNan - 장난처럼 시작해서, 진심이 된 것들",
  description:
    "두 개발자의 작업실. What started as play, became something real.",
  metadataBase: new URL("https://djangnan.org"),
  openGraph: {
    title: "djangNan",
    description:
      "두 개발자의 작업실. What started as play, became something real.",
    url: "https://djangnan.org",
    siteName: "djangNan",
    locale: "ko_KR",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "djangNan",
    description:
      "두 개발자의 작업실. What started as play, became something real.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(window.matchMedia("(prefers-color-scheme:dark)").matches){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${notoSerif.variable} font-serif antialiased selection:bg-orange-500/30`}
      >
        <ThemeProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
