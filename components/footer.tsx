"use client";

import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-[#0a0d12] text-white pt-20 pb-10 border-t border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(56,189,248,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[url('/patterns/pt-1.png')] opacity-[0.12]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-20">
          {/* ─────────────────────────── Logo + Text ─────────────────────────── */}
          <div className="flex flex-col gap-5">
            <Image
              src="/meta/logo-white.png"
              alt="logo"
              width={120}
              height={120}
              loading="eager"
              className="opacity-90 w-32 h-auto"
            />
            <p className="text-white leading-relaxed text-lg">
              {t("footer.description")}
            </p>
          </div>

          {/* ─────────────────────────── Navigation ─────────────────────────── */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold text-[#D4AF37]">
              {t("footer.links.title")}
            </h3>

            <a
              href="#hero"
              className="text-slate-300 hover:text-[#D4AF37] text-lg transition"
            >
              {t("footer.links.home")}
            </a>
            <a
              href="#about"
              className="text-slate-300 hover:text-[#D4AF37] text-lg transition"
            >
              {t("footer.links.about")}
            </a>
            <a
              href="#products"
              className="text-slate-300 hover:text-[#D4AF37] text-lg transition"
            >
              {t("footer.links.products")}
            </a>
            <a
              href="#contact"
              className="text-slate-300 hover:text-[#D4AF37] text-lg transition"
            >
              {t("footer.links.contact")}
            </a>
          </div>

          {/* ─────────────────────────── Contact ─────────────────────────── */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold text-[#D4AF37]">
              {t("footer.contact.title")}
            </h3>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-xl bg-linear-to-br from-[#D4AF37] to-[#B38728] flex items-center justify-center">
                <Phone size={16} />
              </div>
              <a
                href="tel:+218914554001"
                dir="ltr"
                className="underline text-lg text-slate-300 hover:text-[#D4AF37] transition"
              >
                +218 91 455 4001
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-xl bg-linear-to-br from-[#D4AF37] to-[#B38728] flex items-center justify-center">
                <Mail size={16} />
              </div>
              <a
                href="mailto:info@almontaha.ly"
                className="underline text-lg text-slate-300 hover:text-[#D4AF37] transition"
              >
                info@almontaha.ly
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-xl bg-linear-to-br from-[#D4AF37] to-[#B38728] flex items-center justify-center">
                <MapPin size={16} />
              </div>
              <p className="text-lg text-slate-300">
                {t("footer.contact.address")}
              </p>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://wa.me/218914554001"
                target="_blank"
                className="w-8 h-8 rounded-xl bg-[#25D366] flex items-center justify-center"
              >
                <FaWhatsapp size={16} className="text-white" />
              </a>

              <a
                href="https://www.facebook.com/AssafwaCompany"
                target="_blank"
                className="w-8 h-8 rounded-xl bg-[#1877F2] flex items-center justify-center"
              >
                <Facebook size={16} className="text-white" />
              </a>

              <a
                href="mailto:info@almontaha.ly"
                className="w-8 h-8 rounded-xl bg-linear-to-br from-sky-500 to-blue-700 flex items-center justify-center"
              >
                <Mail size={16} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* ─────────────────────────── Bottom Text ─────────────────────────── */}
        <div className="border-t border-slate-800 pt-6 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
