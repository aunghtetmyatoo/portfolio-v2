import { ThemeProvider } from 'next-themes';

import Contact from '../components/contact';
import Experience from '../components/home/experience';
import Header from '../components/home/header';
import HeroSection from '../components/home/hero-section';
import Tech from '../components/home/tech';

export default function Home() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="land relative z-10">
        <Header />
        <HeroSection />
        <Tech />
        <Experience />
        <Contact />
      </main>
    </ThemeProvider>
  );
}
