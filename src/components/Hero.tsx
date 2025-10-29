import { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import RegistrationModal from './RegistrationModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full text-center">
        <CountdownTimer />

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          A BLACK FRIDAY MAIS ESPERADA DO ANO CHEGOU
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-8 leading-relaxed">
          Algo que nunca fizemos antes está chegando...{' '}
          <span className="font-bold text-lime-500">
            O MELHOR CUSTO MENSAL DA HISTÓRIA
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Depois de transformar mais de 70 mil vidas, vamos oferecer a melhor média mensal
          da história para você transformar seu corpo… será surreal!
        </p>

        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
            GARANTA SEU ACESSO EXCLUSIVO
          </h3>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-lime-500 hover:bg-lime-400 text-black font-bold text-lg sm:text-xl md:text-2xl px-8 sm:px-12 py-4 sm:py-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lime-500/50"
          >
            QUERO ACESSO EXCLUSIVO
          </button>
        </div>
      </div>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
