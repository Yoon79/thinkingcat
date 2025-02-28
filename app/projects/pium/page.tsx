"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function PiumProject() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-teal-900 to-blue-900 text-white">
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
              src="/icon-piumddeul.png"
              alt="pium icon"
              width={120}
              height={120}
              className="rounded-2xl shadow-lg mb-6"
            />
            <h2 className="text-3xl font-bold mb-4">식물 쇼핑몰 및 커뮤니티</h2>
            <div className="text-xl text-gray-300 mb-8">
              최신 기술이 적용된 대규모 식물 쇼핑몰 및 커뮤니티를 만나보세요
            </div>

            {/* 앱스토어 링크 */}
            <div className="flex gap-4 justify-center">
              <a 
                href="https://play.google.com/store/apps/details?id=com.kokoseoul.piumddeul" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <Image
                  src="/google-play-badge.png"
                  alt="Google Play badge"
                  width={200}
                  height={60}
                  className="h-[60px] w-auto"
                />
              </a>
              <a 
                href="https://apps.apple.com/app/your-pium-id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <Image
                  src="/app-store-badge.png"
                  alt="App Store badge"
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
              {['/pium1.png', '/pium2.png', '/pium3.png'].map((img, index) => (
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
                <div className="text-xl font-semibold mb-3">식물 쇼핑</div>
                <p className="text-gray-300">
                  다양한 식물과 관련 용품을 쉽고 편리하게 구매할 수 있습니다.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-xl font-semibold mb-3">커뮤니티</div>
                <p className="text-gray-300">
                  식집사들과 정보를 공유하고 소통할 수 있는 공간입니다.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-xl font-semibold mb-3">식물 케어 가이드</div>
                <p className="text-gray-300">
                  식물별 맞춤 관리 방법과 팁을 제공합니다.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-xl font-semibold mb-3">식물 공구</div>
                <p className="text-gray-300">
                    희귀한 식물들을 연계된 농장에서 공수 해옵니다.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
    </div>
  );
} 