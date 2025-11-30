"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative py-40 bg-[#FAFAF7] text-[#4A4A42] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_25%,rgba(180,147,53,0.12),transparent_70%)]" />
      <div className="absolute inset-0 bg-[url('/patterns/pt-1.png')] opacity-[0.1]" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-black text-center tracking-wide text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] via-[#B78F2A] to-[#D4AF37] mb-24"
        >
          {t("about.title")}
        </motion.h2>

        <div className="relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative w-64 h-64 rounded-full bg-white/70 backdrop-blur-xl border border-[#D4AF37]/30 shadow-[0_0_45px_rgba(212,175,55,0.25)] flex items-center justify-center"
          >
            <Image
              src="/meta/logo-normal.png"
              alt={t("about.logoAlt")}
              width={300}
              height={300}
              className="w-48 h-48 object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.45)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            transition={{ duration: 1.2, delay: 0.35 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 w-0.5 h-[530px] -translate-x-1/2 -translate-y-1/2 bg-linear-to-b from-transparent via-[#D4AF37]/40 to-transparent"
          />
        </div>

        <div className="mt-28 grid grid-cols-1 md:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative pl-10"
          >
            <h3 className="text-2xl font-bold text-[#BA9736] mb-4">
              {t("about.vision.title")}
            </h3>
            <p className="text-lg leading-loose text-[#4F4F48]/80">
              {t("about.vision.text")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative pr-10"
          >
            <h3 className="text-2xl font-bold text-[#BA9736] mb-4">
              {t("about.mission.title")}
            </h3>
            <p className="text-lg leading-loose text-[#4F4F48]/80">
              {t("about.mission.text")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative pl-10"
          >
            <h3 className="text-2xl font-bold text-[#BA9736] mb-4">
              {t("about.values.title")}
            </h3>
            <p className="text-lg leading-loose text-[#4F4F48]/80">
              {t("about.values.text")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative pr-10"
          >
            <h3 className="text-2xl font-bold text-[#BA9736] mb-4">
              {t("about.whyUs.title")}
            </h3>
            <p className="text-lg leading-loose text-[#4F4F48]/80">
              {t("about.whyUs.text")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
