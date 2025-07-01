"use client";

import { motion, PanInfo } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from 'react';

export default function OhihooProject() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [x, setX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const screenshots = ['/ohihoo1.png', '/ohihoo2.png', '/ohihoo3.png', '/ohihoo4.png', '/ohihoo5.png', '/ohihoo6.png'];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setX(-currentIndex * window.innerWidth);
    }
  }, [currentIndex]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    const swipe = info.offset.x;
    if (Math.abs(swipe) > swipeThreshold) {
      if (swipe > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (swipe < 0 && currentIndex < screenshots.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    } else {
      if (typeof window !== 'undefined') {
        setX(-currentIndex * window.innerWidth);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#333]">
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
              src="/circlelogo.png"
              alt="ohihoo icon"
              width={120}
              height={120}
              className="rounded-2xl shadow-lg mb-6 bg-white"
            />
            <h2 className="text-3xl sm:text-xl font-bold mb-4 text-[#222]">소품샵 오히후 온라인 스토어</h2>
            <div className="text-xl sm:text-base text-[#555] mb-8">
              일상의 소소한 행복을 더하는 트렌디한 온라인 소품샵
            </div>
          </div>
          <div className="text-center mb-8">
              <p className="text-xl text-[#666]">
                다양한 소품을 쉽고 빠르게 만나보세요
              </p>
            </div>
          {/* 스크린샷 */}
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
              <div className="w-full px-0" ref={containerRef}>
                <motion.div
                  className="flex touch-pan-y"
                  drag="x"
                  dragConstraints={typeof window !== 'undefined' ? { left: -((screenshots.length - 1) * window.innerWidth), right: 0 } : undefined}
                  onDragEnd={handleDragEnd}
                  animate={{ x }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  style={{ touchAction: 'pan-y pinch-zoom', width: typeof window !== 'undefined' ? `${screenshots.length * window.innerWidth}px` : undefined }}
                >
                  {screenshots.map((img, index) => (
                    <div
                      key={index}
                      className="w-screen flex-shrink-0 flex justify-center relative select-none"
                      style={{
                        opacity: currentIndex === index ? 1 : 0.3,
                        transition: 'all 0.3s ease',
                        transform: `scale(${currentIndex === index ? 1 : 0.95})`,
                      }}
                    >
                      <div className="relative w-full max-w-[320px] mx-auto">
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
          {/* 설명 및 주요 기능 */}
          <div className="mt-20 text-left max-w-3xl mx-auto">
            <div className="text-2xl sm:text-xl font-semibold mb-6 text-[#222]">주요 기능</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/80 p-6 rounded-xl shadow">
                <div className="text-xl sm:text-lg font-semibold mb-3 text-[#333]">소품 큐레이션</div>
                <p className="text-[#555] sm:text-sm">
                  소소한 행복을 더하는 아기자기한 소품을 한눈에!
                </p>
              </div>
              <div className="bg-white/80 p-6 rounded-xl shadow">
                <div className="text-xl sm:text-lg font-semibold mb-3 text-[#333]">간편한 온라인 주문</div>
                <p className="text-[#555] sm:text-sm">
                  모바일/PC에서 쉽고 빠르게 주문 가능
                </p>
              </div>
              <div className="bg-white/80 p-6 rounded-xl shadow">
                <div className="text-xl sm:text-lg font-semibold mb-3 text-[#333]">다양한 결제 수단</div>
                <p className="text-[#555] sm:text-sm">
                  카드, 간편결제 등 다양한 결제 지원
                </p>
              </div>
              <div className="bg-white/80 p-6 rounded-xl shadow">
                <div className="text-xl sm:text-lg font-semibold mb-3 text-[#333]">빠른 배송 서비스</div>
                <p className="text-[#555] sm:text-sm">
                  전국 어디서나 빠르고 안전한 배송
                </p>
              </div>
            </div>
            
            {/* 지원 섹션 */}
            <div className="mt-20 border-t border-[#e5e1d8] pt-10">
              <div className="text-2xl sm:text-xl font-semibold mb-6 text-[#222]">지원</div>
              <div className="bg-white/70 p-6 rounded-xl space-y-4 shadow">
                <div className="flex items-center">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-3 text-[#bfae99]"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <a
                      href="mailto:thinkingcatworks@gmail.com"
                      className="text-[#555] hover:text-[#bfae99] transition-colors"
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
                      className="w-5 h-5 mr-3 text-[#bfae99]"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                  <a
                      href="https://www.ohihoo.com/privacy"
                      target="_blank"
                      className="text-[#555] hover:text-[#bfae99] transition-colors"
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
