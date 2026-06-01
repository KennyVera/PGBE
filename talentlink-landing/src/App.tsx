/**
 * App — Componente raíz que ensambla todas las secciones.
 */
import Navbar from './components/Navbar';
import TeamIntro from './components/TeamIntro';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhatIs from './components/WhatIs';
import Roles from './components/Roles';
import AppFlow from './components/AppFlow';
import AISection from './components/AISection';
import Features from './components/Features';
import TechStack from './components/TechStack';
import Security from './components/Security';
import Notifications from './components/Notifications';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <TeamIntro />
        <Hero />
        <Stats />
        <WhatIs />
        <Roles />
        <AppFlow />
        <AISection />
        <Features />
        <TechStack />
        <Security />
        <Notifications />
      </main>
      <Footer />
    </>
  );
}
