import { ThemeProvider } from 'next-themes';

import { AnimatePage } from './animate-page';
import Footer from './footer';
import Header from './home/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {/* <div className="land relative z-10"> */}
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          <AnimatePage>{children}</AnimatePage>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
