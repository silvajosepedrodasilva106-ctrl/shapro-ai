
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
              <span className="text-black font-extrabold text-sm">S</span>
            </div>
            <span className="font-bold tracking-tighter text-lg uppercase text-white">Shap<span className="text-lime-400">pro</span></span>
          </div>
          
          <div className="flex gap-8 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition">Privacidade</a>
            <a href="#" className="hover:text-white transition">Termos de Uso</a>
            <a href="#" className="hover:text-white transition">Contato</a>
          </div>

          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Shappro AI Technologies. Todos os direitos reservados.
          </p>
        </div>
        <div className="mt-12 text-center text-xs text-gray-700 max-w-2xl mx-auto">
          Os resultados variam de pessoa para pessoa. Sempre consulte um profissional de saúde antes de iniciar qualquer programa de exercícios ou mudança na dieta.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
