import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-xl font-bold text-gray-50 mb-2">
            문의
          </h2>
          <p className="text-gray-100">Contact</p>
        </div>

        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-100 mb-8">
            프로젝트 문의나 협업 제안이 있으시다면 언제든지 연락주세요.
          </p>
          <a
            href="mailto:contact@thinkingcatworks.com"
            className="inline-flex items-center text-gray-50 hover:text-gray-100 transition-colors duration-200"
          >
            <span className="mr-2">thinkingcatworks@gmail.com</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
