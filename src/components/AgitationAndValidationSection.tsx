import React, { useState } from 'react';
import { HelpCircle, Check, X, ShieldAlert, Sparkles } from 'lucide-react';

export const AgitationAndValidationSection: React.FC = () => {
  const [identifiedItems, setIdentifiedItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setIdentifiedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const selfQuestions = [
    "Relendo mensagens procurando um significado escondido?",
    "Justificando o comportamento dele para suas amigas?",
    "Aceitando migalhas e chamando de banquete?",
    "Sentindo que, se você fosse \"mais isso\" ou \"menos aquilo\", ele te amaria mais?",
    "Com medo de terminar — não por amor, mas por medo da solidão?"
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SEÇÃO 8 — JUSTIFIQUE O FRACASSO */}
        <div className="soft-card rounded-3xl p-8 sm:p-12 mb-14 border border-slate-100">
          <div className="max-w-3xl mx-auto">
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display leading-tight mb-4">
              Se você já se sentiu presa nesse ciclo, eu preciso te dizer uma coisa:
            </h2>
            
            <div className="inline-block px-5 py-2 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 font-bold text-xl sm:text-2xl mb-6 shadow-sm">
              Não é sua culpa.
            </div>

            <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                Você foi condicionada, desde menina, a acreditar que amor é um jogo de adivinhação. Que você precisa ser &ldquo;boa o suficiente&rdquo; para merecer. Que se você der mais, ele vai perceber. Que se você esperar, ele vai mudar.
              </p>

              <div className="py-2">
                <span className="text-2xl font-bold text-rose-600 tracking-wider font-display">
                  Mentira.
                </span>
              </div>

              <p className="p-4 rounded-xl bg-slate-50 border-l-4 border-rose-500 font-medium text-slate-800">
                E o pior: enquanto você tentava adivinhar o que ele pensava, você abandonou a única pessoa que realmente importava — você mesma.
              </p>
            </div>

            {/* Interactive Reflection Checklist */}
            <div className="mt-10 pt-8 border-t border-slate-100">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-rose-600" />
                <span>Você já se pegou:</span>
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                (Clique nas opções para refletir sobre a sua experiência)
              </p>

              <div className="space-y-3">
                {selfQuestions.map((q, idx) => {
                  const isChecked = !!identifiedItems[idx];
                  return (
                    <button
                      key={idx}
                      onClick={() => toggleItem(idx)}
                      type="button"
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${
                        isChecked
                          ? 'bg-rose-50/90 border-rose-300 shadow-sm'
                          : 'bg-white border-slate-200/90 hover:border-rose-200 hover:bg-slate-50/60'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border transition-colors ${
                          isChecked
                            ? 'bg-rose-600 border-rose-600 text-white'
                            : 'border-slate-300 bg-white text-transparent'
                        }`}
                      >
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <span className={`text-sm sm:text-base ${isChecked ? 'font-semibold text-slate-900' : 'text-slate-700'}`}>
                        {q}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 p-5 rounded-2xl bg-rose-100/60 border border-rose-200/80 space-y-2">
                <p className="text-slate-900 font-bold text-base sm:text-lg">
                  Se você respondeu &ldquo;sim&rdquo; a qualquer uma dessas perguntas, você não está louca. Você está faminta de clareza.
                </p>
                <p className="text-rose-900 font-semibold text-sm sm:text-base">
                  E é exatamente isso que as Pílulas do Poder vão te dar.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* SEÇÃO 9 — ACALME O MEDO */}
        <div className="glass-card-accent rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sem Joguinhos ou Frieza</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-6">
              Mas aqui está a boa notícia:
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs">
                <span className="w-7 h-7 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <X className="w-4 h-4 stroke-[2.5]" />
                </span>
                <span className="text-slate-700 text-sm font-medium">Você não precisa se tornar uma estrategista fria.</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs">
                <span className="w-7 h-7 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <X className="w-4 h-4 stroke-[2.5]" />
                </span>
                <span className="text-slate-700 text-sm font-medium">Você não precisa aprender &ldquo;joguinhos&rdquo;.</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs">
                <span className="w-7 h-7 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <X className="w-4 h-4 stroke-[2.5]" />
                </span>
                <span className="text-slate-700 text-sm font-medium">Você não precisa manipular ninguém.</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs">
                <span className="w-7 h-7 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <X className="w-4 h-4 stroke-[2.5]" />
                </span>
                <span className="text-slate-700 text-sm font-medium">Você não precisa abrir mão da sua essência.</span>
              </div>
            </div>

            <div className="space-y-4 text-slate-800 text-base sm:text-lg leading-relaxed bg-white/80 p-6 rounded-2xl border border-rose-100">
              <p>
                Você só precisa entender. Entender a mente masculina. Entender a sua. E, a partir dessa compreensão, escolher com poder.
              </p>
              <p className="font-semibold text-rose-950 pt-2 border-t border-rose-100/80">
                É isso que as Pílulas do Poder fazem. Em doses pequenas, diárias, transformadoras.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
