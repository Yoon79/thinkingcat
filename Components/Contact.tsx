import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-xl font-bold text-gray-50 mb-2">문의</h2>
          <p className="text-gray-100">Contact</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
           <p className="text-lg sm:text-base text-gray-100 leading-relaxed mb-8">
            솔루션을 문의하고 띵킹캣의 파트너로 함께하세요
          </p>
          <div className=" bg-purple-50 py-4 rounded-lg border border-gray-100">
            <div className="flex flex-col items-center gap-6">
              <a
                href="mailto:thinkingcatworks@gmail.com"
                className="flex items-center gap-3 text-gray-900 hover:text-gray-600 rainbow-hover transition-colors"
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 