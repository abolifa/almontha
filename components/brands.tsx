"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Brands() {
  const { t } = useTranslation();

  const partners = [
    { name: "Hitachi", logo: "/brands/hitachi.png" },
    { name: "Vinola", logo: "/brands/vinola.png" },
    { name: "York", logo: "/brands/york.png" },
  ];

  const imports = [
    { name: "LG", logo: "/brands/lg.svg" },
    { name: "Gree", logo: "/brands/gree.png" },
    { name: "Toshiba", logo: "/brands/toshiba.svg" },
    { name: "Sharp", logo: "/brands/sharp.webp" },
  ];

  return (
    <section
      id="brands"
      className="relative py-32 bg-[#FAF7EE] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_25%,rgba(212,175,55,0.18),transparent_70%)]" />
      <div className="absolute inset-0 opacity-[0.1] bg-[url('/patterns/pt-1.png')]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10 flex flex-col gap-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center tracking-wide 
          bg-clip-text text-transparent bg-linear-to-r from-[#C9A649] via-[#D4AF37] to-[#AF8D31]"
        >
          {t("brands.title")}
        </motion.h2>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-10"
        >
          <h3 className="text-2xl font-semibold text-[#B99532]">
            {t("brands.partnersTitle")}
          </h3>

          <div className="flex flex-wrap justify-center gap-14">
            {partners.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.82 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="w-40 h-40 rounded-full bg-white/90 backdrop-blur-xl 
                border border-[#D4AF37]/65 shadow-[0_6px_22px_rgba(212,175,55,0.23)]
                flex items-center justify-center hover:shadow-[0_8px_28px_rgba(212,175,55,0.38)]
                hover:scale-[1.06] transition-all"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={120}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Imports */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-10"
        >
          <h3 className="text-2xl font-semibold text-[#8E805C]">
            {t("brands.importsTitle")}
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {imports.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full bg-white border border-[#CBB88E]/30 
                shadow-[0_3px_18px_rgba(0,0,0,0.05)]
                hover:border-[#D4AF37]/50 hover:scale-[1.04] transition-all flex items-center justify-center"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={95}
                  height={95}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
