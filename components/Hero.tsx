
import React from 'react';

interface HeroProps {
  onScrollTo: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollTo }) => {
  const checkoutUrl = "https://pay.kirvano.com/dc2fb612-6c0c-4c95-ab7a-831f1a5b7ff6";

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-gradient-hero">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-lime-400/10 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-1 bg-lime-400/20 text-lime-400 rounded-full text-xs font-bold tracking-widest mb-6">
            O APLICATIVO #1 DE PERFORMANCE PESSOAL
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Transforme seu corpo em <span className="text-lime-400 italic">12 semanas</span> com IA.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed">
            Esqueça as dietas genéricas e treinos aleatórios. Tenha um sistema inteligente que evolui com você, desenhado por atletas e cientistas da saúde.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-lime-400 text-black rounded-xl font-bold text-lg hover:scale-105 transition-transform text-center inline-block"
            >
              GARANTIR MINHA VAGA
            </a>
            <div className="flex items-center gap-4 px-6 cursor-pointer" onClick={() => onScrollTo('depoimentos')}>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                    alt="Usuário" 
                    className="w-10 h-10 rounded-full border-2 border-black"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-white">+15k membros</p>
                <div className="flex text-yellow-400 text-xs">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10">
             <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
              alt="App Dashboard" 
              className="rounded-3xl shadow-2xl border-8 border-gray-900 mx-auto max-w-[320px] md:max-w-md transform rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
          <div className="absolute top-1/4 -left-10 md:-left-20 bg-gray-900 p-4 rounded-2xl border border-gray-800 shadow-xl z-20 animate-pulse">
            <p className="text-xs text-gray-400">Gordura Corporal</p>
            <p className="text-2xl font-bold text-red-500">-8.4%</p>
          </div>
          <div className="absolute bottom-1/4 -right-10 md:-right-20 bg-gray-900 p-4 rounded-2xl border border-gray-800 shadow-xl z-20 animate-pulse delay-700">
            <p className="text-xs text-gray-400">Massa Magra</p>
            <p className="text-2xl font-bold text-lime-400">+5.2kg</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
