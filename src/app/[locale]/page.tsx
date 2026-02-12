import CursorGlow from '@/components/effects/CursorGlow';
import ScrollReveal from '@/components/effects/ScrollReveal';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Hero from '@/components/sections/Hero';
import Prodev from '@/components/sections/Prodev';
import Architecture from '@/components/sections/Architecture';
import Highlights from '@/components/sections/Highlights';
import Guidelines from '@/components/sections/Guidelines';
import Stack from '@/components/sections/Stack';
import Experience from '@/components/sections/Experience';
import Testimonials from '@/components/sections/Testimonials';
import Education from '@/components/sections/Education';
import Freelancer from '@/components/sections/Freelancer';
import Contact from '@/components/sections/Contact';
import MussiGPT from '@/components/widgets/MussiGPT';
import ConsoleEasterEgg from './ConsoleEasterEgg';

export default function HomePage() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <Prodev />
        <Architecture />
        <Highlights />
        <Guidelines />
        <Stack />
        <Experience />
        <Testimonials />
        <Education />
        <Freelancer />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <ScrollReveal />
      <MussiGPT />
      <ConsoleEasterEgg />
    </>
  );
}
