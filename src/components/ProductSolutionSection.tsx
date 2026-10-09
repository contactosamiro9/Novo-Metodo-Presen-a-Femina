import React from 'react';
import { Brain, Lightbulb, HelpCircle, Target, PenTool } from 'lucide-react';

export const ProductSolutionSection: React.FC = () => {
  const pillFeatures = [
    {
      icon: <Brain className="w-5 h-5 text-indigo-600" />,
      bg: "bg-indigo-50/70 border-indigo-200/60",
      title: "O que está por trás",
      desc: "a psicologia e a neurociência explicadas de forma simples."
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-amber-600" />,
      bg: "bg-amber-50/70 border-amber-200/60",
      title: "Reflexão da autora",
      desc: "como uma conversa íntima entre amigas."
    },
    {
      icon: <HelpCircle className="w-5 h-5 text-rose-600" />,
      bg: "bg-rose-50/70 border-rose-200/60",
      title: "Pergunta para você",
      desc: "autoavaliação poderosa."
    },
    {
      icon: <Target className="w-5 h-5 text-emerald-600" />,
      bg: "bg-emerald-50/70 border-emerald-200/60",
      title: "Micro-ação prática",
      desc: "algo concreto para aplicar HOJE."
    },
    {
      icon: <PenTool className="w-5 h-5 text-purple-600" />,
      bg: "bg-purple-50/70 border-purple-200/60",
      title: "Espaço para anotação",
      desc: "porque a transformação acontece quando você escreve."
    }
  ];

  return (
    <section id="o-metodo" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 font-display tracking-tight mb-4">
            Apresento: PÍLULAS DO PODER
          </h2>

          <p className="text-base sm:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto">
            23 doses de clareza, coragem e empoderamento feminino — extraídas do best-seller &ldquo;A Mente Deles, o Nosso Poder&rdquo; — agora em um guia de bolso autônomo, para você ler em qualquer lugar, a qualquer hora.
          </p>
        </div>

        {/* Structure of each Pill */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-rose-100 shadow-[0_20px_50px_rgba(230,205,215,0.3)]">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Cada pílula contém:
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillFeatures.map((item, idx) => (
              <div
                key={idx}
                className="soft-card p-5 rounded-2xl flex flex-col justify-between transition-all hover:shadow-[0_12px_24px_rgba(220,205,215,0.35)] hover:-translate-y-0.5 border border-slate-100"
              >
                <div>
                  <div className={`w-9 h-9 rounded-xl ${item.bg} border flex items-center justify-center mb-3 shadow-xs`}>
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    — {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
