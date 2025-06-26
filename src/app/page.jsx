import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import Hero from '@/components/sections/Hero';
import Solutions from '@/components/sections/Solutions';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';


export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
      </header>

      <Hero />
      
      <div 
        style={{
          background: 'radial-gradient(at 99% 99%, #1c1c1c 0px, transparent 50%), radial-gradient(at 3% 1%, #1c1c1c 0px, transparent 50%), #000000'
        }}
      >
        <Solutions />
        <Projects />
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
}