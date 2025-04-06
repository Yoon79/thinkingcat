"use client";

import { motion, PanInfo } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function ZootopProject() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  // const constraintsRef = useRef(null);
  const screenshots = ["/zootop1.png", "/zootop2.png", "/zootop3.png"];

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, screenshots.length]);

  const handleDragStart = () => {
    setIsDragging(true);
    setIsAutoPlaying(false);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);
    const swipeThreshold = 50;
    const swipe = info.offset.x;

    if (Math.abs(swipe) > swipeThreshold) {
      if (swipe > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (swipe < 0) {
        if (currentIndex === screenshots.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
      }
    }

    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black/95 text-white">
      <Head>
        <title>동물원 관리 시스템 by 띵킹캣</title>
        <meta
          name="description"
          content="스마트한 전산화로 편리, 효율, 정확성까지 실현하는 동물원 관리 시스템"
        />
      </Head>

      {/* 메인 콘텐츠 */}
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* 앱 아이콘 및 제목 */}
          <div className="flex flex-col items-center justify-center mb-6">
            <Image
              src="/zootopiaicon.png"
              alt="zoo management system icon"
              width={60}
              height={60}
              className="rounded-lg shadow-lg mb-3"
            />
            <h2 className="text-xl font-bold mb-1">동물원 관리 시스템</h2>
            <div className="text-sm text-gray-300 mb-4">
              스마트한 전산화로 편리, 효율, 정확성까지 실현하는 동물원 관리
              시스템
            </div>

            {/* 앱스토어 링크 */}
            <div className="flex gap-3 justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.thinkingcat.zootopia&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <Image
                  src="/google-play-badge.png"
                  alt="Google Play badge"
                  width={120}
                  height={36}
                  className="h-[36px] w-auto"
                />
              </a>
              <a
                href="https://apps.apple.com/kr/app/%EB%8F%99%EB%AC%BC%EC%9B%90%EA%B4%80%EB%A6%AC%EC%8B%9C%EC%8A%A4%ED%85%9C/id6742187071?l=en-GB"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <Image
                  src="/app-store-badge.png"
                  alt="App Store badge"
                  width={120}
                  height={36}
                  className="h-[36px] w-auto"
                />
              </a>
            </div>
          </div>

          {/* 앱 스크린샷 */}
          <div className="mt-8">
            {/* 데스크톱 뷰 */}
            <div className="hidden md:grid md:grid-cols-3 gap-3">
              {screenshots.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Image
                    src={img}
                    alt={`Screenshot ${index + 1}`}
                    width={240}
                    height={480}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              ))}
            </div>

            {/* 모바일 스와이프 뷰 */}
            <div className="md:hidden relative w-full overflow-x-hidden">
              <div className="w-full px-3">
                <motion.div
                  drag="x"
                  dragConstraints={{
                    left: -((screenshots.length - 1) * (160 + 12)),
                    right: 0,
                  }}
                  dragElastic={0.1}
                  dragMomentum={false}
                  onDragEnd={handleDragEnd}
                  onDragStart={handleDragStart}
                  className="flex touch-pan-y"
                  style={{
                    transform: `translateX(calc(-${currentIndex * 100}% - ${
                      currentIndex * 0.75
                    }rem))`,
                    transition: isDragging ? "none" : "transform 0.3s ease-out",
                    touchAction: "pan-y pinch-zoom",
                    width: "fit-content",
                  }}
                >
                  {screenshots.map((img, index) => (
                    <div
                      key={index}
                      className="min-w-full w-full flex-shrink-0 flex justify-center relative select-none"
                      style={{
                        marginRight: "0.75rem",
                        opacity: currentIndex === index ? 1 : 0.3,
                        transition: "all 0.3s ease",
                        transform: `scale(${currentIndex === index ? 1 : 0.9})`,
                      }}
                    >
                      <div className="relative w-full max-w-[160px]">
                        <Image
                          src={img}
                          alt={`Screenshot ${index + 1}`}
                          width={240}
                          height={480}
                          className="rounded-lg shadow-lg w-full h-auto object-contain"
                          style={{ maxHeight: "50vh" }}
                          draggable={false}
                          priority
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* 페이지 인디케이터 */}
              <div className="flex justify-center mt-3 gap-1.5">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                      currentIndex === index ? "bg-white" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 앱 설명 */}
          <div className="mt-8 text-left max-w-xl mx-auto">
            <div className="text-lg font-semibold mb-3">주요 기능</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-[#2c2635] bg-opacity-90 p-3 rounded-lg">
                <div className="text-base font-semibold mb-1">동물 관리</div>
                <p className="text-gray-300 text-xs">
                  개체별 건강 상태, 급여 기록, 행동 패턴을 체계적으로
                  관리합니다.
                </p>
              </div>
              <div className="bg-[#2c2635] bg-opacity-90 p-3 rounded-lg">
                <div className="text-base font-semibold mb-1">시설 관리</div>
                <p className="text-gray-300 text-xs">
                  시설물 상태 점검 및 유지보수 일정을 효율적으로 관리합니다.
                </p>
              </div>
              <div className="bg-[#2c2635] bg-opacity-90 p-3 rounded-lg">
                <div className="text-base font-semibold mb-1">인력 관리</div>
                <p className="text-gray-300 text-xs">
                  직원 스케줄링과 업무 분배를 최적화하여 운영 효율을 높입니다.
                </p>
              </div>
              <div className="bg-[#2c2635] bg-opacity-90 p-3 rounded-lg">
                <div className="text-base font-semibold mb-1">데이터 분석</div>
                <p className="text-gray-300 text-xs">
                  수집된 데이터를 분석하여 의사결정을 지원하고 운영을
                  개선합니다.
                </p>
              </div>
            </div>

            {/* 지원 섹션 */}
            <div className="mt-8 border-t border-gray-800 pt-6">
              <div className="text-lg font-semibold mb-3">지원</div>
              <div className="bg-[#2c2635] bg-opacity-90 p-3 rounded-lg space-y-2">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 mr-2 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <a
                    href="mailto:thinkingcatworks@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
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
                    className="w-4 h-4 mr-2 text-gray-300"
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
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    개인정보처리방침
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
