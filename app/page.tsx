"use client";

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';


const Home: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>띵킹캣</title>
        {/* <title>띵킹캣 - 앱개발 및 프로그램 개발 전문 기업</title> */}
        <meta name="description" content="띵킹캣은 혁신적인 앱 개발과 프로그램 개발을 전문으로 하는 기업입니다. 소프트웨어를 통해 더 편리한 일상과 새로운 가치를 제공합니다." />
        <meta name="keywords" content="띵킹캣, thinking cat, thinkingcat, 앱개발, 프로그램개발, 소프트웨어개발, 모바일앱, 웹개발" />
        
        {/* Open Graph 태그 추가 (소셜 미디어 공유용) */}
        <meta property="og:title" content="띵킹캣 - 앱개발 및 프로그램 개발 전문 기업" />
        <meta property="og:description" content="띵킹캣은 혁신적인 앱 개발과 프로그램 개발을 전문으로 하는 기업입니다." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://imagedelivery.net/XFfVvOueFmZxIJrF5kfmFw/c625c966-1258-4c38-8460-31ffd9946900/public" />
        <meta property="og:url" content="https://www.thinkingcatworks.com/" />
        
        {/* 기타 메타 태그 */}
        <meta name="robots" content="index,follow" />
        <meta name="author" content="ThinkingCAT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative">
        <div className="fixed top-0 left-0 w-full h-screen z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover">
            <source src="/background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <header className="relative h-screen">
          {/* <div className="relative z-10 flex flex-col items-center justify-start h-full text-white pt-20"> */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
            <div className="flex-col items-center mb-40">
              <div className="flex justify-center mb-2">
                <Image
                  src="/thinkingcat.png"
                  alt="cat icon"
                  width={100}
                  height={100}
                  className="text-center w-10 h-10"
                />
              </div>
              <div className="text-center text-4xl">띵킹캣</div>
              <div className="text-center text-base">thinkingcat</div>
            </div>

            <nav className="flex w-full justify-around">
              <div className="text-center">
                <a href="#projects" className="text-2xl">
                  프로젝트
                <p className="text-base">Projects</p>
                </a>
              </div>
              <div className="text-center ">
                <a href="#about" className="text-2xl">
                  소개
                  <p className="text-base">About</p>
                </a>
              </div>
              <div className="text-center">
                <a href="#contact" className="text-2xl">
                  문의
                  <p className="text-base">Contact</p>
                </a>
              </div>
            </nav>
          </div>
        </header>

        <main className="relative">
        <h1 className="sr-only">띵킹캣 - 앱 ・ 프로그램 개발 전문 기업</h1>
          <section
            id="projects"
            className="min-h-screen flex items-center justify-center z-10">
            <div className="container mx-auto p-4 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center text-5xl mb-20">
                프로젝트
                <p className="text-xl">Projects</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.08 }}
                  className="bg-black bg-opacity-50 p-6 rounded-lg transform transition-transform">
                  <div className="text-center text-2xl mb-4">
                    소셜 네트워크 플랫폼
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/godsaeng.png"
                      alt="godsaeng"
                      width={100}
                      height={100}
                      className="w-60 h-60 object-contain"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p>혁신적인 기획으로</p>
                    <p>새로운 형태의 소셜 네트워크 개발</p>
                     </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.08 }}
                  className="bg-black bg-opacity-50 p-6 rounded-lg">
                  <div className="text-center text-2xl mb-4">
                    식물 쇼핑몰 및 커뮤니티
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/pium.png"
                      alt="pium"
                      width={100}
                      height={100}
                      className="w-60 h-60 object-contain"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p>최신 기술이 적용된 대규모</p>
                    <p>식물 쇼핑몰 및 커뮤니티 개발</p>
                     </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.08 }}
                  className="bg-black bg-opacity-50 p-6 rounded-lg">
                  <div className="text-center text-2xl mb-4">
                    동물원 관리 시스템
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/zootop.png"
                      alt="zootop"
                      width={100}
                      height={100}
                      className="w-60 h-60 object-contain"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p>스마트한 전산화로</p>
                    <p> 편리, 효율, 정확성까지 실현</p>
                     </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section
            id="about"
            className="min-h-screen flex items-center justify-center">
            <div className="container text-center mx-auto p-4 text-white">
              <div className="text-5xl">소개</div>
              <p className="text-xl  mb-20">About Us</p>
              <p className="text-center text-xl font-semibold">
                소프트웨어를 통해 더 편리한 일상과 새로운 가치를 제공합니다
              </p>
            </div>
          </section>

          <section
            id="contact"
            className="min-h-screen flex items-center justify-center">
            <div className="container text-center mx-auto p-4 text-white">
              <div className="text-5xl">문의</div>
              <p className="text-xl mb-8">Contact</p>
              <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-4">
                  <a
                    href="mailto:thinkingcatworks@gmail.com"
                    className="text-xl rainbow-hover transition-colors duration-300 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    thinkingcatworks@gmail.com
                  </a>
                </div>
                <div className="instagram-link text-xl rainbow-hover transition-colors duration-300">
                  <a href="https://www.instagram.com/thinkingcatworks" target="_blank" rel="noopener noreferrer">
                    <img src="/instagram.png" alt="Instagram" width="24" height="24" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="relative bg-black bg-opacity-50 text-white p-2">
          <div className="container mx-auto text-center">
            &copy; 2025 thinkingcat. All rights reserved.
          </div>
        </footer>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-12 right-4 bg-black bg-opacity-50 text-white p-4 rounded-full shadow-lg hover:bg-opacity-70 transition-all duration-300 z-50"
            aria-label="Scroll to top"
          >
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="h-6 w-6">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2}
                d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
