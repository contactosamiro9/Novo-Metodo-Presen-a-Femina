import React from 'react';
import { Sparkles, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-rose-100/80 py-12 text-slate-500 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/60">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-rose-100/70 flex items-center justify-center text-rose-700">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="text-lg font-bold text-slate-900 font-display">
              Pílulas do Poder
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-slate-600">
            <a href="#beneficios" className="hover:text-rose-700 transition-colors">
              Benefícios
            </a>
            <a href="#o-metodo" className="hover:text-rose-700 transition-colors">
              O Método
            </a>
            <a href="#oferta" className="hover:text-rose-700 transition-colors">
              Stack da Oferta
            </a>
            <a href="#faq" className="hover:text-rose-700 transition-colors">
              Perguntas Frequentes
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Compra 100% Segura & Verificada</span>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Pílulas do Poder. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1">
            Feito para empoderar mulheres a escolherem com clareza, poder e paz.
          </p>
        </div>
      </div>
    </footer>
  );
};
