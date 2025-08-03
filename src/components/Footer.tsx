import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "프로젝트", href: "/#projects" },
    { name: "소개", href: "/#about" },
    { name: "문의", href: "/#contact" },
  ];

  const projects = [
    { name: "체크온", href: "https://checkonthemusic.com", external: true },
    { name: "투두게더", href: "/projects/godsaeng", external: false },
    { name: "피움뜰", href: "https://piumddeul.com", external: true },
    { name: "동물원관리시스템", href: "/projects/zootop", external: false },
    { name: "오히후", href: "https://ohihoo.com", external: true },
  ];

  const companyInfo = [
    { label: "대표", value: "왕세윤" },
    { label: "이메일", value: "thinkingcatworks@gmail.com" },
    { label: "사업자번호", value: "826-14-02542" },
    { label: "통신판매업번호", value: "2025-서울강남-01112" },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black to-gray-900 border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="cyber-grid opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <motion.h3
                  className="text-2xl font-heading text-white mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  THINKINGCAT
                </motion.h3>
                <motion.p
                  className="text-lg text-blue-400 font-medium font-mono mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  띵킹캣
                </motion.p>
                <motion.p
                  className="text-white/70 leading-relaxed max-w-md font-body"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  소프트웨어를 통해 더 편리한 일상과 새로운 가치를 제공합니다.
                  혁신적인 기술로 고객의 꿈을 현실로 만들어갑니다.
                </motion.p>
              </div>

              {/* Company Details */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {companyInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex flex-col sm:flex-row text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-white/60 font-medium font-body min-w-[100px] mb-1 sm:mb-0">
                      {info.label}
                    </span>
                    <span className="text-white/80 font-mono">
                      {info.value}
                    </span>
                  </motion.div>
                ))}

                {/* Address */}
                <motion.div
                  className="flex flex-col sm:flex-row text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <span className="text-white/60 font-medium font-body min-w-[100px] mb-1 sm:mb-0">
                    주소
                  </span>
                  <span className="text-white/80 font-body">
                    서울특별시 강남구 개포로15길 3-4, 지101호 A240호(개포동)
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h4
                className="text-lg font-semibold font-heading text-white mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                빠른 링크
              </motion.h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-blue-400 transition-colors duration-200 inline-block hover:translate-x-1 transform font-body"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.h4
                className="text-lg font-semibold font-heading text-white mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                프로젝트
              </motion.h4>
              <ul className="space-y-4">
                {projects.map((project, index) => (
                  <motion.li
                    key={project.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {project.external ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-blue-400 transition-colors duration-200 inline-block hover:translate-x-1 transform text-sm font-body"
                      >
                        {project.name}
                      </a>
                    ) : (
                      <Link
                        href={project.href}
                        className="text-white/70 hover:text-blue-400 transition-colors duration-200 inline-block hover:translate-x-1 transform text-sm font-body"
                      >
                        {project.name}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 py-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              className="text-white/60 text-sm text-center md:text-left font-body"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              © {currentYear} thinkingcat. All rights reserved.
            </motion.div>

            {/* Made with love */}
            <motion.div
              className="flex items-center text-white/60 text-sm font-body"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <span>Made with</span>
              <motion.span
                className="mx-2 text-red-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ❤️
              </motion.span>
              <span>by ThinkingCat</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.div
          className="absolute bottom-8 right-8"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-300 backdrop-blur-sm border border-blue-500/30"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            ↑
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
