import { motion } from "framer-motion";
import Image from "next/image";

const Main = () => {
  return (
    <header className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-full overflow-hidden">
        <motion.div 
          className="flex-col items-center mb-20 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex justify-center mb-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Image
              src="/thinkingcat.png"
              alt="thinkingcat icon"
              width={100}
              height={100}
              className="w-20 h-20 md:hidden"
            />
          </motion.div>

          <motion.h1 
            className="text-4xl font-bold text-gray-100 mb-4 relative text-center leading-relaxed"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative inline-block"
            >
              <div className="text-3xl font-bold relative group perspective-text">
                <span className="block cyber-glitch-1">띵킹캣</span>
                <span className="block cyber-glitch-2" aria-hidden="true">띵킹캣</span>
                <span className="block cyber-glitch-3" aria-hidden="true">띵킹캣</span>
              </div>
              <div className="text-center text-base">thinkingcat</div>
              <motion.span
                className="absolute inset-0 bg-blue-100/30 blur-xl"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.span>
          </motion.h1>

          {/* <motion.p 
            className="text-xl text-gray-600 mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            thinkingcat
          </motion.p> */}

          <motion.p 
            className="text-lg sm:text-base text-gray-100 max-w-xl mx-auto text-center leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            소프트웨어를 통해 더 편리한 일상과 새로운 가치를 제공합니다
          </motion.p>
        </motion.div>

        <motion.nav 
          className="md:hidden top-0 left-0 w-full flex justify-around md:justify-center md:gap-32 z-20 py-4 overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {[{ id: 'projects', ko: '프로젝트' }, { id: 'about', ko: '소개' }, { id: 'contact', ko: '문의' }].map((item) => (
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
              <span className="relative font-bold md:text-xl text-gray-50 group-hover:text-gray-100">
                {item.ko}
              </span>
            </motion.a>
          ))}
        </motion.nav>
      </div>
    </header>
  );
};

export default Main; 