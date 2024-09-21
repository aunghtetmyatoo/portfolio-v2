import { ThemeProvider } from "next-themes";

import Header from "@/components/Header";

export default function Home() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="land relative z-10">
        <Header />
      </main>
    </ThemeProvider>
  );
}
