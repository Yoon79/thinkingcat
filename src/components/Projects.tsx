import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-lg font-bold text-gray-50 mb-2">
            프로젝트
          </h2>
          <p className="text-sm text-gray-100">Projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/project/godsaeng" className="block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-[#2c2635] bg-opacity-90 p-6 rounded-lg"
            >
              <div className="text-center text-base mb-4 text-gray-50">
                소셜 네트워크 플랫폼
              </div>
              <div className="flex justify-center">
                <Image
                  src="/godsaeng.png"
                  alt="투두게더"
                  width={100}
                  height={100}
                  className="w-60 h-60 object-contain"
                />
              </div>
              <div className="mt-4 text-center text-sm text-gray-200">
                <p>혁신적인 기획으로</p>
                <p>새로운 형태의 소셜 네트워크 개발</p>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="items-center rounded-full flex justify-center text-center h-5 w-16 px-1 text-xs text-gray-50 border border-gray-700">
                  띵킹캣
                </div>
              </div>
            </motion.div>
          </Link>

          <Link href="/project/pium" className="block">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.08 }}
              className="bg-[#2c2635] bg-opacity-90 p-6 rounded-lg"
            >
              <div className="text-center text-base mb-4 text-gray-50">
                식물 쇼핑몰 및 커뮤니티
              </div>
              <div className="flex justify-center">
                <Image
                  src="/pium.png"
                  alt="피움뜰"
                  width={100}
                  height={100}
                  className="w-60 h-60 object-contain"
                />
              </div>
              <div className="mt-4 text-sm text-center text-gray-200">
                <p>최신 기술이 적용된 대규모</p>
                <p>식물 쇼핑몰 및 커뮤니티 개발</p>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="items-center rounded-full flex justify-center text-center h-5 w-16 px-1 text-xs text-gray-50 border border-gray-700">
                  피움뜰
                </div>
                <div className="text-gray-200 text-xs">X</div>
                <div className="items-center rounded-full flex justify-center text-center h-5 w-16 px-1 text-xs text-gray-50 border border-gray-700">
                  띵킹캣
                </div>
              </div>
            </motion.div>
          </Link>

          <Link href="/project/zootop" className="block">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.08 }}
              className="bg-[#2c2635] bg-opacity-90 p-6 rounded-lg"
            >
              <div className="text-center text-base mb-4 text-gray-50">
                동물원 관리 시스템
              </div>
              <div className="flex justify-center">
                <Image
                  src="/zootop.png"
                  alt="동물원 관리 시스템"
                  width={100}
                  height={100}
                  className="w-60 h-60 object-contain"
                />
              </div>
              <div className="mt-4 text-sm text-center text-gray-200">
                <p>스마트한 전산화로</p>
                <p>편리, 효율, 정확성까지 실현</p>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="items-center rounded-full flex justify-center text-center h-5 w-18 px-1 text-xs text-gray-50 border border-gray-700">
                  쌍둥이동물원
                </div>
                <div className="text-gray-200 text-xs">X</div>
                <div className="items-center rounded-full flex justify-center text-center h-5 w-16 px-1 text-xs text-gray-50 border border-gray-700">
                  띵킹캣
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
