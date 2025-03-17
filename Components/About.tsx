import { motion } from "framer-motion";

const About = () => {
  const cards = [
    {
      title: "혁신",
      description: "새로운 기술과 아이디어로 혁신적인 솔루션을 제공합니다",
      direction: "left" // 왼쪽에서 나타남
    },
    {
      title: "전문성",
      description: "전문적인 기술력으로 최고의 결과물을 만듭니다",
      direction: "top" // 위에서 나타남
    },
    {
      title: "신뢰",
      description: "신뢰할 수 있는 파트너로서 함께 성장합니다",
      direction: "right" // 오른쪽에서 나타남
    }
  ];

  const getInitialPosition = (direction: string) => {
    switch (direction) {
      case "left":
        return { x: -100, opacity: 0 };
      case "right":
        return { x: 100, opacity: 0 };
      case "top":
        return { y: -50, opacity: 0 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">소개</h2>
          <p className="text-gray-600">About</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center px-4"
        >
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            소프트웨어를 통해 더 편리한 일상과 새로운 가치를 제공합니다
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-12">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                className="bg-white p-4 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={getInitialPosition(card.direction)}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {card.title}
                  </h3>
                  <div className="h-0.5 w-12 bg-blue-500 mx-auto mb-4" />
                  <p className="text-sm text-gray-600">
                    {card.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 