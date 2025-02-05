"use client";

import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Home: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // 프로젝트 데이터
  const projects = [
    {
      id: 1,
      title: "소셜 네트워크 플랫폼",
      titleEn: "Social Network Platform",
      description: ["혁신적인 기획으로", "새로운 형태의 소셜 네트워크 개발"],
      mainImage: "/godsaeng.png",
      images: ["/godsaeng.png", "/godsaeng-2.png", "/godsaeng-3.png"],
      demoUrl: "https://example.com/godsaeng",
    },
    {
      id: 2,
      title: "식물 쇼핑몰 및 커뮤니티",
      titleEn: "Plant Shopping Mall & Community",
      description: [
        "최신 기술이 적용된 대규모",
        "식물 쇼핑몰 및 커뮤니티 개발",
      ],
      mainImage: "/pium.png",
      images: ["/pium.png", "/pium-2.png", "/pium-3.png"],
      demoUrl: "https://example.com/pium",
    },
    {
      id: 3,
      title: "동물원 관리 시스템",
      titleEn: "Zoo Management System",
      description: ["스마트한 전산화로", "편리, 효율, 정확성까지 실현"],
      mainImage: "/zootop.png",
      images: ["/zootop.png", "/zootop-2.png", "/zootop-3.png"],
      demoUrl: "https://example.com/zootop",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>띵킹캣</title>
        <meta name="띵킹캣" content="앱 ・ 프로그램 개발" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative">
        <div className="fixed top-0 left-0 w-full h-screen z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
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
              <div className="text-center text-base">Thinking CAT</div>
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
          <section
            id="projects"
            className="min-h-screen flex items-center justify-center z-10"
          >
            <div className="container mx-auto p-4 text-white">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center text-5xl mb-20"
              >
                프로젝트
                <p className="text-xl">Projects</p>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                    whileHover={{ scale: 1.08 }}
                    onClick={() => setSelectedProject(index)}
                    className="bg-black bg-opacity-50 p-6 rounded-lg transform transition-transform cursor-pointer"
                  >
                    <h3 className="text-center text-2xl mb-4">
                      {project.title}
                    </h3>
                    <div className="flex justify-center">
                      <Image
                        src={project.mainImage}
                        alt={project.title}
                        width={100}
                        height={100}
                        className="w-60 h-60 object-contain"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      {project.description.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="about"
            className="min-h-screen flex items-center justify-center"
          >
            <div className="container text-center mx-auto p-4 text-white">
              <h2 className="text-5xl">소개</h2>
              <p className="text-xl  mb-20">About Us</p>
              <p className="text-center text-xl font-semibold">
                소프트웨어를 통해 더 편리한 일상과 새로운 가치를 제공합니다
              </p>
            </div>
          </section>

          <section
            id="contact"
            className="min-h-screen flex items-center justify-center"
          >
            <div className="container text-center mx-auto p-4 text-white">
              <h2 className="text-5xl">문의</h2>
              <p className="text-xl mb-8">Contact</p>
              <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-4">
                  <a
                    href="mailto:thinkingcatworks@gmail.com"
                    className="text-xl rainbow-hover transition-colors duration-300 flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
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
                  <a
                    href="https://www.instagram.com/thinkingcatworks"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/instagram.png"
                      alt="Instagram"
                      width="24"
                      height="24"
                    />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="relative bg-black bg-opacity-50 text-white p-2">
          <div className="container mx-auto text-center">
            &copy; 2025 thinkingCAT. All rights reserved.
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
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
        )}

        {/* 프로젝트 상세 모달 추가 */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-2xl max-w-3xl w-full min-h-[600px] shadow-2xl border border-gray-700"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-full flex flex-col">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute -right-2 -top-2 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-all duration-200"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <h2 className="text-2xl font-bold text-white mb-1">
                    {projects[selectedProject].title}
                  </h2>
                  <p className="text-gray-400 mb-8">
                    {projects[selectedProject].titleEn}
                  </p>

                  {/* 이미지 캐러셀 */}
                  <div className="relative mb-8">
                    <div className="flex space-x-4 overflow-x-auto pb-2 snap-x scrollbar-hide">
                      {projects[selectedProject].images.map((image, index) => (
                        <div
                          key={index}
                          className="flex-none snap-center first:pl-0 last:pr-0"
                        >
                          <Image
                            src={image}
                            alt={`${projects[selectedProject].title} ${
                              index + 1
                            }`}
                            width={300}
                            height={380}
                            className="rounded-xl object-cover shadow-lg hover:shadow-2xl transition-shadow duration-300 h-[320px]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 버튼 그룹 - 하단에 고정 */}
                  <div className="flex flex-wrap gap-3 justify-center mt-auto">
                    {/* 데모 버튼 */}
                    <a
                      href={projects[selectedProject].demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                      라이브 데모
                    </a>

                    {/* 앱스토어 버튼 */}
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-gray-800/25"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      App Store
                    </a>

                    {/* 구글플레이 버튼 */}
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-green-500/25"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      Google Play
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;
