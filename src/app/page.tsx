import Experience from '../components/home/experience';
import HeroSection from '../components/home/hero-section';
import Tech from '../components/home/tech';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <Tech />
      <Experience />
    </Layout>
  );
}
