import React, { useEffect, lazy, Suspense } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Work } from './components/sections/Work';
import { ParallaxChains } from './components/ui/ParallaxChains';

const Capabilities = lazy(() => import('./components/sections/Capabilities').then(m => ({ default: m.Capabilities })));
const Philosophy = lazy(() => import('./components/sections/Philosophy').then(m => ({ default: m.Philosophy })));
const Process = lazy(() => import('./components/sections/Process').then(m => ({ default: m.Process })));
const Technology = lazy(() => import('./components/sections/Technology').then(m => ({ default: m.Technology })));
const Studio = lazy(() => import('./components/sections/Studio').then(m => ({ default: m.Studio })));
const Testimonials = lazy(() => import('./components/sections/Testimonials').then(m => ({ default: m.Testimonials })));
const Contact = lazy(() => import('./components/sections/Contact').then(m => ({ default: m.Contact })));

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--motion-duration', '0.01ms');
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#f6f1eb] text-neutral-900 max-w-full overflow-x-hidden relative">
        <ParallaxChains />
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <Work />
            <Suspense fallback={<div className="min-h-screen" />}>
              <Capabilities />
              <Philosophy />
              <Process />
              <Technology />
              <Studio />
              <Testimonials />
              <Contact />
            </Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
