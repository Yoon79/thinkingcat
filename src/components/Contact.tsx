import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactMethods = [
    {
      type: "email",
      label: "이메일",
      value: "thinkingcatworks@gmail.com",
      icon: "📧",
      description: "프로젝트 문의 및 협업 제안",
      action: "mailto:thinkingcatworks@gmail.com",
    },
    {
      type: "business",
      label: "비즈니스 문의",
      value: "사업 제안 환영",
      icon: "💼",
      description: "파트너십 및 사업 협력",
      action: "mailto:thinkingcatworks@gmail.com?subject=사업 제안",
    },
    {
      type: "support",
      label: "기술 지원",
      value: "24/7 지원",
      icon: "⚡",
      description: "기술적 문제 해결",
      action: "mailto:thinkingcatworks@gmail.com?subject=기술 지원",
    },
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("thinkingcatworks@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="cyber-grid opacity-20" />
        <div className="floating-particles" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              문의
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            혁신적인 솔루션으로 여러분의 비전을 현실로 만들어보세요
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-10">
              <div>
                <motion.h3
                  className="text-3xl font-heading text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  함께 시작해보세요
                </motion.h3>
                <motion.p
                  className="text-white/70 text-lg leading-relaxed font-body"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  프로젝트 아이디어가 있으시거나 기술적 문의사항이 있으시다면
                  언제든지 연락주세요. 띵킹캣과 함께 새로운 가치를 만들어보세요.
                </motion.p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.type}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={method.action}
                      className="group flex items-center p-5 glass-card rounded-lg hover-lift transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-sm mr-4 group-hover:scale-110 transition-transform">
                        <span className="text-xl">{method.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold font-heading group-hover:text-blue-400 transition-colors">
                          {method.label}
                        </div>
                        <div className="text-white/60 text-sm font-body">
                          {method.description}
                        </div>
                      </div>
                      <motion.div
                        className="text-white/40 group-hover:text-white/80 transition-colors"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </motion.a>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <motion.div
                className="grid grid-cols-2 gap-6 pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-2xl font-heading text-blue-400 mb-1">
                    24시간
                  </div>
                  <div className="text-white/60 text-sm font-body">
                    평균 응답 시간
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-heading text-purple-400 mb-1">
                    무료
                  </div>
                  <div className="text-white/60 text-sm font-body">
                    초기 컨설팅
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Main Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="glass-card rounded-lg p-10 sm:p-12 text-center relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              {/* Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-300"
                animate={{ opacity: isHovered ? 1 : 0 }}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="text-6xl mb-6 inline-block"
                  animate={
                    isHovered
                      ? { scale: 1.1, rotateY: 360 }
                      : { scale: 1, rotateY: 0 }
                  }
                  transition={{ duration: 0.8 }}
                >
                  🚀
                </motion.div>

                <motion.h3
                  className="text-3xl font-heading text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  프로젝트를 시작하세요
                </motion.h3>

                <motion.p
                  className="text-white/70 text-lg mb-8 leading-relaxed font-body"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  아이디어가 있으시나요? 함께 논의해보세요. 무료 컨설팅으로
                  프로젝트 가능성을 탐색해보세요.
                </motion.p>

                {/* Email with Copy Feature */}
                <motion.div
                  className="bg-black/20 rounded-lg p-6 mb-8 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1 min-w-0">
                      <span className="text-2xl mr-3 flex-shrink-0">📧</span>
                      <div className="text-left flex-1 min-w-0">
                        {/* <div className="text-white font-semibold font-mono break-all">
                          thinkingcatworks@gmail.com
                        </div> */}
                        <div className="text-white/60 text-sm font-body">
                          클릭하여 이메일 보내기
                        </div>
                      </div>
                    </div>
                    <motion.button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-sm bg-white/10 hover:bg-white/20 transition-colors flex-shrink-0 ml-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {copiedEmail ? "✓" : "📋"}
                    </motion.button>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="mailto:thinkingcatworks@gmail.com"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold font-heading rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <span>이메일 보내기</span>
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </motion.a>

                  <motion.a
                    href="mailto:thinkingcatworks@gmail.com?subject=사업 제안"
                    className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white/20 text-white hover:border-blue-500 hover:text-blue-400 rounded-lg font-semibold font-heading transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}
                  >
                    사업 제안
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-20 pt-8 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-white/60 text-lg font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-400 font-semibold font-heading">
              띵킹캣
            </span>
            과 함께 새로운 가치를 만들어보세요
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
