import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenCheckout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-rose-100/70 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-rose-50 border border-rose-200/60 flex items-center justify-center text-rose-600 shadow-sm transition-transform group-hover:scale-105">
            <Sparkles className="w-4 h-4" />
          </span>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-display">
            Pílulas do Poder
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#beneficios" className="hover:text-rose-700 transition-colors">
            Benefícios
          </a>
          <a href="#o-metodo" className="hover:text-rose-700 transition-colors">
            O Método
          </a>
          <a href="#oferta" className="hover:text-rose-700 transition-colors">
            Stack da Oferta
          </a>
          <a href="#conteudo" className="hover:text-rose-700 transition-colors">
            O Que Você Descobre
          </a>
          <a href="#faq" className="hover:text-rose-700 transition-colors">
            Perguntas Frequentes
          </a>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCheckout}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-rose-950 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_20px_rgba(180,60,90,0.25)] transition-all transform active:scale-95 whitespace-nowrap cursor-pointer flex items-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4 text-rose-300" />
            <span>Garantir Acesso</span>
          </button>
        </div>
      </div>
    </header>
  );
};
