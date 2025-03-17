import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center z-10 relative overflow-hidden bg-[#0A0A1B]"
    >
      {/* 사이버펑크 스타일 배경 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-circuit-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A1B]/50 to-[#0A0A1B]" />
      </div>
      
      {/* 글로우 라인 */}
      <div className="absolute inset-0 cyber-lines" />
      
      {/* 글로우 효과, 메인 */}
      <div className="container mx-auto p-4 text-white relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl mb-20 neon-text"
        >
          프로젝트
          <p className="text-xl mt-2 text-cyan-400">Projects</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Link href="/projects/godsaeng" className="block">
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
                        alt="갓생러들"
                        width={100}
                        height={100}
                        className="w-60 h-60 object-contain"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <p>혁신적인 기획으로</p>
                      <p>새로운 형태의 소셜 네트워크 개발</p>
                    </div>
                    <div className='mt-4 items-center rounded-full flex justify-center text-center h-6 w-20 mx-auto px-1 neon-text border border-0.5'>띵킹캣</div>
                  </motion.div>
                </Link>

                <Link href="/projects/pium" className="block">
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
                    className="bg-black bg-opacity-50 p-6 rounded-lg">
                    <div className="text-center text-2xl mb-4">
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