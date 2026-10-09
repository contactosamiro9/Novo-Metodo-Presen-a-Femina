import React, { useState } from 'react';
import { X, Lock, CheckCircle2, ShieldCheck, Sparkles, CreditCard, Smartphone, Check } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card' | 'pix'>('mpesa');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.2)] border border-rose-100 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors z-10 cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 sm:p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 font-display mb-2">
              Acesso Confirmado com Sucesso!
            </h3>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Enviamos os dados de acesso imediatos para <strong className="text-slate-900">{email || 'seu e-mail'}</strong>. Suas 23 Pílulas do Poder já estão disponíveis para download imediato.
            </p>

            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-left mb-6 space-y-2 text-xs sm:text-sm text-slate-700">
              <p className="font-bold text-rose-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-rose-600" />
                <span>Itens liberados na sua área de membros:</span>
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                <li>Metodo Presença Feminina - DAMA de Alto Valor</li>
                <li>Entenda a Psicologia Masculina</li>
                <li>As Pílulas do Poder (17 Coisas que toda mulher deve saber)</li>
                <li>Checklists completos e tarefas práticas</li>
              </ul>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all cursor-pointer"
            >
              Concluir e Começar Agora
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="p-6 bg-gradient-to-b from-rose-50/70 to-white border-b border-rose-100">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-700 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Checkout 100% Blindado & Seguro</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                Garantir Minhas 23 Pílulas do Poder
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Acesso imediato ao pacote completo com 50% de desconto promocional.
              </p>
            </div>

            {/* Offer Summary Ribbon */}
            <div className="px-6 py-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs sm:text-sm">
              <span className="font-medium text-slate-600">Total a pagar hoje:</span>
              <div className="text-right">
                <span className="line-through text-slate-400 text-xs mr-2">1169 MZN</span>
                <span className="font-extrabold text-rose-600 text-lg">584 MZN</span>
                <span className="text-[11px] text-slate-400 ml-1">/ ou R$ 27</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Sofia Fernandes"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 text-sm text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Seu Melhor E-mail (Onde receberá o material)
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ex: sofia@email.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 text-sm text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ex: +258 84 123 4567 / (11) 99999-9999"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 text-sm text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Forma de Pagamento
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('mpesa')}
                    className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      paymentMethod === 'mpesa'
                        ? 'bg-rose-50 border-rose-500 text-rose-900 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-600'
                    }`}
                  >
                    <Smartphone className="w-4 h-4 text-rose-600" />
                    <span>M-Pesa / E-Mola</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'bg-rose-50 border-rose-500 text-rose-900 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-600'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-rose-600" />
                    <span>Cartão de Crédito</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'bg-rose-50 border-rose-500 text-rose-900 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-600'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-rose-600" />
                    <span>Pix / Multicaixa</span>
                  </button>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold rounded-2xl shadow-[0_12px_28px_rgba(225,29,72,0.35)] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Confirmar Acesso por Apenas 584 MZN</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2 text-[11px] text-slate-400">
                <span>Criptografia 256 bits</span>
                <span>·</span>
                <span>Garantia de 7 Dias</span>
                <span>·</span>
                <span>Download Imediato</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
