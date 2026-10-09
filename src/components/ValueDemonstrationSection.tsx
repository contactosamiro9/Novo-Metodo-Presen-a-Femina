import React from 'react';
import { Compass, Shield, Sparkles } from 'lucide-react';

export const ValueDemonstrationSection: React.FC = () => {
  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-display">
            O que você vai conquistar com as Pílulas do Poder:
          </h2>
          <div className="w-16 h-1 bg-rose-300 mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Benefícios Cards with Soft UI & Glass Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1 */}
          <div className="soft-card rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_40px_rgba(225,200,215,0.4)] hover:-translate-y-1 relative group">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200/70 flex items-center justify-center text-rose-600 mb-6 shadow-sm group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                BENEFÍCIO #1 — CLAREZA ABSOLUTA
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Você vai parar de adivinhar. Vai entender como a mente masculina funciona (caixas vs. teias), por que ele se afasta, por que ele se cala, e como interpretar ações sem se perder em suposições.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-rose-700">
              <span>Sem suposições · Compreensão real</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="soft-card-elevated rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_25px_45px_rgba(225,190,210,0.45)] hover:-translate-y-1 relative group border-rose-100">
            <div className="w-12 h-12 rounded-2xl bg-rose-100/70 border border-rose-300/80 flex items-center justify-center text-rose-700 mb-6 shadow-sm group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                BENEFÍCIO #2 — PODER PESSOAL INEGOCIÁVEL
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Você vai construir uma Constituição Pessoal — limites inegociáveis que te protegem de migalhas, de relações unilaterais e de se anular por alguém. Você vai se tornar inegociável.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-rose-700">
              <span>Constituição Pessoal · Limites firmes</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="soft-card rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_40px_rgba(225,200,215,0.4)] hover:-translate-y-1 relative group">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/70 flex items-center justify-center text-amber-700 mb-6 shadow-sm group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                BENEFÍCIO #3 — PAZ DE ESTAR CONSIGO MESMA
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Você vai parar de medir seu valor pelo desejo, atenção ou escolha de um homem. Você vai se tornar inteira — com ou sem ele. E, paradoxalmente, isso vai te tornar magnética.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-rose-700">
              <span>Autoestima inabalável · Magnetismo</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
