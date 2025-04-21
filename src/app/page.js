import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import Hero from '@/components/sections/Hero';
import Solutions from '@/components/sections/Solutions';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import DemoVideo from '@/components/sections/DemoVideo';

export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      
      <Hero />
      <DemoVideo />
      <Solutions />
      <Projects />
      <Contact />
      
      <Footer />
    </main>
  );
}