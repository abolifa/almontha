import AboutUs from "@/components/about";
import Brands from "@/components/brands";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Products from "@/components/products";
import Sectors from "@/components/sectors";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Sectors />
      <Products />
      <Brands />
      <Contact />
    </>
  );
}
