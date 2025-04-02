import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm hidden md:block">
        <div className="flex items-center h-16 justify-between px-10">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mr-2">
            <Image
                src="/thinkingcat.png"
                alt="thinkingcat icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <div className="text-lg font-bold">THINKINGCAT</div>
            {/* <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image
                src="/thinkingcat.png"
                alt="thinkingcat icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </motion.div>
            <motion.div 
              className="ml-2 text-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-lg font-bold">띵킹캣</div>
              <div className="text-xs">thinkingcat</div>
            </motion.div> */}
          </motion.div>

          {/* Navigation */}
          <motion.nav 
            className="flex items-center space-x-8 font-bold"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[{ id: 'projects', ko: 'PROJECTS' }, { id: 'about', ko: 'ABOUT' }, { id: 'contact', ko: 'CONTACT' }].map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className="group relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId={`nav-bg-${item.id}`}
                />
                <span className="relative font-medium text-gray-50 group-hover:text-gray-100">
                  {item.ko}
                </span>
              </motion.a>
            ))}
          </motion.nav>
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="hidden sm:block" />
    </>
  );
};

export default Header; 