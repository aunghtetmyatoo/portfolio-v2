import { ThemeProvider } from "next-themes";

import Header from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="land relative z-10">
        <Header />
        <HeroSection />
      </main>
    </ThemeProvider>
  );
}
