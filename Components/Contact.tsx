import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">문의</h2>
          <p className="text-gray-600">Contact</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <div className="flex flex-col items-center gap-6">
              <a
                href="mailto:thinkingcatworks@gmail.com"
                className="flex items-center gap-3 text-gray-900 hover:text-gray-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-lg">thinkingcatworks@gmail.com</span>
              </a>

              <a
                href="https://www.instagram.com/thinkingcatworks"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-900 hover:text-gray-600 transition-colors"
              >
                <Image 
                  src="/instagram.png" 
                  alt="Instagram icon" 
                  width={24} 
                  height={24} 
                  className="w-6 h-6"
                />
                <span className="text-lg">Instagram</span>
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600">
                언제든 편하게 연락주세요.
                <br />
                최선을 다해 답변 드리겠습니다.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 