"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function GodsaengProject() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-teal-900 text-white">
      {/* 상단 네비게이션 */}
      <nav className="p-4">
        <Link 
          href="/#projects" 
          className="inline-flex items-center text-white hover:text-gray-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </Link>
      </nav>

      {/* 메인 콘텐츠 */}
      <div className="container mx-auto px-4 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* 앱 아이콘 및 제목 */}
          <div className="flex flex-col items-center justify-center mb-12">
            <Image
              src="/godlife-icon.png"
              alt="godsaeng icon"
              width={120}
              height={120}
              className="rounded-2xl shadow-lg mb-6"
            />
            <div className="text-3xl font-bold mb-4">소셜 네트워크 플랫폼</div>
            <p className="text-xl text-gray-300 mb-8">
              혁신적인 기획으로 새로운 형태의 소셜 네트워크를 만나보세요
            </p>

            {/* 앱스토어 링크 */}
            <div className="flex gap-4 justify-center">
              <a 
                href="https://play.google.com/store/apps/details?id=com.kokoseoul.gongyak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <Image
                  src="/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="h-[60px] w-auto"
                />
              </a>
              <a 
                href="https://apps.apple.com/app/your-app-id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <Image
                  src="/app-store-badge.png"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="h-[60px] w-auto"
                />
              </a>
            </div>
          </div>

          {/* 앱 스크린샷 */}
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['/godsaeng.png', '/godsaeng2.png', '/godsaeng3.png'].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Image
                    src={img}
                    alt={`Screenshot ${index + 1}`}
                    width={400}
                    height={800}
                    className="rounded-xl shadow-lg"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* 앱 설명 */}
          <div className="mt-20 text-left max-w-3xl mx-auto">
            <div className="text-2xl font-semibold mb-6">주요 기능</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-xl font-semibold mb-3">사용자 맞춤형 피드</div>
                <p className="text-gray-300">
                  AI 기반 추천 시스템으로 사용자의 관심사에 맞는 콘텐츠를 제공합니다.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-xl font-semibold mb-3">실시간 댓글</div>
                <p className="text-gray-300">
                  빠른 실시간 댓글로 즉각적인 소통이 가능합니다.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-xl font-semibold mb-3">커뮤니티</div>
                <p className="text-gray-300">
                  다양한 주제의 커뮤니티에서 비슷한 관심사를 가진 사람들과 소통하세요.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-xl font-semibold mb-3">콘텐츠 공유</div>
                <p className="text-gray-300">
                  다양한 형태의 콘텐츠를 쉽고 빠르게 공유할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

  
    </div>
  );
} 