import { ThemeProvider } from 'next-themes';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import Footer from './components/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <ImageCarousel />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
