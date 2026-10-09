import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "1. \"Isso é um livro de manipulação?\"",
      answer: "Não. É o oposto. É um guia de empoderamento feminino. Você vai entender a mente masculina para escolher melhor — não para manipular ninguém."
    },
    {
      question: "2. \"Preciso ter lido o ebook principal?\"",
      answer: "Não. As Pílulas do Poder são 100% autônomas. Você pode ler e aplicar sem nunca ter lido o ebook original."
    },
    {
      question: "3. \"Quanto tempo leva para ler?\"",
      answer: "Cada pílula leva de 5 a 10 minutos. Você pode ler uma por dia, ou todas de uma vez. O guia foi feito para caber na sua rotina."
    },
    {
      question: "4. \"Funciona para mulheres solteiras?\"",
      answer: "Sim. As pílulas te preparam para escolher melhor no próximo relacionamento — ou para ficar bem consigo mesma."
    },
    {
      question: "5. \"Funciona para quem está casada há anos?\"",
      answer: "Sim. Muitas pílulas tratam de dinâmica de casal, divisão de tarefas, comunicação e intimidade."
    },
    {
      question: "6. \"É um livro religioso?\"",
      answer: "Não. É psicologia clínica e neurociência aplicadas, com linguagem acessível."
    },
    {
      question: "7. \"E se eu não gostar?\"",
      answer: "Você tem 7 dias de garantia incondicional. Se não fizer sentido para você, devolvemos 100% do seu investimento. Sem perguntas."
    },
    {
      question: "8. \"Como recebo o material?\"",
      answer: "Acesso imediato. Após a compra, você recebe o link para download no seu e-mail."
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display">
            FAQ (Perguntas Frequentes)
          </h2>
          <div className="w-16 h-1 bg-rose-300 mx-auto mt-4 rounded-full" />
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all border ${
                  isOpen
                    ? 'bg-white soft-card border-rose-200 shadow-[0_8px_20px_rgba(220,205,215,0.25)]'
                    : 'bg-white/80 border-slate-200/90 hover:border-rose-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-rose-100 text-rose-700 rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-slate-600 leading-relaxed text-sm sm:text-base border-t border-rose-50 mt-1">
                    <p className="pt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
