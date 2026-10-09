import React from 'react';
import { Sun, Heart, CheckCircle2 } from 'lucide-react';
import womanPortraitImg from '../assets/images/portrait_woman_peace_1791498179410.jpg';

export const EncourageDreamSection: React.FC = () => {
  const dreamPoints = [
    "…não sentir aquele aperto no peito quando ele demora para responder.",
    "…não precisar de validação dele para se sentir bonita, desejada ou suficiente.",
    "…conseguir dizer \"não\" sem culpa, e \"sim\" sem medo.",
    "…olhar para um relacionamento e saber, com clareza, se ele te faz bem ou mal.",
    "…ter a coragem de ir embora — ou de ficar — sem se trair.",
    "…sentir, pela primeira vez em anos, que você é a prioridade da sua vida.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-rose-50/25 to-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-rose-100 shadow-[0_20px_50px_rgba(230,205,215,0.3)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Visual Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_36px_rgba(0,0,0,0.12)] border-2 border-white">
                <img
                  src={womanPortraitImg}
                  alt="Mulher serena e com clareza emocional"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-200">
                    <Sun className="w-3.5 h-3.5" />
                    <span>Paz interior & Presença</span>
                  </div>
                  <p className="text-sm font-medium mt-0.5">Sua versão inteira, leve e magnética</p>
                </div>
              </div>
            </div>

            {/* Right Column: Copy Points */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-rose-600 text-xs font-bold uppercase tracking-wider mb-3">
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                <span>Uma Nova Realidade</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-display mb-8">
                Imagine acordar amanhã e…
              </h2>

              <div className="space-y-4">
                {dreamPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/80 hover:bg-white border border-rose-100/60 transition-all hover:shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-base font-normal leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Concluding Statement */}
              <div className="mt-8 p-5 rounded-2xl bg-rose-50/70 border border-rose-200/60">
                <p className="text-slate-900 font-semibold text-base sm:text-lg">
                  Isso não é utopia. É o que acontece quando você para de adivinhar e começa a entender.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
