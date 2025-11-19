import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTA = ({ t }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(el, { y: 30, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  }, []);
  return (
    <div ref={ref} className="relative overflow-hidden rounded-3xl p-10 md:p-14 border border-white/15 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.6),transparent_60%)] pointer-events-none" />
      <div className="relative z-10">
        <h3 className="text-2xl md:text-4xl font-semibold text-white">{t.cta.title}</h3>
        <p className="mt-3 text-white/80 max-w-2xl">{t.cta.subtitle}</p>
        <a href="#contact" className="mt-6 inline-flex px-6 py-3 rounded-xl bg-white/90 text-slate-900 font-medium hover:bg-white transition">{t.cta.button}</a>
      </div>
    </div>
  );
};

export default CTA;