import React from 'react';
import { ArrowRight, CheckCircle2, HeartHandshake } from 'lucide-react';
import metodoPresencaImg from '../assets/images/metodo_presenca_hero_1791544454525.jpg';

interface HeroSectionProps {
  onOpenCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="relative pt-6 pb-20 sm:pt-10 sm:pb-24 overflow-hidden bg-white">
      {/* Subtle Ambient Soft Glows */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-gradient-to-b from-rose-100/40 via-amber-50/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SEÇÃO 1 — PRÉ-HEADLINE */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50/80 border border-rose-200/60 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-rose-900 uppercase">
              Para mulheres que estão cansadas de adivinhar o que se passa na cabeça dele…
            </p>
          </div>
        </div>

        {/* SEÇÃO 2 — HEADLINE */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 font-display tracking-tight leading-[1.18] text-balance">
            DE INSEGURA A INABALÁVEL
            <br />
            <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700">
              Por Que Mulheres de Alto Valor Não Se Gabam, Não Reclamam e Não Se Explicam — e Ainda Assim Conquistam Tudo
            </span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl font-medium text-rose-800/90 tracking-wide">
            Sem joguinhos. Sem manipulação. Sem abrir mão de quem você é.
          </p>
        </div>

        {/* Hero Visual Mockup + Soft UI Glass Container */}
        <div className="relative max-w-3xl mx-auto mb-10">
          <div className="glass-card-accent rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 shadow-[0_20px_50px_rgba(220,195,205,0.35)]">
            <div className="w-full md:w-1/2 relative group flex justify-center">
              <div className="relative overflow-hidden rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.14)] border border-white max-w-[280px]">
                <img
                  src={metodoPresencaImg}
                  alt="O Método Presença Feminina - Luana Maluleque"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-102"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center">
              {/* SEÇÃO 3 — SUBHEADLINE */}
              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p className="font-normal text-slate-600 border-l-2 border-rose-300 pl-3">
                  Mesmo se você acha que &ldquo;entender homem&rdquo; é impossível, ou que o problema é você…
                </p>
                <p className="font-normal text-slate-600 border-l-2 border-rose-300 pl-3">
                  Mesmo se você está exausta demais para tentar de novo…
                </p>
                <p className="font-semibold text-slate-900 text-lg pt-1">
                  Este guia de bolso foi escrito exatamente para você.
                </p>
              </div>

              {/* SEÇÃO 5 — BOTÃO (CTA Principal) */}
              <div className="mt-8">
                <button
                  onClick={onOpenCheckout}
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold py-4 px-6 rounded-2xl shadow-[0_12px_28px_rgba(225,29,72,0.35)] hover:shadow-[0_16px_36px_rgba(225,29,72,0.45)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 text-center text-sm sm:text-base cursor-pointer"
                >
                  <span className="tracking-wide">
                    👉 QUERO MINHAS 23 PÍLULAS DO PODER AGORA
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <div className="mt-3 flex items-center justify-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Acesso Imediato
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <HeartHandshake className="w-3.5 h-3.5 text-rose-500" /> Garantia de 7 Dias
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
