import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { gsap } from 'gsap';

const Hero = ({ t }) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(titleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' })
      .fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.6')
      .fromTo(ctaRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.6');
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 pointer-events-none" />
      <div className="relative z-10 container mx-auto px-6 pt-28 text-center">
        <h1 ref={titleRef} className="text-4xl md:text-6xl font-semibold text-white tracking-tight">
          {t.hero.title}
        </h1>
        <p ref={subtitleRef} className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>
        <div ref={ctaRef} className="mt-8 flex items-center justify-center gap-4">
          <a href="#projects" className="px-6 py-3 rounded-xl bg-white/90 text-slate-900 font-medium backdrop-blur-md hover:bg-white transition">
            {t.hero.ctaPrimary}
          </a>
          <a href="#about" className="px-6 py-3 rounded-xl bg-white/10 text-white border border-white/30 font-medium backdrop-blur-md hover:bg-white/20 transition">
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;