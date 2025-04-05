"use client";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Link from "next/link";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black/95 text-white">
      {/* 데스크톱 헤더 */}
      <div className="hidden md:block">
        <Header />
      </div>

      {/* 모바일 뒤로가기 버튼 */}
      <div className="md:hidden p-4">
        <Link
          href="/#projects"
          className="inline-flex items-center text-white hover:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </Link>
      </div>

      {/* 메인 콘텐츠 */}
      <main>{children}</main>

      {/* 푸터 */}
      <Footer />
    </div>
  );
}
