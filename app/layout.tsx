import { Tajawal } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata = {
  metadataBase: new URL("https://almontaha.ly"),

  title: "المنتهى الدولية | أجهزة كهربائية ومعدات منزلية عالية الجودة",
  description:
    "شركة المنتهى الدولية — استيراد وتوزيع الأجهزة الكهربائية والكهرومنزلية، جودة مضمونة، أسعار تنافسية، وخدمة موثوقة لجميع الأسواق الليبية.",

  keywords: [
    "المنتهى الدولية",
    "أجهزة كهربائية",
    "كهرومنزلية",
    "معدات منزلية",
    "ثلاجات",
    "مكيفات",
    "غسالات",
    "أفران",
    "تلفزيونات",
    "ميكروويف",
    "أجهزة مطبخ",
    "أجهزة حديثة",
    "استيراد كهربائيات ليبيا",
    "معدات كهربائية",
    "منظومات كهربائية",
    "توزيع كهربائيات ليبيا",
    "أدوات كهربائية منزلية",
  ],

  applicationName: "Almontaha International",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Almontaha International" }],
  creator: "Almontaha International",
  publisher: "Almontaha International",

  openGraph: {
    type: "website",
    locale: "ar_AR",
    url: "https://almontaha.ly",
    siteName: "المنتهى الدولية للأجهزة الكهربائية",
    title: "المنتهى الدولية | أجهزة ومعدات كهربائية وكهرومنزلية",
    description:
      "شركة المنتهى الدولية — استيراد وتوزيع أجهزة كهربائية وكهرومنزلية بجودة عالية وتقنيات حديثة تلائم كل بيت.",
    images: [
      {
        url: "/meta/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "المنتهى الدولية — أجهزة كهربائية وكهرومنزلية",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@almontaha",
    creator: "@almontaha",
    title: "المنتهى الدولية — استيراد أجهزة كهربائية ومعدات منزلية",
    description:
      "نوفّر مجموعة واسعة من الأجهزة الكهربائية الحديثة بجودة عالية وأسعار تنافسية تلائم احتياجات السوق الليبي.",
    images: ["/meta/og-image.jpg"],
  },

  icons: {
    icon: "/meta/favicon.ico",
    shortcut: "/meta/favicon.ico",
    apple: "/meta/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://almontaha.ly",
  },

  category: "Electrical & Home Appliances",
};

const tajawal = Tajawal({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-tajawal",
  fallback: ["sans-serif"],
  preload: true,
  style: "normal",
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(tajawal.className, tajawal.variable, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
