"use client";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("i18nextLng") || "en";
    i18n.changeLanguage(saved).then(() => setReady(true));
    document.dir = saved === "ar" ? "rtl" : "ltr";
  }, []);

  if (!ready) return null;

  return <>{children}</>;
}
