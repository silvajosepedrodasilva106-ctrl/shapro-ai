
import React from 'react';
import { Benefit } from '../types';

const benefits: Benefit[] = [
  {
    title: "IA Adaptativa",
    description: "Nossa inteligência artificial ajusta sua carga e intensidade baseado no seu sono, humor e performance diária.",
    icon: "⚡"
  },
  {
    title: "Bio-Nutrição",
    description: "Planos alimentares que respeitam suas intolerâncias e preferências, com listas de compras automáticas.",
    icon: "🍎"
  },
  {
    title: "Comunidade VIP",
    description: "Acesso a um grupo exclusivo de alta performance para troca de experiências e desafios mensais.",
    icon: "🤝"
  },
  {
    title: "Métricas Reais",
    description: "Integração com Apple Watch e Garmin para dados precisos de VO2 Max, estresse e recuperação.",
    icon: "📊"
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Por que escolher o Shappro?</h2>
          <p className="text-xl text-gray-400">Não somos apenas mais um app de treinos. Somos seu parceiro tecnológico para uma mudança de vida definitiva.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-gray-900/50 border border-gray-800 hover:border-lime-400 transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
