import React from 'react';
import { CheckCircle2, Star, Sparkles, BookOpenCheck, ShieldAlert } from 'lucide-react';

export const DifferentiatorsAndBulletsSection: React.FC = () => {
  const differentiators = [
    {
      bad: "Não é um livro de \"joguinhos\".",
      good: "É psicologia clínica aplicada."
    },
    {
      bad: "Não é um guia de manipulação.",
      good: "É empoderamento feminino real."
    },
    {
      bad: "Não é teoria vazia.",
      good: "É prática diária, com micro-ações."
    },
    {
      bad: "Não é mais um ebook de 300 páginas que você nunca vai ler.",
      good: "São 23 pílulas curtas, diretas, transformadoras."
    },
    {
      bad: "Não é sobre ele.",
      good: "É sobre você."
    }
  ];

  const bullets = [
    "A diferença entre Caixas e Teias — e por que ele esqueceu seu aniversário, mas lembrou do jogo (não é o que você pensa).",
    "Por que ele quer resolver quando você só quer ser ouvida — e o script exato para pedir conexão sem ativar o modo \"consertador\".",
    "A ferida invisível que todo homem carrega — e como falar o que incomoda sem detonar a autoestima dele.",
    "Por que o desejo masculino não é sobre você — e por que isso é libertador.",
    "O que é a \"Fome de Migalhas\" — e o checklist de 10 sinais de que você está presa nela.",
    "A diferença entre Expectativa (frustração) e Limite (respeito) — e como transformar uma em outra.",
    "Como criar sua Constituição Pessoal — seus limites inegociáveis, escritos e assinados.",
    "O modelo C.A.L.M.A. de comunicação assertiva — Contexto, Afeto, Limite, Mudança, Ação.",
    "Quando ir embora — o maior ato de empoderamento — e como fazer isso com dignidade e paz.",
    "E muito, muito mais…"
  ];

  return (
    <section id="conteudo" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SEÇÃO 12 — DEMONSTRAR VALOR */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display mb-4">
            Por que isso é diferente de tudo que você já viu?
          </h2>
          <div className="w-16 h-1 bg-rose-300 mx-auto rounded-full" />
        </div>

        {/* 5 Distinct Differentiator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {differentiators.map((diff, idx) => (
            <div
              key={idx}
              className={`soft-card p-6 rounded-3xl flex flex-col justify-between transition-all hover:shadow-[0_16px_32px_rgba(220,205,215,0.35)] hover:-translate-y-0.5 border ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1 bg-rose-50/40 border-rose-200/80' : 'border-slate-100'
              }`}
            >
              <div>
                <span className="text-xs text-slate-400 font-medium line-through block mb-1">
                  {diff.bad}
                </span>
                <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {diff.good}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100/80 flex items-center gap-1.5 text-xs text-rose-700 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Padrão Pílulas do Poder</span>
              </div>
            </div>
          ))}
        </div>

        {/* SEÇÃO 13 — BULLETS DE BENEFÍCIOS */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-rose-100 shadow-[0_20px_50px_rgba(230,205,215,0.3)]">
          <div className="max-w-3xl mx-auto">
            
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider mb-2">
                <BookOpenCheck className="w-4 h-4 text-rose-600" />
                <span>Conteúdo Exclusivo Revelado</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Dentro das Pílulas do Poder, você vai descobrir:
              </h3>
            </div>

            <div className="space-y-4">
              {bullets.map((bullet, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-rose-100/80 hover:border-rose-200 transition-all flex items-start gap-3.5 hover:shadow-xs"
                >
                  <span className="text-emerald-600 text-lg sm:text-xl font-bold shrink-0 leading-none mt-0.5">
                    ✅
                  </span>
                  <p className="text-slate-800 text-sm sm:text-base font-medium leading-relaxed">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
