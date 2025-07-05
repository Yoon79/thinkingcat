import { motion } from "framer-motion";
import { useState } from "react";

const About = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const values = [
    {
      title: "혁신",
      description:
        "최신 기술과 창의적인 아이디어로 혁신적인 솔루션을 제공합니다",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500",
      stats: "50+ 프로젝트",
    },
    {
      title: "전문성",
      description: "풍부한 경험과 전문적인 기술력으로 최고의 결과물을 만듭니다",
      icon: "⚡",
      color: "from-purple-500 to-pink-500",
      stats: "5년+ 경험",
    },
    {
      title: "신뢰",
      description:
        "고객과의 약속을 지키며 신뢰할 수 있는 파트너로 함께 성장합니다",
      icon: "🎯",
      color: "from-emerald-500 to-teal-500",
      stats: "99% 만족도",
    },
  ];

  const achievements = [
    { number: "50+", label: "성공한 프로젝트" },
    { number: "100+", label: "만족한 고객" },
    { number: "5년+", label: "개발 경험" },
    { number: "24/7", label: "기술 지원" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="matrix-bg opacity-30" />
        <div className="floating-particles" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              소개
            </span>
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8 font-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            소프트웨어를 통해 더 편리한 일상과 새로운 가치를 제공합니다
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-sm"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Core Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div
                className="relative glass-card rounded-lg p-10 text-center hover-lift overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`}
                />

                {/* Icon */}
                <motion.div
                  className="text-6xl mb-6 inline-block"
                  animate={
                    hoveredCard === index
                      ? { scale: 1.1, rotateY: 180 }
                      : { scale: 1, rotateY: 0 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  {value.icon}
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-2xl font-heading text-white mb-4 group-hover:text-blue-400 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {value.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-white/70 leading-relaxed mb-6 font-body"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {value.description}
                </motion.p>

                {/* Stats */}
                <motion.div
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${value.color} rounded-sm text-white font-semibold text-sm font-mono`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {value.stats}
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 rounded-sm bg-white/5 group-hover:bg-white/10 transition-colors"
                  animate={
                    hoveredCard === index ? { rotate: 360 } : { rotate: 0 }
                  }
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="glass-card rounded-lg p-10 sm:p-12"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-12">
              <motion.h3
                className="text-3xl font-heading text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                우리의 성과
              </motion.h3>
              <motion.p
                className="text-white/60 font-body"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                숫자로 보는 띵킹캣의 여정
              </motion.p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-3xl sm:text-4xl font-heading text-white mb-2 group-hover:text-blue-400 transition-colors"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                    }}
                    viewport={{ once: true }}
                  >
                    {achievement.number}
                  </motion.div>
                  <div className="text-white/60 text-sm font-medium font-body">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="glass-card rounded-lg p-10 sm:p-12 max-w-4xl mx-auto"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="text-3xl font-heading text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              함께 새로운 가치를 만들어보세요
            </motion.h3>
            <motion.p
              className="text-xl text-white/70 mb-8 max-w-2xl mx-auto font-body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              혁신적인 아이디어와 전문적인 기술로 여러분의 비전을 현실로
              만들어드립니다
            </motion.p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold font-heading rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <span>프로젝트 시작하기</span>
              <motion.div
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
