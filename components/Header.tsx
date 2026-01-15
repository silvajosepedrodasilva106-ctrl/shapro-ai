
import React, { useEffect, useState } from 'react';

interface HeaderProps {
  onScrollTo: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onScrollTo }) => {
  const [scrolled, setScrolled] = useState(false);
  const checkoutUrl = "https://pay.kirvano.com/dc2fb612-6c0c-4c95-ab7a-831f1a5b7ff6";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-lime-400 rounded-lg flex items-center justify-center shappro-glow">
            <span className="text-black font-extrabold text-xl">S</span>
          </div>
          <span className="font-bold text-xl tracking-tighter uppercase text-white">Shap<span className="text-lime-400">pro</span></span>
        </div>
        
        <nav className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
          <button onClick={() => onScrollTo('beneficios')} className="hover:text-lime-400 transition">Benefícios</button>
          <button onClick={() => onScrollTo('depoimentos')} className="hover:text-lime-400 transition">Resultados</button>
          <button onClick={() => onScrollTo('checkout')} className="hover:text-lime-400 transition">Preço</button>
        </nav>

        <a 
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-lime-400 text-black px-7 py-2.5 rounded-full font-bold text-sm hover:bg-white transition-all transform hover:scale-105 shadow-xl"
        >
          OBTER ACESSO
        </a>
      </div>
    </header>
  );
};

export default Header;
