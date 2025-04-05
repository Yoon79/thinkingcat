import type { Metadata } from "next";
import "./globals.css";
import Providers from "../components/providers";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "띵킹캣",
  description: "소프트웨어를 통해 더 편리한 일상과 새로운 가치를 제공합니다.",
  url: "https://www.thinkingcatworks.com/",
  hasPart: [
    {
      "@type": "SiteNavigationElement",
      name: "프로젝트",
      url: "https://www.thinkingcatworks.com/#projects",
    },
    {
      "@type": "SiteNavigationElement",
      name: "소개",
      url: "https://www.thinkingcatworks.com/#about",
    },
    {
      "@type": "SiteNavigationElement",
      name: "문의하기",
      url: "https://www.thinkingcatworks.com/#contact",
    },
  ],
};

export const metadata: Metadata = {
  title: "띵킹캣 | 앱 ・ 프로그램 개발 전문",
  description:
    "띵킹캣은 소프트웨어를 통해 더 편리한 일상과 새로운 가치를 제공합니다.",
  keywords: [
    "띵킹캣",
    "thinking cat",
    "thinkingcat",
    "앱개발",
    "프로그램개발",
    "소프트웨어개발",
    "모바일앱",
    "웹개발",
  ],
  authors: [{ name: "thinkingcat" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "띵킹캣 - 앱 ・ 프로그램 개발 전문",
    description:
      "띵킹캣은 혁신적인 앱 개발과 프로그램 개발을 전문으로 하는 기업입니다.",
    type: "website",
    url: "https://www.thinkingcatworks.com/",
    siteName: "띵킹캣(thinkingcat)",
    locale: "ko_KR",
    images: [
      {
        url: "https://imagedelivery.net/XFfVvOueFmZxIJrF5kfmFw/c625c966-1258-4c38-8460-31ffd9946900/public",
        width: 600,
        height: 600,
        alt: "띵킹캣 로고",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://thinkingcatworks.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning={true} className="antialiased">
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
    </html>
  );
}
