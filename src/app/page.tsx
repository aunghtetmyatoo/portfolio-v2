import { ThemeProvider } from "next-themes";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Skill from "@/components/Skill";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="land relative z-10">
        <Header />
        <HeroSection />
        <Skill />
        <Experience />
        <Contact />
      </main>
    </ThemeProvider>
  );
}
