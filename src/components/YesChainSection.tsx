import React, { useState } from 'react';
import { AlertTriangle, Check, ArrowRight, Sparkles } from 'lucide-react';

interface YesChainSectionProps {
  onOpenCheckout: () => void;
}

export const YesChainSection: React.FC<YesChainSectionProps> = ({ onOpenCheckout }) => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({
    0: true,
    1: true,
  });

  const toggleCheck = (index: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const yesChainQuestions = [
    "Se você quer parar de adivinhar o que ele pensa…",
    "Se você quer entender a mente masculina sem se anular…",
    "Se você quer construir limites inegociáveis e se tornar inegociável…",
    "Se você quer ter clareza para escolher, comunicar e — se necessário — ir embora…",
    "Se você quer paz de estar consigo mesma, com ou sem ele…",
  ];

  const totalChecked = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((totalChecked / yesChainQuestions.length) * 100);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-rose-50/20 to-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SEÇÃO 15 — CTA (Chamada para Ação) */}
        <div className="soft-card-elevated rounded-3xl p-8 sm:p-12 mb-16 border border-rose-100 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display mb-8">
              Você tem duas escolhas agora:
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left mb-8">
              {/* Opção 1 */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Caminho do Desgaste
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-3">
                    Opção 1:
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Fechar esta página e continuar onde você está. Adivinhando. Esperando. Aceitando migalhas. Se anulando. Com medo da solidão.
                  </p>
                </div>
              </div>

              {/* Opção 2 */}
              <div className="p-6 rounded-2xl bg-rose-50/80 border-2 border-rose-300 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Caminho do Poder</span>
                  </div>
                  <h3 className="font-bold text-rose-950 text-lg mb-3">
                    Opção 2:
                  </h3>
                  <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                    Investir 584 MZN (Desconto de 50%) — o preço de uma pizza — e começar hoje sua jornada de volta para si mesma. Com clareza. Com poder. Com paz.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA 15 */}
            <div className="pt-2">
              <button
                onClick={onOpenCheckout}
                className="w-full sm:w-auto px-8 py-4.5 bg-rose-600 hover:bg-rose-700 text-white font-extrabold rounded-2xl shadow-[0_12px_28px_rgba(225,29,72,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base sm:text-lg flex items-center justify-center gap-2 mx-auto cursor-pointer"
              >
                <span>👉 [QUERO MINHAS 23 PÍLULAS DO PODER AGORA]</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

        {/* SEÇÃO 16 — ESCASSEZ + CADEIA DO SIM */}
        <div className="glass-panel-highlight rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 border border-rose-200 relative">
          
          {/* Alerta de Escassez */}
          <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-300 text-amber-950 mb-8 flex items-start gap-3.5">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm sm:text-base">
                ⚠️ ATENÇÃO: Esta condição especial pode sair do ar a qualquer momento.
              </p>
              <p className="text-xs sm:text-sm text-amber-900/90 mt-0.5">
                Este é um lançamento promocional. O valor de 584 MZN
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            
            <div className="text-center mb-8">
              <p className="text-xs sm:text-sm text-slate-500">
                (Marque cada afirmação para alinhar sua decisão)
              </p>

              {/* Progress Bar */}
              <div className="mt-4 max-w-xs mx-auto">
                <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1">
                  <span>Alinhamento pessoal</span>
                  <span>{progressPercent}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-rose-500 to-emerald-500 transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Real-time Clickable Checkboxes */}
            <div className="space-y-3.5 mb-10">
              {yesChainQuestions.map((question, idx) => {
                const isChecked = !!checkedItems[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleCheck(idx)}
                    role="checkbox"
                    aria-checked={isChecked}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === ' ' || e.key === 'Enter') {
                        e.preventDefault();
                        toggleCheck(idx);
                      }
                    }}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 select-none ${
                      isChecked
                        ? 'bg-white soft-card border-rose-300 shadow-sm'
                        : 'bg-white/60 border-slate-200 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 border transition-all ${
                          isChecked
                            ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                            : 'border-slate-300 bg-white text-transparent'
                        }`}
                      >
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <span className={`text-sm sm:text-base ${isChecked ? 'font-semibold text-slate-900' : 'text-slate-700'}`}>
                        {question}
                      </span>
                    </div>

                    <span
                      className={`text-xs sm:text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
                        isChecked
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      → Sim.
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Concluding CTA Button */}
            <div className="text-center pt-2">
              <p className="text-slate-700 font-semibold text-base mb-4">
                Então clique no botão abaixo e garanta seu acesso agora:
              </p>

              <button
                onClick={onOpenCheckout}
                className="w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-extrabold rounded-2xl shadow-[0_16px_36px_rgba(225,29,72,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base sm:text-lg flex items-center justify-center gap-2.5 mx-auto cursor-pointer"
              >
                <span>SIM! EU QUERO TUDO ISSO POR APENAS 584</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-xs text-slate-500 mt-2.5">
                (Condição promocional equivalente a 584 MZN com acesso vitalício)
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
