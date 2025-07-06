import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "projects", label: "PROJECTS", ko: "프로젝트" },
    { id: "about", label: "ABOUT", ko: "소개" },
    { id: "contact", label: "CONTACT", ko: "문의" },
  ];

  const scrollToSection = (sectionId: string) => {
    // 메뉴를 먼저 닫기
    setIsMenuOpen(false);

    // DOM 업데이트 완료 후 스크롤 실행
    requestAnimationFrame(() => {
      const element = document.getElementById(sectionId);

      if (element) {
        const isMobile = window.innerWidth < 768;
        const headerOffset = isMobile ? 70 : 80;
        const elementPosition = element.offsetTop - headerOffset;

        // 스크롤 실행
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:block">
        <motion.div
          className="surface-card border-b border-white/10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <motion.button
                type="button"
                onClick={scrollToTop}
                className="flex items-center space-x-4 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src="/thinkingcat.png"
                    alt="thinkingcat icon"
                    width={36}
                    height={36}
                    className="w-9 h-9 image-minimal"
                  />
                  <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
                <div className="text-lg font-heading text-white tracking-wide font-mono">
                  thinkingcat
                </div>
              </motion.button>

              {/* Navigation */}
              <motion.nav
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="relative px-6 py-3 text-sm font-medium font-heading text-white/80 hover:text-white transition-colors duration-200 group"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <motion.div
                      className="absolute inset-0 bg-white/8 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.05 }}
                    />
                    <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </motion.button>
                ))}
              </motion.nav>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <motion.div
          className="surface-card border-b border-white/10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <motion.button
                type="button"
                onClick={scrollToTop}
                className="flex items-center space-x-3 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src="/thinkingcat.png"
                    alt="thinkingcat icon"
                    width={28}
                    height={28}
                    className="w-7 h-7 image-minimal"
                  />
                </motion.div>
                <div className="text-md font-heading text-white font-mono">
                  thinkingcat
                </div>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                type="button"
                className="p-2 text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.div
                  className="w-6 h-6 flex flex-col justify-center items-center"
                  animate={isMenuOpen ? "open" : "closed"}
                >
                  <motion.span
                    className="block w-5 h-0.5 bg-current mb-1"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 6 },
                    }}
                  />
                  <motion.span
                    className="block w-5 h-0.5 bg-current mb-1"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                  />
                  <motion.span
                    className="block w-5 h-0.5 bg-current"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -6 },
                    }}
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: isMenuOpen ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 border-t border-white/10">
              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/8 rounded-lg transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: isMenuOpen ? 1 : 0,
                      x: isMenuOpen ? 0 : -20,
                    }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium font-heading">
                        {item.label}
                      </span>
                      <span className="text-xs text-white/60 font-body">
                        {item.ko}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>
        </motion.div>
      </header>
    </>
  );
};

export default Header;
