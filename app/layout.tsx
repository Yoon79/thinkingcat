import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "띵킹캣",
//   description: "앱 ・ 프로그램 개발 전문 기업",
// };

export const metadata: Metadata = {
  title: '띵킹캣 - 앱개발 및 프로그램 개발 전문 기업',
  description: '띵킹캣은 혁신적인 앱 개발과 프로그램 개발을 전문으로 하는 기업입니다. 소프트웨어를 통해 더 편리한 일상과 새로운 가치를 제공합니다.',
  keywords: ['띵킹캣', 'thinking cat', 'thinkingcat', '앱개발', '프로그램개발', '소프트웨어개발', '모바일앱', '웹개발'],
  authors: [{ name: 'ThinkingCAT' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: '띵킹캣 - 앱개발 및 프로그램 개발 전문 기업',
    description: '띵킹캣은 혁신적인 앱 개발과 프로그램 개발을 전문으로 하는 기업입니다.',
    type: 'website',
    url: 'https://www.thinkingcatworks.com/',
    images: [
      {
        url: '/thinkingcat.png',
        width: 600,
        height: 600,
        alt: '띵킹캣 로고',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
  // verification: {
  //   google: 'Google Search Console verification code',
  // },
  alternates: {
    canonical: 'https://www.thinkingcatworks.com/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
