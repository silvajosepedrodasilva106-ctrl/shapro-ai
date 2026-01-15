
import React from 'react';

const Pricing: React.FC = () => {
  const checkoutUrl = "https://pay.kirvano.com/dc2fb612-6c0c-4c95-ab7a-831f1a5b7ff6";

  return (
    <section id="checkout" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-[40px] overflow-hidden border border-gray-800 shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="p-12 bg-lime-400 text-black flex flex-col justify-center">
              <h3 className="text-3xl font-extrabold mb-6">Oferta Especial de Lançamento</h3>
              <p className="text-lg font-medium opacity-80 mb-8">Acesso vitalício aos novos algoritmos de IA e suporte prioritário.</p>
              
              <ul className="space-y-4 mb-10">
                {["Treinos Ilimitados", "Dieta Personalizada", "Suporte via WhatsApp", "Acesso à Comunidade", "Certificado de Evolução"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold">
                    <span className="w-6 h-6 bg-black text-lime-400 rounded-full flex items-center justify-center text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-12 flex flex-col justify-center items-center text-center">
              <div className="mb-4">
                <span className="text-gray-500 line-through text-xl">R$ 197,00</span>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-6xl font-black text-white">R$ 47,90</span>
                </div>
                <p className="text-lime-400 font-bold mt-2 uppercase tracking-wide">PAGAMENTO ÚNICO • ACESSO VITALÍCIO</p>
              </div>

              <a 
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-6 bg-lime-400 text-black rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-lg shadow-lime-400/20 mb-6 uppercase tracking-tight inline-block text-center"
              >
                Quero Minha Transformação
              </a>

              <div className="flex items-center gap-4 mb-6">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="h-4 opacity-50" alt="Visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="h-6 opacity-50" alt="Mastercard" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix.png" className="h-5 opacity-50" alt="Pix" />
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-2xl border border-gray-700">
                <div className="w-16 h-16 rounded-full bg-lime-400/20 flex items-center justify-center border border-lime-400 shrink-0">
                  <span className="text-2xl font-bold text-lime-400">7</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm">Garantia Incondicional</p>
                  <p className="text-xs text-gray-400 leading-tight">Se não ver resultados em 7 dias, devolvemos 100% do seu dinheiro.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
