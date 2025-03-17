import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">소개</h2>
          <p className="text-gray-600">About</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            소프트웨어를 통해 더 편리한 일상과 새로운 가치를 제공합니다
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">혁신</h3>
              <p className="text-gray-600">새로운 기술과 아이디어로 혁신적인 솔루션을 제공합니다</p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">전문성</h3>
              <p className="text-gray-600">전문적인 기술력으로 최고의 결과물을 만듭니다</p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">신뢰</h3>
              <p className="text-gray-600">신뢰할 수 있는 파트너로서 함께 성장합니다</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 