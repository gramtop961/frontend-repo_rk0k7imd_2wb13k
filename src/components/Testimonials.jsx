import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonial = ({ quote, author }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(el, { y: 30, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  }, []);
  return (
    <div ref={ref} className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-6">
      <p className="text-white/90">“{quote}”</p>
      <p className="mt-4 text-white/60">{author}</p>
    </div>
  );
};

const Testimonials = ({ t }) => {
  const data = t.testimonials.items;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((it, i) => (
        <Testimonial key={i} quote={it.quote} author={it.author} />
      ))}
    </div>
  );
};

export default Testimonials;