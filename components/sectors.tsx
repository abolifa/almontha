"use client";

import { motion } from "framer-motion";
import {
  Refrigerator,
  Battery,
  Plug,
  ShieldCheck,
  Lamp,
  Truck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Sectors() {
  const { t } = useTranslation();

  const items = [
    {
      icon: <Refrigerator size={26} />,
      title: t("sectors.items.homeAppliances"),
    },
    { icon: <Lamp size={26} />, title: t("sectors.items.lighting") },
    { icon: <Battery size={26} />, title: t("sectors.items.power") },
    { icon: <Plug size={26} />, title: t("sectors.items.electronics") },
    { icon: <ShieldCheck size={26} />, title: t("sectors.items.safety") },
    { icon: <Truck size={26} />, title: t("sectors.items.logistics") },
  ];

  return (
    <section
      id="sectors"
      className="relative py-36 bg-[#F9F9F3] text-[#3C3C32] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_25%,rgba(210,170,55,0.14),transparent_70%)]" />
      <div className="absolute inset-0 bg-[url('/patterns/pt-1.png')] opacity-[0.05]" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-black text-center mb-20 text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] via-[#B8962C] to-[#D4AF37]"
        >
          {t("sectors.title")}
        </motion.h2>

        <div className="relative flex flex-col items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full max-w-xl bg-white/85 backdrop-blur-xl border border-[#D4AF37]/25 py-6 px-10 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.04)] text-center font-bold text-lg tracking-tight text-[#5B5B50]"
          >
            {t("sectors.description")}
          </motion.div>

          <div className="relative w-full max-w-4xl grid grid-cols-1 gap-16">
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-linear-to-b from-transparent via-[#D4AF37]/50 to-transparent"></div>

            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: true }}
                className={`flex ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="relative w-80 bg-white border border-[#D4AF37]/28 rounded-2xl shadow-[0_4px_20px_rgba(212,175,55,0.12)] px-6 py-7 flex flex-col items-center gap-3 hover:shadow-[0_4px_30px_rgba(212,175,55,0.22)] transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#D4AF37] to-[#B78F2A] text-white flex items-center justify-center shadow-md">
                    {item.icon}
                  </div>

                  <div className="text-lg font-semibold text-[#3F3F35]">
                    {item.title}
                  </div>

                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-12 h-px bg-[#D4AF37]/40"
                    style={{
                      left: i % 2 === 0 ? "-48px" : "auto",
                      right: i % 2 !== 0 ? "-48px" : "auto",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
