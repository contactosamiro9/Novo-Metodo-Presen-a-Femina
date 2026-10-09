import React, { useState, useEffect } from 'react';
import { ShieldCheck, Sparkles, Clock, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';
import bundleImg from '../assets/images/bundle_completo_stack_1791544466886.jpg';

interface OfferStackSectionProps {
  onOpenCheckout: () => void;
}

export const OfferStackSection: React.FC<OfferStackSectionProps> = ({ onOpenCheckout }) => {
  // 15-minute countdown timer
  const [timeLeft, setTimeLeft] = useState<{ minutes: number; seconds: number }>({
    minutes: 14,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 14, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const offerItems = [
    {
      title: "📘 Metodo Presença Feminina - Segredos Para Ser Uma DAMA de Alto Valor",
      value: "373 MZN",
      desc: "Princípios de postura, magnetismo e elegância emocional que impõem respeito instantâneo."
    },
    {
      title: "🎯 Entenda a Psicologia Masculina - Um gui para Entender e Conquistar um Espaço na Mente Dele",
      value: "470 MZN",
      desc: "O mapa neural da mente dos homens decodificado: entenda o silêncio, a retirada e o compromisso."
    },
    {
      title: "💬 As Pilulas do Poder - 17 COISAS QUE TODA MULHER DEVE SABER E INTERNALIZAR SOBRE OS HOMENS",
      value: "229 MZN",
      desc: "Os 17 axiomas inegociáveis para nunca mais cair em ilusões ou falsas promessas."
    },
    {
      title: "📋 Checklists completo com tarefas de desempenha Metodo Presença Feminina",
      value: "97 MZN",
      desc: "Planilhas e listas práticas para acompanhar sua evolução diária com firmeza e leveza."
    }
  ];

  return (
    <section id="oferta" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-rose-100/40 via-amber-100/30 to-rose-50/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-rose-600" />
            <span>Condição Especial de Lançamento</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-display">
            Veja tudo o que você recebe ao garantir seu acesso hoje:
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Real-time Limited Offer Alert (Soft UI pill bar) */}
        <div className="max-w-md mx-auto mb-10 p-3 rounded-2xl bg-white border border-rose-200 shadow-sm flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-rose-700 font-semibold">
            <Clock className="w-4 h-4 animate-spin text-rose-600" style={{ animationDuration: '6s' }} />
            <span>Oferta Promocional Expira em:</span>
          </div>
          <div className="font-mono font-bold text-slate-900 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200/70 tabular-nums">
            {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </div>
        </div>

        {/* MASTER STACK CONTAINER: High-Impact Glass Effect + Soft UI */}
        <div className="glass-panel-highlight rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 relative shadow-[0_30px_70px_rgba(230,195,210,0.38)]">
          
          {/* Bundle Showcase Top Banner */}
          <div className="mb-10 rounded-2xl overflow-hidden border border-white/80 shadow-[0_12px_30px_rgba(0,0,0,0.06)] bg-white flex justify-center">
            <img
              src={bundleImg}
              alt="Stack de Ofertas Completo Metodo e Pílulas do Poder"
              referrerPolicy="no-referrer"
              className="w-full max-h-[420px] object-contain object-center"
            />
          </div>

          {/* Table / Breakdown of Items */}
          <div className="mb-10">
            <div className="hidden sm:grid grid-cols-12 text-xs font-bold text-slate-400 uppercase tracking-wider pb-3 border-b border-rose-100 px-3">
              <span className="col-span-9">O que você recebe</span>
              <span className="col-span-3 text-right">Valor</span>
            </div>

            <div className="divide-y divide-rose-100/70">
              {offerItems.map((item, index) => (
                <div
                  key={index}
                  className="py-5 px-3 rounded-2xl transition-all hover:bg-white/60 flex flex-col sm:grid sm:grid-cols-12 items-start sm:items-center gap-2"
                >
                  <div className="sm:col-span-9 pr-2">
                    <p className="font-bold text-slate-900 text-base sm:text-lg">
                      {item.title}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                  <div className="sm:col-span-3 sm:text-right w-full sm:w-auto flex justify-between sm:justify-end items-center mt-2 sm:mt-0">
                    <span className="sm:hidden text-xs text-slate-400 font-medium">Valor individual:</span>
                    <span className="font-mono font-bold text-slate-700 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/60 text-sm sm:text-base tabular-nums">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Price Calculation Card (Soft UI inset & elevated contrast) */}
          <div className="soft-card-elevated rounded-3xl p-6 sm:p-10 border border-rose-200/90 text-center relative overflow-hidden bg-white">
            
            {/* Corner Ribbon */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-rose-600 text-white font-bold text-xs uppercase tracking-widest shadow-sm mb-4">
              Desconto de 50% Aplicado
            </div>

            {/* Total Strikethrough & Anchor */}
            <div className="space-y-1 mb-5">
              <div className="flex items-center justify-center gap-2 text-slate-500 text-sm sm:text-base">
                <span>VALOR TOTAL:</span>
                <span className="font-mono font-semibold line-through text-slate-400">1169 MZN</span>
              </div>
              <p className="text-rose-700/90 font-medium text-sm sm:text-base">
                Hoje, você não paga <span className="line-through font-semibold">997 MZN</span>
              </p>
            </div>

            {/* Big H1 Price as instructed in copy */}
            <div className="py-2">
              <p className="text-slate-700 font-semibold text-lg sm:text-xl">
                Hoje, você leva tudo isso por apenas:
              </p>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight font-display my-2">
                584 MZN
              </h1>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>(Desconto de 50%)</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 max-w-xl mx-auto">
              <button
                onClick={onOpenCheckout}
                className="w-full group relative overflow-hidden bg-gradient-to-r from-rose-600 via-rose-700 to-rose-800 hover:from-rose-700 hover:to-rose-900 text-white font-extrabold py-5 px-8 rounded-2xl shadow-[0_15px_35px_rgba(225,29,72,0.38)] hover:shadow-[0_20px_45px_rgba(225,29,72,0.5)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-base sm:text-lg flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>👉 QUERO MINHAS 23 PÍLULAS DO PODER AGORA</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-slate-400" /> Pagamento 100% Seguro
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Acesso Imediato no E-mail
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Garantia Incondicional 7 Dias
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
