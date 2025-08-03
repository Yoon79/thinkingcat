"use client";

import { motion, PanInfo } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function GodsaengProject() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [x, setX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const screenshots = ["/godsaeng.png", "/godsaeng2.png", "/godsaeng3.png"];

  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isClient && windowWidth > 0) {
      setX(-currentIndex * windowWidth);
    }
  }, [currentIndex, windowWidth, isClient]);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = windowWidth * 0.15; // 화면 너비의 15%로 임계값 줄임
    const swipe = info.offset.x;

    if (swipe > swipeThreshold && currentIndex > 0) {
      // 오른쪽으로 스와이프했고, 이전 슬라이드가 있는 경우
      setCurrentIndex(currentIndex - 1);
    } else if (
      swipe < -swipeThreshold &&
      currentIndex < screenshots.length - 1
    ) {
      // 왼쪽으로 스와이프했고, 다음 슬라이드가 있는 경우
      setCurrentIndex(currentIndex + 1);
    } else if (Math.abs(swipe) > 20) {
      // 조금이라도 스와이프했다면 방향에 따라 이동
      if (swipe > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (swipe < 0 && currentIndex < screenshots.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        // 첫/마지막 슬라이드인 경우 원래 위치로
        if (isClient && windowWidth > 0) {
          setX(-currentIndex * windowWidth);
        }
      }
    } else {
      // 거의 스와이프하지 않았으면 원래 위치로
      if (isClient && windowWidth > 0) {
        setX(-currentIndex * windowWidth);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-teal-900 text-white relative overflow-hidden">
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
                src="/godlife-icon.png"
                alt="godsaeng icon"
                width={120}
                height={120}
                className="rounded-lg shadow-2xl image-sharp"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg blur opacity-30" />
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-3xl lg:text-4xl font-heading text-white mb-4 text-center leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              소셜 네트워크 플랫폼
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-purple-100 mb-8 text-center max-w-2xl font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              혁신적인 기획으로 새로운 형태의 소셜 네트워크를 만나보세요
            </motion.p>

            {/* 앱스토어 링크 */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.kokoseoul.gongyak"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 rounded-lg"
              >
                <Image
                  src="/google-play-badge.png"
                  alt="Google Play Badge"
                  width={160}
                  height={48}
                  className="h-12 w-auto rounded-lg image-sharp"
                />
              </a>
              <a
                href="https://apps.apple.com/kr/app/%ED%88%AC%EB%91%90%EA%B2%8C%EB%8D%94/id6744063670?l=en-GB"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 rounded-lg"
              >
                <Image
                  src="/app-store-badge.png"
                  alt="App Store Badge"
                  width={160}
                  height={48}
                  className="h-12 w-auto rounded-lg image-sharp"
                />
              </a>
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
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                  dragElastic={0.2}
                  dragConstraints={
                    isClient && windowWidth > 0
                      ? {
                          left: -((screenshots.length - 1) * windowWidth),
                          right: 0,
                        }
                      : undefined
                  }
                  onDragEnd={handleDragEnd}
                  animate={{ x }}
                  transition={{ type: "tween", duration: 0.1 }}
                  style={{
                    touchAction: "pan-x",
                    width:
                      isClient && windowWidth > 0
                        ? `${screenshots.length * windowWidth}px`
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
                          isClient && windowWidth > 0
                            ? `${windowWidth}px`
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
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-sm transition-all duration-300 ${
                      currentIndex === index
                        ? "bg-purple-400 scale-110"
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
                  <div className="text-base sm:text-lg font-heading mb-2 text-purple-300">
                    소셜 네트워킹
                  </div>
                  <p className="text-gray-300 text-sm font-body leading-relaxed">
                    친구들과 소통하며 일상을 공유하는 플랫폼
                  </p>
                </div>
                <div className="glass-card p-4 rounded-lg shadow-lg border border-white/20 hover:shadow-xl transition-shadow">
                  <div className="text-base sm:text-lg font-heading mb-2 text-indigo-300">
                    목표 설정 및 달성
                  </div>
                  <p className="text-gray-300 text-sm font-body leading-relaxed">
                    개인 목표를 설정하고 달성 과정을 기록
                  </p>
                </div>
                <div className="glass-card p-4 rounded-lg shadow-lg border border-white/20 hover:shadow-xl transition-shadow">
                  <div className="text-base sm:text-lg font-heading mb-2 text-teal-300">
                    실시간 채팅
                  </div>
                  <p className="text-gray-300 text-sm font-body leading-relaxed">
                    실시간으로 소통하고 서로를 응원하는 채팅
                  </p>
                </div>
                <div className="glass-card p-4 rounded-lg shadow-lg border border-white/20 hover:shadow-xl transition-shadow">
                  <div className="text-base sm:text-lg font-heading mb-2 text-pink-300">
                    성과 공유
                  </div>
                  <p className="text-gray-300 text-sm font-body leading-relaxed">
                    달성한 목표와 성과를 커뮤니티에 공유
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 지원 섹션 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="border-t border-purple-400/30 pt-12"
            >
              <h2 className="text-xl sm:text-2xl font-heading text-white mb-8 text-center">
                지원
              </h2>
              <div className="glass-card p-8 rounded-lg border border-purple-400/30">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg flex items-center justify-center">
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
                    <h3 className="text-lg font-heading text-purple-300 mb-2">
                      프로젝트 문의
                    </h3>
                    <p className="text-purple-100 text-sm sm:text-base font-body mb-4 leading-relaxed">
                      소셜 네트워크 플랫폼 개발이나 기능 추가 관련 문의사항이
                      있으시면 언제든지 연락 주세요.
                    </p>
                    <a
                      href="mailto:thinkingcatworks@gmail.com"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-teal-500 text-white rounded-lg hover:from-purple-600 hover:to-teal-600 transition-all duration-200 text-sm font-heading"
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
