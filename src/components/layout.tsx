import { ThemeProvider } from 'next-themes';

import Footer from './footer';
import Header from './home/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="land relative z-10">
        <Header />
        {children}
        <Footer />
      </main>
    </ThemeProvider>
  );
}
