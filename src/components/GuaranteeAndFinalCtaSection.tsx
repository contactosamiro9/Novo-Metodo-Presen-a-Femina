import React from 'react';
import { ShieldCheck, ArrowRight, Sparkles, Heart } from 'lucide-react';

interface GuaranteeAndFinalCtaSectionProps {
  onOpenCheckout: () => void;
}

export const GuaranteeAndFinalCtaSection: React.FC<GuaranteeAndFinalCtaSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Guarantee Box: Soft UI & Glass Design */}
        <div className="glass-panel-highlight rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-14 border border-rose-200 text-center relative overflow-hidden shadow-[0_25px_60px_rgba(230,195,210,0.35)]">
          
          <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-3xl bg-white border border-rose-200 shadow-md flex items-center justify-center mx-auto mb-6 text-rose-600">
            <ShieldCheck className="w-10 h-10 stroke-[2.2]" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-display mb-5 flex items-center justify-center gap-2">
            <span>🛡️</span>
            <span>GARANTIA INCONDICIONAL DE 7 DIAS</span>
          </h2>

          <div className="max-w-2xl mx-auto space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p>
              Leia as Pílulas do Poder. Aplique os scripts. Faça os exercícios. Se, em até 7 dias, você sentir que não valeu cada centavo, devolvemos 100% do seu dinheiro. Sem perguntas. Sem burocracia. Sem ressentimento.
            </p>

            <p className="font-bold text-slate-900 text-lg sm:text-xl pt-2">
              O risco é zero. A transformação é garantida.
            </p>
          </div>

          <div className="my-8 w-24 h-px bg-rose-200 mx-auto" />

          {/* Última Pergunta */}
          <div className="max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600">
              Última pergunta:
            </span>
            <h3 className="text-xl sm:text-3xl font-bold text-slate-900 font-display mt-2 mb-8 leading-snug">
              Você está pronta para parar de adivinhar e começar a escolher?
            </h3>

            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-rose-600 via-rose-700 to-rose-800 hover:from-rose-700 hover:to-rose-900 text-white font-extrabold rounded-2xl shadow-[0_16px_36px_rgba(225,29,72,0.42)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base sm:text-xl flex items-center justify-center gap-3 mx-auto cursor-pointer"
            >
              <span>👉 [SIM! QUERO MINHAS PÍLULAS DO PODER AGORA]</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>Sua jornada para uma vida com mais respeito, clareza e paz começa agora.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
