import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { translations } from './i18n';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [theme]);

  const t = useMemo(() => translations[lang], [lang]);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-manrope">
      {/* floating glassy navbar */}
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />

      {/* hero section with spline */}
      <Hero t={t} />

      {/* about */}
      <Section id="about" title={t.about.title} subtitle={t.about.subtitle}>
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6`}>
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <p className="text-white/80">
                {lang === 'en' ? 'Concept' : 'الفكرة'} {i}
              </p>
              <p className="mt-2 text-white/60">
                {lang === 'en' ? 'We emphasize proportion, light, and timeless materials to create balance.' : 'نركز على التناسب والضوء والمواد الخالدة لخلق توازن.'}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* projects */}
      <Section id="projects" title={t.projects.title} subtitle={t.projects.subtitle} dark>
        <Projects t={t} />
      </Section>

      {/* latest projects */}
      <Section id="latest" title={t.latest.title} subtitle={t.latest.subtitle}>
        <Projects t={t} />
      </Section>

      {/* testimonials */}
      <Section id="clients" title={t.testimonials.title} subtitle={t.testimonials.subtitle} dark>
        <Testimonials t={t} />
      </Section>

      {/* cta */}
      <div id="contact" className="bg-slate-950">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <CTA t={t} />
        </div>
      </div>

      {/* footer */}
      <div className="bg-slate-950/60">
        <div className="container mx-auto px-6">
          <Footer t={t} />
        </div>
      </div>
    </div>
  );
}

export default App;
