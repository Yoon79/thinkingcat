"use client";

import { motion, PanInfo } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';

export default function GodsaengProject() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  // const constraintsRef = useRef(null);
  const screenshots = ['/godsaeng.png', '/godsaeng2.png', '/godsaeng3.png'];

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

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
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
            <h2 className="text-3xl sm:text-xl font-bold mb-4">소셜 네트워크 플랫폼</h2>
            <div className="text-xl sm:text-base text-gray-300 mb-8">
              혁신적인 기획으로 새로운 형태의 소셜 네트워크를 만나보세요
            </div>

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
                  alt="Google Play Badge"
                  width={200}
                  height={60}
                  className="h-[60px] w-auto"
                />
              </a>
              <div>
              {/* <a 
                href="https://apps.apple.com/app/your-app-id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              > */}
                <Image
                  src="/app-store-badge.png"
                  alt="App Store Badge"
                  width={200}
                  height={60}
                  className="h-[60px] w-auto"
                />
                <div className="italic text-gray-300">* 출시예정</div>
              {/* </a> */}
              </div>
            </div>
          </div>

          {/* 앱 스크린샷 */}
          <div className="mt-20">
            {/* 데스크톱 뷰 */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
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
                    width={400}
                    height={800}
                    className="rounded-xl shadow-lg"
                  />
                </motion.div>
              ))}
            </div>

            {/* 모바일 스와이프 뷰 */}
            <div className="md:hidden relative w-full overflow-x-hidden">
              <div className="w-full px-8">
                <motion.div
                  drag="x"
                  dragConstraints={{ left: -((screenshots.length - 1) * (280 + 32)), right: 0 }}
                  dragElastic={0.1}
                  dragMomentum={false}
                  onDragEnd={handleDragEnd}
                  onDragStart={handleDragStart}
                  className="flex touch-pan-y"
                  style={{ 
                    transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 2}rem))`,
                    transition: isDragging ? 'none' : 'transform 0.3s ease-out',
                    touchAction: 'pan-y pinch-zoom',
                    width: 'fit-content',
                  }}
                >
                  {screenshots.map((img, index) => (
                    <div
                      key={index}
                      className="min-w-full w-full flex-shrink-0 flex justify-center relative select-none"
                      style={{ 
                        marginRight: '2rem',
                        opacity: currentIndex === index ? 1 : 0.3,
                        transition: 'all 0.3s ease',
                        transform: `scale(${currentIndex === index ? 1 : 0.9})`,
                      }}
                    >
                      <div className="relative w-full max-w-[280px]">
                        <Image
                          src={img}
                          alt={`Screenshot ${index + 1}`}
                          width={400}
                          height={800}
                          className="rounded-xl shadow-lg w-full h-auto object-contain"
                          style={{ maxHeight: '70vh' }}
                          draggable={false}
                          priority
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* 페이지 인디케이터 */}
              <div className="flex justify-center mt-4 gap-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      currentIndex === index ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 앱 설명 */}
          <div className="mt-20 text-left max-w-3xl mx-auto">
            <div className="text-2xl sm:text-xl font-semibold mb-6">주요 기능</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-xl sm:text-lg font-semibold mb-3">사용자 맞춤형 피드</div>
                <p className="text-gray-300 sm:text-sm">
                  AI 기반 추천 시스템으로 사용자의 관심사에 맞는 콘텐츠를 제공합니다.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-xl sm:text-lg font-semibold mb-3">실시간 댓글</div>
                <p className="text-gray-300 sm:text-sm">
                  빠른 실시간 댓글로 즉각적인 소통이 가능합니다.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-xl sm:text-lg font-semibold mb-3">커뮤니티</div>
                <p className="text-gray-300 sm:text-sm">
                  다양한 주제의 커뮤니티에서 비슷한 관심사를 가진 사람들과 소통하세요.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-xl sm:text-lg font-semibold mb-3">콘텐츠 공유</div>
                <p className="text-gray-300 sm:text-sm">
                  다양한 형태의 콘텐츠를 쉽고 빠르게 공유할 수 있습니다.
                </p>
              </div>
            </div>

            {/* 지원 섹션 */}
            <div className="mt-20 border-t border-white/10 pt-10">
              <div className="text-2xl sm:text-xl font-semibold mb-6">지원</div>
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
                      href="https://gongyak.vercel.app/privacy"
                      target="_blank"
                      className="text-gray-300 hover:text-blue-300 transition-colors"
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