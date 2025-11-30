"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(t("contact.status.sending"));

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("to", "info@almontaha.ly");

    try {
      const response = await fetch("https://relay.eratech.com.ly/send", {
        method: "POST",
        body: formData,
      });

      const text = await response.text();

      if (text.includes("OK")) {
        setStatus(t("contact.status.success"));
        form.reset();
      } else {
        setStatus(t("contact.status.error"));
      }
    } catch {
      setStatus(t("contact.status.serverError"));
    }
  };

  return (
    <section
      id="contact"
      className="relative py-40 bg-[#1A1C1F] text-[#E8E8E8] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_10%,rgba(212,175,55,0.25),transparent_75%)]" />
      <div className="absolute inset-0 opacity-[0.2] bg-[url('/patterns/pt-1.png')]" />
      <div className="absolute inset-0 opacity-[0.10] bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_40%,rgba(255,255,255,0.04)_100%)]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-20 
          text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] via-[#C49B32] to-[#B38728]"
        >
          {t("contact.title")}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#212428] rounded-[28px] border border-[#D4AF37]/40 
            shadow-[0_0_45px_rgba(3,3,3,0.5)] p-10 flex flex-col gap-6"
          >
            <input
              name="name"
              type="text"
              placeholder={t("contact.form.name")}
              className="h-14 rounded-xl bg-[#181A1D] border border-[#6A6A6A]/40 px-4 text-lg text-[#EDEDED] placeholder:text-[#AAAAAA] focus:border-[#D4AF37] outline-none transition"
            />

            <input
              name="email"
              type="email"
              placeholder={t("contact.form.email")}
              className="h-14 rounded-xl bg-[#181A1D] border border-[#6A6A6A]/40 px-4 text-lg text-[#EDEDED] placeholder:text-[#AAAAAA] focus:border-[#D4AF37] outline-none transition"
            />

            <input
              name="phone"
              type="text"
              placeholder={t("contact.form.phone")}
              className="h-14 rounded-xl bg-[#181A1D] border border-[#6A6A6A]/40 px-4 text-lg text-[#EDEDED] placeholder:text-[#AAAAAA] focus:border-[#D4AF37] outline-none transition"
            />

            <textarea
              name="message"
              placeholder={t("contact.form.message")}
              className="h-44 rounded-xl bg-[#181A1D] border border-[#6A6A6A]/40 p-4 text-lg text-[#EDEDED] placeholder:text-[#AAAAAA] focus:border-[#D4AF37] outline-none transition"
            />

            <button
              type="submit"
              className="h-14 rounded-xl bg-linear-to-r from-[#D4AF37] to-[#B38728] text-white font-semibold text-lg
              shadow-[0_8px_35px_rgba(212,175,55,0.35)] hover:brightness-110 transition mt-auto flex items-center justify-center gap-2"
            >
              {t("contact.form.send")} <Send size={20} />
            </button>

            {status && (
              <p className="text-center text-[#D4AF37] pt-2">{status}</p>
            )}
          </motion.form>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="bg-[#212428] rounded-[28px] border border-[#D4AF37]/40 shadow-[0_0_45px_rgba(3,3,3,0.5)] p-10 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#D4AF37] to-[#A88623] text-white flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <a
                  href="mailto:info@almontaha.ly"
                  className="text-lg font-medium text-[#E6E2D5] underline underline-offset-4 decoration-[#D4AF37]/80"
                >
                  info@almontaha.ly
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#D4AF37] to-[#A88623] text-white flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <a
                  href="tel:+218914554001"
                  dir="ltr"
                  className="text-lg font-medium text-[#E6E2D5] underline underline-offset-4 decoration-[#D4AF37]/80"
                >
                  +218 91 455 4001
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#D4AF37] to-[#A88623] text-white flex items-center justify-center">
                  <FaWhatsapp size={20} />
                </div>
                <a
                  href="https://wa.me/218914554001"
                  dir="ltr"
                  className="text-lg font-medium text-[#E6E2D5] underline underline-offset-4 decoration-[#D4AF37]/80"
                >
                  +218 91 455 4001
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#D4AF37] to-[#A88623] text-white flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div className="text-lg font-medium text-[#E6E2D5]">
                  {t("contact.address")}
                </div>
              </div>
            </div>

            <div className="rounded-[28px] overflow-hidden border border-[#D4AF37]/45 shadow-[0_0_45px_rgba(3,3,3,0.4)] flex-1">
              <iframe
                src="https://maps.google.com/maps?q=32.39219554647524,15.087699066515594&z=15&output=embed"
                className="w-full h-full"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
