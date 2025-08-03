"use client";

import { motion, PanInfo } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function OhihooProject() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [x, setX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const screenshots = [
    "/ohihoo1.png",
    "/ohihoo2.png",
    "/ohihoo3.png",
    "/ohihoo4.png",
    "/ohihoo5.png",
    "/ohihoo6.png",
  ];

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
      // 거의 스와이프하지 않았으면 원래 위치로 확실히 돌아감
      if (isClient && windowWidth > 0) {
        setX(-currentIndex * windowWidth);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 text-gray-900">
      {/* 상단 네비게이션 */}
      <nav className="p-6 lg:p-8">
        <Link
          href="/#projects"
          className="inline-flex items-center px-4 py-2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-lg text-gray-700 hover:text-gray-900 transition-all duration-200 border border-gray-200/50 hover:border-gray-300"
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
      <div className="container mx-auto px-6 lg:px-8 pb-20">
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
                src="/circlelogo.png"
                alt="ohihoo icon"
                width={120}
                height={120}
                className="rounded-lg shadow-2xl bg-white border border-gray-200/50 image-sharp"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-200 to-orange-200 rounded-lg blur opacity-20" />
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-3xl lg:text-4xl font-heading text-gray-900 mb-4 text-center leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              소품샵 오히후 온라인 스토어
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 text-center max-w-2xl font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              일상의 소소한 행복을 더하는 트렌디한 온라인 소품샵
            </motion.p>

            <motion.div
              className="text-center bg-gradient-to-r from-amber-100 to-orange-100 px-6 py-4 rounded-lg border border-amber-200/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-sm sm:text-base text-amber-800 font-body">
                다양한 소품을 쉽고 빠르게 만나보세요
              </p>
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
                  <div className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white border border-gray-200/50">
                    <Image
                      src={img}
                      alt={`Screenshot ${index + 1}`}
                      width={400}
                      height={800}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300 image-sharp"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                          className="relative overflow-hidden rounded-lg shadow-xl bg-white border border-gray-200/50 w-[280px]"
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
                        ? "bg-amber-600 scale-110"
                        : "bg-gray-300 hover:bg-gray-400"
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
              <h2 className="text-lg sm:text-xl font-heading text-gray-900 mb-6 text-center">
                주요 기능
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow">
                  <div className="text-base sm:text-lg font-heading mb-2 text-amber-800">
                    소품 큐레이션
                  </div>
                  <p className="text-gray-600 text-sm font-body leading-relaxed">
                    소소한 행복을 더하는 아기자기한 소품을 한눈에!
                  </p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow">
                  <div className="text-base sm:text-lg font-heading mb-2 text-amber-800">
                    간편한 온라인 주문
                  </div>
                  <p className="text-gray-600 text-sm font-body leading-relaxed">
                    모바일/PC에서 쉽고 빠르게 주문 가능
                  </p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow">
                  <div className="text-base sm:text-lg font-heading mb-2 text-amber-800">
                    다양한 결제 수단
                  </div>
                  <p className="text-gray-600 text-sm font-body leading-relaxed">
                    카드, 간편결제 등 다양한 결제 지원
                  </p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow">
                  <div className="text-base sm:text-lg font-heading mb-2 text-amber-800">
                    빠른 배송 서비스
                  </div>
                  <p className="text-gray-600 text-sm font-body leading-relaxed">
                    전국 어디서나 빠르고 안전한 배송
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 지원 섹션 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="border-t border-gray-200 pt-12"
            >
              <h2 className="text-xl sm:text-2xl font-heading text-gray-900 mb-8 text-center">
                지원
              </h2>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg border border-amber-200/50 shadow-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
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
                    <h3 className="text-lg font-heading text-amber-800 mb-2">
                      프로젝트 문의
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base font-body mb-4 leading-relaxed">
                      프로젝트 관련 문의사항이 있으시면 언제든지 연락 주세요.
                      빠른 시일 내에 답변드리겠습니다.
                    </p>
                    <a
                      href="mailto:thinkingcatworks@gmail.com"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-200 text-sm font-heading"
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
