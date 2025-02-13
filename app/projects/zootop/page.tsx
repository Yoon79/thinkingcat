"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ZootopProject() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900 text-white">
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
              src="/zootopiaicon.png"
              alt="zootop icon"
              width={120}
              height={120}
              className="rounded-2xl shadow-lg mb-6"
            />
            <h1 className="text-3xl font-bold mb-4">동물원 관리 시스템</h1>
            <p className="text-xl text-gray-300 mb-8">
              스마트한 전산화로 편리, 효율, 정확성까지 실현하는 동물원 관리 시스템
            </p>

            {/* 앱스토어 링크 */}
            <div className="flex gap-4 justify-center">
              <a 
                href="https://play.google.com/store/apps/details?id=com.kokoseoul.zootopia" 
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
                href="https://apps.apple.com/app/your-zootop-id" 
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
              {['/zootop1.png', '/zootop2.png', '/zootop3.png'].map((img, index) => (
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
            <h2 className="text-2xl font-semibold mb-6">주요 기능</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">동물 관리</h3>
                <p className="text-gray-300">
                  개체별 건강 상태, 급여 기록, 행동 패턴을 체계적으로 관리합니다.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">시설 관리</h3>
                <p className="text-gray-300">
                  시설물 상태 점검 및 유지보수 일정을 효율적으로 관리합니다.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">인력 관리</h3>
                <p className="text-gray-300">
                  직원 스케줄링과 업무 분배를 최적화하여 운영 효율을 높입니다.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">데이터 분석</h3>
                <p className="text-gray-300">
                  수집된 데이터를 분석하여 의사결정을 지원하고 운영을 개선합니다.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 