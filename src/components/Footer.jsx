import React from 'react';

const Footer = ({ t }) => {
  return (
    <footer className="py-10 border-t border-white/10 text-white/70">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Imaginé Design. {t.footer.rights}</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white">Behance</a>
          <a href="#" className="hover:text-white">Dribbble</a>
          <a href="#" className="hover:text-white">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;