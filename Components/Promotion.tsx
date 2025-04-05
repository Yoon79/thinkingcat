import { motion } from "framer-motion";

const Promotion = () => {
  const features = [
    {
      title: "혁신적인 기술력",
      description:
        "최신 기술 스택과 효율적인 개발 프로세스로 고객의 니즈를 완벽하게 구현합니다.",
    },
    {
      title: "검증된 실력",
      description:
        "다양한 프로젝트 경험과 성공 사례로 입증된 개발 역량을 보유하고 있습니다.",
    },
    {
      title: "맞춤형 솔루션",
      description:
        "각 고객사의 특성과 요구사항을 분석하여 최적화된 솔루션을 제공합니다.",
    },
  ];

  const stats = [
    { number: "4.9/5", label: "유저 만족도" },
    { number: "90%", label: "재사용률" },
    { number: "24시", label: "기술 지원" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* 주요 특징 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why 띵킹캣?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            혁신적인 기술력과 풍부한 경험을 바탕으로 고객의 비즈니스 성공을 함께
            만들어갑니다
          </p>
        </motion.div>

        {/* 특징 카드 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 통계 섹션 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#1d0644] text-white rounded-2xl p-12 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="space-y-2"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 기술 스택 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            사용 기술 스택
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "AWS",
              "Flutter",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="px-4 py-2 bg-white rounded-full shadow-md text-gray-800 hover:shadow-lg transition-all"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Promotion;
