import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black">
      {/* 배경 애니메이션 효과 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-50 to-blue-50 rounded-full blur-3xl"
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-50 mb-2">프로젝트</h2>
          <p className="text-gray-100">Projects</p>
        </div>

        <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/projects/godsaeng" className="block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-[#1d0644] bg-opacity-70 p-6 rounded-lg">
              <div className="text-center text-xl mb-4">
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
              <div className="mt-4 text-center">
                <p>혁신적인 기획으로</p>
                <p>새로운 형태의 소셜 네트워크 개발</p>
              </div>
              <div className='mt-4 flex items-center justify-center gap-2'>
                <div className='items-center rounded-full flex justify-center text-center h-6 w-20 px-1 neon-text border border-0.5'>띵킹캣</div>
                </div>
            </motion.div>
          </Link>

          <Link href="/projects/pium" className="block">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.08 }}
              className="bg-[#1d0644] bg-opacity-70 p-6 rounded-lg">
              <div className="text-center text-xl mb-4">
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
              <div className="mt-4 text-center">
                <p>최신 기술이 적용된 대규모</p>
                <p>식물 쇼핑몰 및 커뮤니티 개발</p>
              </div>
              <div className='mt-4 flex items-center justify-center gap-2'>
                <div className='items-center rounded-full flex justify-center text-center h-6 w-20 px-1 neon-text border border-0.5'>피움뜰</div> 
                 <div >X</div>
                <div className='items-center rounded-full flex justify-center text-center h-6 w-20 px-1 neon-text border border-0.5'>띵킹캣</div>
                </div>
            </motion.div>
          </Link>

          <Link href="/projects/zootop" className="block">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.08 }}
              className="bg-[#1d0644] bg-opacity-70 p-6 rounded-lg">
              <div className="text-center text-xl mb-4">
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
              <div className="mt-4 text-center">
                <p>스마트한 전산화로</p>
                <p>편리, 효율, 정확성까지 실현</p>
              </div>
              <div className='mt-4 flex items-center justify-center gap-2'>
                <div className='items-center rounded-full flex justify-center text-center h-6 w-20 px-1 neon-text border border-0.5 text-[12px]'>쌍둥이동물원</div> 
                <div>X</div>
                <div className='items-center rounded-full flex justify-center text-center h-6 w-20 px-1 neon-text border border-0.5'>띵킹캣</div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects; 