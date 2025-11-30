"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-[#0A0A0C] text-white flex items-center justify-center"
    >
      <LuxuryBackground />

      <div className="flex flex-col items-center justify-center gap-4 text-center z-10 px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="w-[180px] md:w-[280px] xl:w-[360px]"
        >
          <Image
            src="/meta/logo-gold.png"
            alt={t("hero.logoAlt")}
            width={1000}
            height={500}
            className="w-full h-auto drop-shadow-[0_0_35px_rgba(212,175,55,0.45)]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="text-3xl md:text-5xl font-extrabold tracking-wide leading-snug bg-clip-text text-transparent bg-linear-to-r from-[#F1D276] via-[#D4AF37] to-[#B89220]"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="text-xl md:text-2xl font-semibold text-[#E7E2D1]/90"
        >
          {t("hero.subtitle")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="text-[#E7E2D1]/80 max-w-xl text-lg leading-relaxed"
        >
          {t("hero.description")}
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          href="#contact"
          className="px-10 py-3 rounded-full text-sm font-semibold bg-linear-to-r from-[#D4AF37] to-[#C89B2F] shadow-[0_0_20px_rgba(212,175,55,0.45)] hover:scale-[1.03] transition-transform"
        >
          {t("hero.button")}
        </motion.a>
      </div>
    </section>
  );
}

function LuxuryBackground() {
  return (
    <>
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]" />

      {[...Array(28)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 bg-[#EAD08A]/40 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.15, 0.5, 0.15],
            scale: [0.8, 1.15, 0.8],
            x: [0, (Math.random() - 0.5) * 180, 0],
            y: [0, (Math.random() - 0.5) * 180, 0],
          }}
          transition={{
            duration: 7 + Math.random() * 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.22 }}
        transition={{ duration: 2 }}
        className="absolute w-[900px] h-[900px] bg-[#D4AF37]/20 blur-[220px] rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
      />
    </>
  );
}
