"use client";

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
// import Header from "@/components/Header";

const Home: React.FC = () => {
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
              <div className="text-4xl">띵킹캣</div>
            </div>

            <nav className="flex w-full justify-around">
              <div className="scroll-smooth">
                <a href="#projects" className="text-2xl">
                  프로젝트
                </a>
              </div>
              <div className="scroll-smooth">
                <a href="#about" className="text-2xl">
                  소개
                </a>
              </div>
              <div className="scroll-smooth">
                <a href="#contact" className="text-2xl">
                  문의
                </a>
              </div>
            </nav>
          </div>
        </header>

        <main className="relative">
          <section
            id="projects"
            className="min-h-screen flex items-center justify-center z-10">
            <div className="container mx-auto p-4 text-white">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center text-5xl mb-20">
                프로젝트
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.08 }}
                  className="bg-black bg-opacity-50 p-6 rounded-lg transform transition-transform">
                  <h3 className="text-center text-2xl mb-4">
                    소셜 네트워크 플랫폼
                  </h3>
                  <div className="flex justify-center">
                    <Image
                      src="/godsaeng.png"
                      alt="godsaeng"
                      width={100}
                      height={100}
                      className="w-60 h-60 object-contain"
                    />
                  </div>
                  <div className="mt-4 text-center">프로젝트 설명</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.08 }}
                  className="bg-black bg-opacity-50 p-6 rounded-lg">
                  <h3 className="text-center text-2xl mb-4">
                    식물 커뮤니티 및 쇼핑몰
                  </h3>
                  <div className="flex justify-center">
                    <Image
                      src="/pium.png"
                      alt="pium"
                      width={100}
                      height={100}
                      className="w-60 h-60 object-contain"
                    />
                  </div>
                  <div className="mt-4 text-center">프로젝트 설명</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.08 }}
                  className="bg-black bg-opacity-50 p-6 rounded-lg">
                  <h3 className="text-center text-2xl mb-4">
                    동물원 관리 시스템
                  </h3>
                  <div className="flex justify-center">
                    <Image
                      src="/zootop.png"
                      alt="zootop"
                      width={100}
                      height={100}
                      className="w-60 h-60 object-contain"
                    />
                  </div>
                  <div className="mt-4 text-center">프로젝트 설명</div>
                </motion.div>
              </div>
            </div>
          </section>

          <section
            id="about"
            className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto p-4 text-white">
              <h2 className="text-center text-5xl mb-20">소개</h2>
              <p className="text-center text-xl font-semibold">
                소프트웨어를 통해 더 편리한 일상과 새로운 가치를 제공
              </p>
            </div>
          </section>

          <section
            id="contact"
            className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto p-4 text-white">
              <h2 className="text-center text-5xl mb-8">문의</h2>
              <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-2xl mx-auto">
                {/*<p className="text-center text-xl mb-4">*/}
                {/*  궁금한 점이 있으시거나 협력 문의는 아래 메일로 연락 주세요.*/}
                {/*</p>*/}
                <div className="flex items-center justify-center gap-4">
                  <a
                    href="mailto:your.email@example.com"
                    className="text-2xl hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
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
                    kokoseoul22@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="relative bg-black bg-opacity-50 text-white p-4">
          <div className="container mx-auto text-center">
            &copy; 2025 thinking CAT. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
