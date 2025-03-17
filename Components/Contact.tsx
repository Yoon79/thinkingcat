import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0A0A1B]"
    >
      {/* 동적 배경 효과 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(75,192,200,0.2),transparent_40%)]" />
        <div className="absolute inset-0 bg-gradient-radial-dots" />
      </div>
      
      {/* 움직이는 라인 효과 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 cyber-grid" />
        <div className="absolute inset-0 cyber-grid rotate-90" />
      </div>
      
      <div className="container text-center mx-auto p-4 text-white relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-3xl neon-text-purple">문의</div>
          <p className="text-xl text-purple-400 mb-8">Contact</p>
          <div className="bg-black/30 backdrop-blur-md p-8 rounded-lg max-w-2xl mx-auto border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
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
                      stroke="currentColor">
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
              <a href="https://www.instagram.com/thinkingcatworks" target="_blank" rel="noopener noreferrer">
                <Image src="/instagram.png" alt="Instagram icon" width="24" height="24" />
                Instagram
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 