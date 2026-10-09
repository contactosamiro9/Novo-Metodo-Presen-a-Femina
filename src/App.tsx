/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { ValueDemonstrationSection } from './components/ValueDemonstrationSection';
import { EncourageDreamSection } from './components/EncourageDreamSection';
import { AgitationAndValidationSection } from './components/AgitationAndValidationSection';
import { ProductSolutionSection } from './components/ProductSolutionSection';
import { OfferStackSection } from './components/OfferStackSection';
import { DifferentiatorsAndBulletsSection } from './components/DifferentiatorsAndBulletsSection';
import { FaqSection } from './components/FaqSection';
import { YesChainSection } from './components/YesChainSection';
import { GuaranteeAndFinalCtaSection } from './components/GuaranteeAndFinalCtaSection';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-rose-100 selection:text-rose-900">
      {/* Main Landing Page Content Flow */}
      <main>
        {/* SEÇÕES 1, 2, 3, 5 */}
        <HeroSection onOpenCheckout={handleOpenCheckout} />

        {/* SEÇÃO 6 — DEMONSTRAÇÃO DE VALOR */}
        <ValueDemonstrationSection />

        {/* SEÇÃO 7 — ENCORAJAR O SONHO */}
        <EncourageDreamSection />

        {/* SEÇÃO 8 & 9 — JUSTIFIQUE O FRACASSO & ACALME O MEDO */}
        <AgitationAndValidationSection />

        {/* SEÇÃO 10 — MOSTRE A SOLUÇÃO */}
        <ProductSolutionSection />

        {/* SEÇÃO 11 — STACK DA OFERTA (Com Soft UI & Glass Effect) */}
        <OfferStackSection onOpenCheckout={handleOpenCheckout} />

        {/* SEÇÕES 12 & 13 — DIFERENCIAIS & BULLETS DE BENEFÍCIOS */}
        <DifferentiatorsAndBulletsSection />

        {/* SEÇÃO 14 — FAQ (Perguntas Frequentes) */}
        <FaqSection />

        {/* SEÇÕES 15 & 16 — ESCOLHAS, ESCASSEZ & CADEIA DO SIM */}
        <YesChainSection onOpenCheckout={handleOpenCheckout} />

        {/* SEÇÃO 17 — GARANTIA INCONDICIONAL & FECHAMENTO FINAL */}
        <GuaranteeAndFinalCtaSection onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Checkout Modal */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />
    </div>
  );
}
