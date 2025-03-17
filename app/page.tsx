"use client";

import Head from "next/head";
import Header from '@/Components/Header';
import Projects from '@/Components/Projects';
import About from '@/Components/About';
import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';
import Promotion from '@/Components/Promotion';
import ScrollToTop from '@/Components/ScrollToTop';

const Home: React.FC = () => {
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
        <Header />
        <Promotion />
        <main className="relative bg-white">
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Home;
