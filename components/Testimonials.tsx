
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: "Ricardo Mendes",
    role: "Empresário",
    content: "O Shappro mudou minha rotina. Em 3 meses perdi 12kg e minha disposição para o trabalho triplicou. A IA realmente entende quando estou cansado.",
    image: "https://picsum.photos/seed/user1/200/200",
    results: "-12kg em 90 dias"
  },
  {
    name: "Ana Beatriz",
    role: "Atleta Amadora",
    content: "Os treinos são intensos e diretos ao ponto. Nunca tive tanta definição muscular em tão pouco tempo. O suporte nutricional é impecável.",
    image: "https://picsum.photos/seed/user2/200/200",
    results: "+4kg de Massa Magra"
  },
  {
    name: "Carlos Eduardo",
    role: "Desenvolvedor",
    content: "A integração com o Apple Watch é a melhor que já vi. Consigo acompanhar minha evolução com dados reais, sem achismo.",
    image: "https://picsum.photos/seed/user3/200/200",
    results: "Redução de 15% de BF"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Resultados Reais de Pessoas Reais</h2>
            <p className="text-xl text-gray-400">Junte-se a milhares de membros que decidiram tomar o controle de sua saúde.</p>
          </div>
          <div className="flex gap-4">
             <div className="bg-lime-400 text-black px-6 py-3 rounded-full font-bold">
               Nota 4.9/5 na App Store
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-900 p-8 rounded-3xl relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 p-4">
                <span className="text-lime-400 font-bold bg-lime-400/10 px-3 py-1 rounded-full text-xs uppercase tracking-tighter">
                  {t.results}
                </span>
              </div>
              <p className="text-gray-300 italic mb-8 text-lg">"{t.content}"</p>
              <div className="mt-auto flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-lime-400" />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
