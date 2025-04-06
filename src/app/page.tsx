"use client";

import Head from "next/head";
import Header from "@/components/common/Header";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/common/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Home: React.FC = () => {
  return (
    <div className="bg-black/95 hover:cursor-default ">
      <Head>
        <title>띵킹캣</title>
        <meta
          name="description"
          content="띵킹캣은 혁신적인 앱 개발과 프로그램 개발을 전문으로 하는 기업입니다. 소프트웨어를 통해 더 편리한 일상과 새로운 가치를 제공합니다."
        />
        <meta
          name="keywords"
          content="띵킹캣, thinking cat, thinkingcat, 앱개발, 프로그램개발, 소프트웨어개발, 모바일앱, 웹개발, 앱"
        />

        {/* Open Graph 태그 추가 (소셜 미디어 공유용) */}
        <meta
          property="og:title"
          content="띵킹캣 - 앱개발 및 프로그램 개발 전문 기업"
        />
        <meta
          property="og:description"
          content="띵킹캣은 혁신적인 앱 개발과 프로그램 개발을 전문으로 하는 기업입니다."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://imagedelivery.net/XFfVvOueFmZxIJrF5kfmFw/c625c966-1258-4c38-8460-31ffd9946900/public"
        />
        <meta property="og:url" content="https://www.thinkingcatworks.com/" />

        {/* 기타 메타 태그 */}
        <meta name="robots" content="index,follow" />
        <meta name="author" content="thinkingcat" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <div className="flex-grow">
        <Header />
        <main className="flex-grow">
          <Main />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Home;
