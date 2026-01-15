
import React from 'react';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-overlay">
      <div className="bg-zinc-900 w-full max-w-lg rounded-3xl border border-zinc-800 p-8 shadow-2xl animate-fadeIn relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-zinc-500 hover:text-white text-2xl"
        >
          &times;
        </button>
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-black text-2xl">🔒</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">Checkout Seguro</h3>
          <p className="text-zinc-400">Você está a um passo da sua melhor versão.</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Inscrição realizada com sucesso! (Simulação)'); onClose(); }}>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Nome Completo</label>
            <input type="text" required className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition" placeholder="Ex: João Silva" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">E-mail</label>
            <input type="email" required className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition" placeholder="seu@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">WhatsApp</label>
            <input type="tel" required className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition" placeholder="(00) 00000-0000" />
          </div>
          
          <button 
            type="submit"
            className="w-full py-4 bg-lime-400 text-black font-black rounded-xl hover:bg-lime-300 transition-colors mt-6 uppercase tracking-wider"
          >
            Finalizar Inscrição
          </button>
        </form>

        <p className="text-center text-xs text-zinc-500 mt-6">
          Pagamento processado por criptografia de 256 bits.
        </p>
      </div>
    </div>
  );
};

export default Modal;
