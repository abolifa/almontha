"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Products() {
  const { t } = useTranslation();

  const products = [
    {
      image: "/products/ac.png",
      title: t("products.items.ac.title"),
      text: t("products.items.ac.text"),
    },
    {
      image: "/products/oven.png",
      title: t("products.items.oven.title"),
      text: t("products.items.oven.text"),
    },
    {
      image: "/products/tv.webp",
      title: t("products.items.tv.title"),
      text: t("products.items.tv.text"),
    },
    {
      image: "/products/microwave.webp",
      title: t("products.items.microwave.title"),
      text: t("products.items.microwave.text"),
    },
    {
      image: "/products/fridge.webp",
      title: t("products.items.fridge.title"),
      text: t("products.items.fridge.text"),
    },
    {
      image: "/products/washing.png",
      title: t("products.items.washing.title"),
      text: t("products.items.washing.text"),
    },
  ];

  return (
    <section
      id="products"
      className="relative py-40 bg-[#101317] text-[#E9DDB6] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_25%,rgba(212,175,55,0.25),transparent_70%)]" />
      <div className="absolute inset-0 opacity-[0.3] bg-[url('/patterns/pt-1.png')]" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-black tracking-tight text-center mb-28
          bg-clip-text text-transparent bg-linear-to-r from-[#E8C86F] via-[#D4AF37] to-[#B8952B]"
        >
          {t("products.title")}
        </motion.h2>

        <div className="flex flex-col gap-32">
          {products.map((product, i) => (
            <div
              key={i}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative w-full rounded-3xl overflow-hidden p-6
                bg-[#1A1F24] border border-[#D4AF37]/28 shadow-[0_0_35px_rgba(212,175,55,0.22)]"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain w-full h-auto"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative flex flex-col gap-4"
              >
                <h3 className="text-3xl font-black text-[#F6E9C9]">
                  {product.title}
                </h3>
                <p className="text-lg text-[#C9B98A] leading-relaxed">
                  {product.text}
                </p>

                <div className="w-24 h-1 rounded-full bg-linear-to-l from-[#D4AF37] to-[#B8952B]" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
