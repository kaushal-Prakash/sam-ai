import DoDont from "@/components/do-and-dont/DoDont";
import Features from "@/components/feature/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Hero />
      <Features/>
      <DoDont/>
      <Footer/>
    </div>
  );
}
