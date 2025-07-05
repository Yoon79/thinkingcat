"use client";

import { motion, PanInfo } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function PiumProject() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [x, setX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const screenshots = ["/pium1.png", "/pium2.png", "/pium3.png"];

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, screenshots.length]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setX(-currentIndex * window.innerWidth);
    }
  }, [currentIndex]);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = 50;
    const swipe = info.offset.x;
    setIsAutoPlaying(false);

    if (Math.abs(swipe) > swipeThreshold) {
      if (swipe > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (swipe < 0 && currentIndex < screenshots.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    } else {
      if (typeof window !== "undefined") {
        setX(-currentIndex * window.innerWidth);
      }
    }

    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="cyber-grid opacity-10" />
        <div className="floating-particles" />
      </div>

      {/* 상단 네비게이션 */}
      <nav className="relative z-10 p-6 lg:p-8">
        <Link
          href="/#projects"
          className="inline-flex items-center px-4 py-2 glass-card hover:bg-white/20 backdrop-blur-sm rounded-lg text-white/90 hover:text-white transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          <span className="font-heading text-sm">프로젝트 목록</span>
        </Link>
      </nav>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* 앱 아이콘 및 제목 */}
          <div className="flex flex-col items-center justify-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mb-8"
            >
              <Image
                src="/icon-piumddeul.png"
                alt="pium icon"
                width={120}
                height={120}
                className="rounded-lg shadow-2xl image-sharp"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg blur opacity-30" />
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-3xl lg:text-4xl font-heading text-white mb-4 text-center leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              식물 쇼핑몰 및 커뮤니티
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-green-100 mb-8 text-center max-w-2xl font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              최신 기술이 적용된 대규모 식물 쇼핑몰 및 커뮤니티를 만나보세요
            </motion.p>

            {/* 앱스토어 링크 */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.kokoseoul.piumddeul"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 rounded-lg"
              >
                <Image
                  src="/google-play-badge.png"
                  alt="Google Play badge"
                  width={160}
                  height={48}
                  className="h-12 w-auto rounded-lg image-sharp"
                />
              </a>
              <div className="flex flex-col items-center">
                <Image
                  src="/app-store-badge.png"
                  alt="App Store Badge"
                  width={160}
                  height={48}
                  className="h-12 w-auto rounded-lg image-sharp opacity-60"
                />
                <span className="text-xs text-green-200 mt-1 font-body">
                  출시 예정
                </span>
              </div>
            </motion.div>
          </div>

          {/* 스크린샷 */}
          <div className="mb-20">
            {/* 데스크톱 뷰 */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {screenshots.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 glass-card">
                    <Image
                      src={img}
                      alt={`Screenshot ${index + 1}`}
                      width={400}
                      height={800}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300 image-sharp"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 모바일 스와이프 뷰 */}
            <div className="md:hidden relative w-full">
              <div
                className="relative w-full overflow-hidden"
                ref={containerRef}
              >
                <motion.div
                  className="flex touch-pan-y"
                  drag="x"
                  dragConstraints={
                    typeof window !== "undefined"
                      ? {
                          left: -((screenshots.length - 1) * window.innerWidth),
                          right: 0,
                        }
                      : undefined
                  }
                  onDragEnd={handleDragEnd}
                  animate={{ x }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{
                    touchAction: "pan-y pinch-zoom",
                    width:
                      typeof window !== "undefined"
                        ? `${screenshots.length * window.innerWidth}px`
                        : undefined,
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  {screenshots.map((img, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 flex items-center relative select-none"
                      style={{
                        width:
                          typeof window !== "undefined"
                            ? `${window.innerWidth}px`
                            : "100vw",
                        opacity: currentIndex === index ? 1 : 0.4,
                        transition: "all 0.3s ease",
                        transform: `scale(${
                          currentIndex === index ? 1 : 0.95
                        })`,
                      }}
                    >
                      <div className="w-full flex justify-center items-center px-2">
                        <div
                          className="relative overflow-hidden rounded-lg shadow-xl glass-card w-[280px]"
                          style={{ transform: "translateX(-20px)" }}
                        >
                          <Image
                            src={img}
                            alt={`Screenshot ${index + 1}`}
                            width={400}
                            height={800}
                            className="w-full h-auto object-contain image-sharp"
                            style={{ maxHeight: "65vh" }}
                            draggable={false}
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* 페이지 인디케이터 */}
              <div className="flex justify-center mt-6 gap-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                      setTimeout(() => setIsAutoPlaying(true), 5000);
                    }}
                    className={`w-3 h-3 rounded-sm transition-all duration-300 ${
                      currentIndex === index
                        ? "bg-green-400 scale-110"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 설명 및 주요 기능 */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mb-8"
            >
              <h2 className="text-lg sm:text-xl font-heading text-white mb-6 text-center">
                주요 기능
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-lg shadow-lg border border-white/20 hover:shadow-xl transition-shadow">
                  <div className="text-base sm:text-lg font-heading mb-2 text-green-300">
                    식물 관리 가이드
                  </div>
                  <p className="text-gray-300 text-sm font-body leading-relaxed">
                    식물별 맞춤 관리법과 성장 단계별 가이드
                  </p>
                </div>
                <div className="glass-card p-4 rounded-lg shadow-lg border border-white/20 hover:shadow-xl transition-shadow">
                  <div className="text-base sm:text-lg font-heading mb-2 text-emerald-300">
                    커뮤니티 공유
                  </div>
                  <p className="text-gray-300 text-sm font-body leading-relaxed">
                    식물 애호가들과 경험과 정보를 공유하는 공간
                  </p>
                </div>
                <div className="glass-card p-4 rounded-lg shadow-lg border border-white/20 hover:shadow-xl transition-shadow">
                  <div className="text-base sm:text-lg font-heading mb-2 text-teal-300">
                    성장 기록
                  </div>
                  <p className="text-gray-300 text-sm font-body leading-relaxed">
                    식물의 성장 과정을 사진과 함께 기록
                  </p>
                </div>
                <div className="glass-card p-4 rounded-lg shadow-lg border border-white/20 hover:shadow-xl transition-shadow">
                  <div className="text-base sm:text-lg font-heading mb-2 text-lime-300">
                    관리 알림
                  </div>
                  <p className="text-gray-300 text-sm font-body leading-relaxed">
                    물주기, 분갈이 등 관리 시기를 알림으로 제공
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 지원 섹션 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="border-t border-green-400/30 pt-12"
            >
              <h2 className="text-xl sm:text-2xl font-heading text-white mb-8 text-center">
                지원
              </h2>
              <div className="glass-card p-8 rounded-lg border border-green-400/30">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading text-green-300 mb-2">
                      프로젝트 문의
                    </h3>
                    <p className="text-green-100 text-sm sm:text-base font-body mb-4 leading-relaxed">
                      식물 관련 플랫폼 개발이나 e-커머스 시스템 구축 관련
                      문의사항이 있으시면 언제든지 연락 주세요.
                    </p>
                    <a
                      href="mailto:thinkingcatworks@gmail.com"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-200 text-sm font-heading"
                    >
                      이메일 보내기
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
