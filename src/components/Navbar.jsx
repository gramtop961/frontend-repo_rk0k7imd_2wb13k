import React, { useEffect, useRef } from 'react';
import { Moon, Sun, Globe } from 'lucide-react';
import { gsap } from 'gsap';

const Navbar = ({ lang, setLang, theme, setTheme, t }) => {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <div ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[86%]">
      <div className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 shadow-2xl rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center">
            <span className="text-white font-semibold">ID</span>
          </div>
          <span className="text-white/90 font-medium tracking-wide">Imaginé Design</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-white/80">
          <a href="#about" className="hover:text-white transition">{t.nav.about}</a>
          <a href="#projects" className="hover:text-white transition">{t.nav.projects}</a>
          <a href="#clients" className="hover:text-white transition">{t.nav.clients}</a>
          <a href="#contact" className="hover:text-white transition">{t.nav.contact}</a>
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="size-9 rounded-xl bg-white/20 dark:bg-white/10 border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            aria-label="language-toggle"
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="size-9 rounded-xl bg-white/20 dark:bg-white/10 border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition"
          >
            <Globe size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;