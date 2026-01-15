
import React, { useState } from 'react';
import { FAQItem } from '../types';

const faqItems: FAQItem[] = [
  {
    question: "Preciso de equipamentos de academia?",
    answer: "Não! O Shappro possui módulos específicos para treinos em casa (Home Workout), utilizando apenas o peso do corpo ou objetos domésticos simples."
  },
  {
    question: "O app é para iniciantes?",
    answer: "Com certeza. Nossa IA identifica seu nível atual e cria um plano de progressão segura para evitar lesões e garantir resultados constantes."
  },
  {
    question: "Como funciona a dieta?",
    answer: "A dieta é baseada em seus objetivos (perda de gordura, ganho de massa ou manutenção). O app calcula seus macros e sugere receitas deliciosas e fáceis."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim! Se você optar pelo plano mensal, pode cancelar a qualquer momento sem taxas ocultas. No plano anual, você garante o maior desconto."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-16">Dúvidas Frequentes</h2>
        
        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <div key={idx} className="border border-gray-800 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center bg-gray-900/50 hover:bg-gray-900 transition-colors"
              >
                <span className="font-bold text-lg">{item.question}</span>
                <span className={`text-2xl transition-transform duration-300 ${openIndex === idx ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${openIndex === idx ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-6 text-gray-400 leading-relaxed border-t border-gray-800">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
