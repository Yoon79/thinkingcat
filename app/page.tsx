"use client";

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/Components/Footer';
import Projects from '@/Components/Projects';
import About from '@/Components/About';
import Contact from '@/Components/Contact';


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
    <div className="min-h-screen bg-white hover:cursor-default">
      <Head>
        <title>띵킹캣</title>
        <meta name="description" content="띵킹캣은 혁신적인 앱 개발과 프로그램 개발을 전문으로 하는 기업입니다. 소프트웨어를 통해 더 편리한 일상과 새로운 가치를 제공합니다." />
        <meta name="keywords" content="띵킹캣, thinking cat, thinkingcat, 앱개발, 프로그램개발, 소프트웨어개발, 모바일앱, 웹개발, 앱" />
        
        {/* Open Graph 태그 추가 (소셜 미디어 공유용) */}
        <meta property="og:title" content="띵킹캣 - 앱개발 및 프로그램 개발 전문 기업" />
        <meta property="og:description" content="띵킹캣은 혁신적인 앱 개발과 프로그램 개발을 전문으로 하는 기업입니다." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://imagedelivery.net/XFfVvOueFmZxIJrF5kfmFw/c625c966-1258-4c38-8460-31ffd9946900/public" />
        <meta property="og:url" content="https://www.thinkingcatworks.com/" />
        
        {/* 기타 메타 태그 */}
        <meta name="robots" content="index,follow" />
        <meta name="author" content="thinkingcat" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <div className="relative">
        <header className="relative h-screen bg-white">
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <div className="flex-col items-center mb-20">
              <div className="flex justify-center mb-6">
                <Image
                  src="/thinkingcat.png"
                  alt="thinkingcat icon"
                  width={100}
                  height={100}
                  className="w-20 h-20"
                />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                띵킹캣
              </h1>
              <p className="text-xl text-gray-600 mb-8">thinkingcat</p>
              <p className="text-lg text-gray-700 max-w-xl mx-auto text-center leading-relaxed">
                소프트웨어를 통해 더 편리한 일상과 새로운 가치를 제공합니다
              </p>
            </div>

            <nav className="flex gap-12">
              <a href="#projects" className="text-gray-900 hover:text-gray-600 transition-colors">
                <span className="text-lg">프로젝트</span>
                <p className="text-sm text-gray-500">Projects</p>
              </a>
              <a href="#about" className="text-gray-900 hover:text-gray-600 transition-colors">
                <span className="text-lg">소개</span>
                <p className="text-sm text-gray-500">About</p>
              </a>
              <a href="#contact" className="text-gray-900 hover:text-gray-600 transition-colors">
                <span className="text-lg">문의</span>
                <p className="text-sm text-gray-500">Contact</p>
              </a>
            </nav>
          </div>
        </header>

        <main className="relative bg-white">
          <Projects />
          <About />
          <Contact />
        </main>

        <Footer />
        
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-12 right-4 bg-gray-900 text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 z-50"
            aria-label="Scroll to top"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="h-6 w-6"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="m4.5 15.75 7.5-7.5 7.5 7.5" 
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
