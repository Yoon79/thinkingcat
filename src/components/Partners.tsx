import { motion } from "framer-motion";
import Image from "next/image";

const Partners = () => {
  const partners = [
    { name: "Partner 1", logo: "/partners/partner1.png" },
    { name: "Partner 2", logo: "/partners/partner2.png" },
    { name: "Partner 3", logo: "/partners/partner3.png" },
    { name: "Partner 4", logo: "/partners/partner4.png" },
  ];

  // 무한 슬라이드를 위해 파트너 목록을 2배로 복제
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="partners" className="py-20 bg-black overflow-hidden">
      <div className="flex items-center justify-center flex-col px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-xl font-bold text-gray-50 mb-2">
            협력사
          </h2>
          <p className="text-gray-100">Partners</p>
        </motion.div>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 group relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-48 mx-4"
              >
                <div className="relative h-10 w-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
