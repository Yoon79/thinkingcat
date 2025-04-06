import { motion } from "framer-motion";

const About = () => {
  const cards = [
    {
      title: "혁신적인 기획",
      description:
        "새로운 가치를 창출하는 기획력으로 차별화된 서비스를 제공합니다.",
      direction: "left",
    },
    {
      title: "최신 기술 적용",
      description:
        "최신 기술을 활용하여 안정적이고 효율적인 시스템을 구축합니다.",
      direction: "up",
    },
    {
      title: "고객 중심 개발",
      description:
        "고객의 니즈를 최우선으로 생각하며 사용자 경험을 고려한 개발을 진행합니다.",
      direction: "right",
    },
  ];

  const getInitialPosition = (direction: string) => {
    switch (direction) {
      case "left":
        return { x: -50, opacity: 0 };
      case "right":
        return { x: 50, opacity: 0 };
      case "up":
        return { y: 50, opacity: 0 };
      default:
        return { y: 50, opacity: 0 };
    }
  };

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-xl font-bold text-gray-50 mb-2">
            소개
          </h2>
          <p className="text-gray-100">About</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={getInitialPosition(card.direction)}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#2c2635] bg-opacity-90 p-6 rounded-lg"
            >
              <h3 className="text-md font-bold text-gray-50 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-200 text-sm">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
