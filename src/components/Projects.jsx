import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ title, image, category }) => {
  const cardRef = useRef(null);
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    gsap.fromTo(el, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  }, []);
  return (
    <div ref={cardRef} className="group overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <p className="text-white/60 text-sm">{category}</p>
        <h3 className="text-white font-medium text-lg mt-1">{title}</h3>
      </div>
    </div>
  );
};

const Projects = ({ t }) => {
  const items = [
    { title: t.projects.items[0].title, category: t.projects.items[0].category, image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop' },
    { title: t.projects.items[1].title, category: t.projects.items[1].category, image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200&auto=format&fit=crop' },
    { title: t.projects.items[2].title, category: t.projects.items[2].category, image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </div>
  );
};

export default Projects;