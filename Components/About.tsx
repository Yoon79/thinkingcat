import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0D1117]"
    >
      {/* 홀로그램 스타일 배경 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(66,138,245,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-matrix-rain opacity-10" />
      </div>
      
      {/* 파티클 효과 */}
      <div className="absolute inset-0 floating-particles" />
      
      <div className="container text-center mx-auto p-4 text-white relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-3xl neon-text-blue">소개</div>
          <p className="text-xl text-blue-400 pb-10">About Us</p>
          <p className="text-center text-xl font-semibold glowing-text">
            소프트웨어를 통해 더 편리한 일상과 새로운 가치를 제공합니다
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 