import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = ({ id, title, subtitle, children, align = 'center', dark = false }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
      gsap.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          delay: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id={id} ref={sectionRef} className={`${dark ? 'bg-slate-950' : 'bg-transparent'} relative py-20 md:py-28`}> 
      <div className={`container mx-auto px-6 text-${align}`}>
        <h2 ref={titleRef} className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
          {title}
        </h2>
        {subtitle && (
          <p ref={subtitleRef} className="mt-3 text-white/70 max-w-3xl">
            {subtitle}
          </p>
        )}
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;