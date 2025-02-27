"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function ZootopProject() {
  return (
    <div className="hover:cursor-default min-h-screen bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900 text-white">
      <Head>
        <title>동물원 관리 시스템 by 띵킹캣</title>
        <meta name="description" content="스마트한 전산화로 편리, 효율, 정확성까지 실현하는 동물원 관리 시스템" />
      </Head>

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
              alt="zoo management system icon"
              width={120}
              height={120}
              className="rounded-2xl shadow-lg mb-6"
            />
            <div className="text-3xl font-bold mb-4">동물원 관리 시스템</div>
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
                  alt="Google Play badge"
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
            <div className="text-2xl font-semibold mb-6">주요 기능</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-xl font-semibold mb-3">동물 관리</div>
                <p className="text-gray-300">
                  개체별 건강 상태, 급여 기록, 행동 패턴을 체계적으로 관리합니다.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-xl font-semibold mb-3">시설 관리</div>
                <p className="text-gray-300">
                  시설물 상태 점검 및 유지보수 일정을 효율적으로 관리합니다.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-xl font-semibold mb-3">인력 관리</div>
                <p className="text-gray-300">
                  직원 스케줄링과 업무 분배를 최적화하여 운영 효율을 높입니다.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-xl font-semibold mb-3">데이터 분석</div>
                <p className="text-gray-300">
                  수집된 데이터를 분석하여 의사결정을 지원하고 운영을 개선합니다.
                </p>
              </div>
            </div>

            {/* 지원 섹션 */}
            <div className="mt-20 border-t border-white/10 pt-10">
              <div className="text-2xl font-semibold mb-6">지원</div>
              <div className="bg-white bg-opacity-5 p-6 rounded-xl space-y-4">
                <div className="flex items-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-5 h-5 mr-3 text-blue-400"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" 
                    />
                  </svg>
                  <a 
                    href="mailto:thinkingcatworks@gmail.com" 
                    className="text-gray-300 hover:text-blue-300 transition-colors"
                  >
                    thinkingcatworks@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-5 h-5 mr-3 text-blue-400"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" 
                    />
                  </svg>
                  <a 
                    href="https://twin-zootopia.vercel.app/privacy" 
                    target="_blank"
                    className="text-gray-300 hover:text-blue-300 transition-colors"
                  >
                    개인정보처리방침
                  </a>
                </div>

                {/* <div className="flex items-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-5 h-5 mr-3 text-blue-400"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" 
                    />
                  </svg>
                  <a 
                    href="/terms-of-service" 
                    target="_blank"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    서비스 이용약관
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 