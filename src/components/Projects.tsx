import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: "ohihoo",
      title: "소품샵 온라인 스토어",
      description: "일상의 소소한 행복을 더하는 트렌디한 온라인 소품샵 구축",
      image: "/ohihoo1.png",
      tags: ["E-commerce", "React", "Node.js"],
      partners: ["오히후", "띵킹캣"],
      category: "웹 개발",
      year: "2024",
    },
    {
      id: "checkon",
      title: "출결 관리 시스템",
      description: "스마트한 출결 관리로 효율적인 업무 환경 구축",
      image: "/checkon-main.png",
      tags: ["Management", "Vue.js", "Spring"],
      partners: ["mcmi", "띵킹캣"],
      category: "시스템 개발",
      year: "2024",
    },
    {
      id: "godsaeng",
      title: "소셜 네트워크 플랫폼",
      description: "혁신적인 기획으로 새로운 형태의 소셜 네트워크 개발",
      image: "/godsaeng.png",
      tags: ["Social", "Next.js", "GraphQL"],
      partners: ["띵킹캣"],
      category: "플랫폼 개발",
      year: "2024",
    },
    {
      id: "pium",
      title: "식물 쇼핑몰 및 커뮤니티",
      description: "최신 기술이 적용된 대규모 식물 쇼핑몰 및 커뮤니티 개발",
      image: "/pium.png",
      tags: ["E-commerce", "Community", "React"],
      partners: ["피움뜰", "띵킹캣"],
      category: "플랫폼 개발",
      year: "2023",
    },
    {
      id: "zootop",
      title: "동물원 관리 시스템",
      description: "스마트한 전산화로 편리, 효율, 정확성까지 실현",
      image: "/zootop.png",
      tags: ["Management", "Java", "MySQL"],
      partners: ["쌍둥이동물원", "띵킹캣"],
      category: "시스템 개발",
      year: "2023",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="gradient-mesh opacity-50" />
        <div className="cyber-grid opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              프로젝트
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-white/60 max-w-2xl mx-auto font-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            혁신적인 기술과 창의적인 아이디어로 구현한 다양한 프로젝트들을
            만나보세요
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <Link href={`/projects/${project.id}`} className="block group">
                <motion.div
                  className="relative glass-card rounded-lg overflow-hidden hover-lift h-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500 image-sharp"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <motion.div
                      className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-sm text-xs font-medium font-mono text-white border border-white/20"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      {project.category}
                    </motion.div>

                    {/* Year Badge */}
                    <motion.div
                      className="absolute top-4 right-4 px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-sm text-xs font-medium font-mono text-blue-300 border border-blue-500/30"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {project.year}
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <motion.h3
                      className="text-xl font-heading text-white mb-3 group-hover:text-blue-400 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      className="text-white/70 text-sm mb-6 leading-relaxed font-body"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Tags */}
                    <motion.div
                      className="flex flex-wrap gap-2 mb-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-sm font-medium font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    {/* Partners */}
                    <motion.div
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <div className="flex items-center gap-2">
                        {project.partners.map((partner, partnerIndex) => (
                          <div key={partnerIndex} className="flex items-center">
                            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-sm font-medium font-mono border border-purple-500/30">
                              {partner}
                            </span>
                            {partnerIndex < project.partners.length - 1 && (
                              <span className="mx-2 text-white/30 text-xs">
                                ×
                              </span>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Hover Arrow */}
                      <motion.div
                        className="text-white/60 group-hover:text-white transition-colors"
                        animate={hoveredProject === index ? { x: 4 } : { x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17L17 7M17 7H7M17 7V17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/20 text-white hover:border-blue-500 hover:text-blue-400 rounded-lg font-medium font-heading transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>더 많은 프로젝트 보기</span>
            <motion.div className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
