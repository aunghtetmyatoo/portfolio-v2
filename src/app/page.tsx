import { ThemeProvider } from 'next-themes';

import Contact from '../components/contact';
import Experience from '../components/experience';
import Header from '../components/home/header';
import HeroSection from '../components/home/hero-section';
import Skill from '../components/Skill';

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
