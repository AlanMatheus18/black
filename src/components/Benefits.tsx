import { Check } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    'A melhor oferta da história',
    'Prêmios exclusivos para os primeiros',
    'Sorteios inacreditáveis',
    'Acesso estendido',
    'E Claro… O melhor método de treinamento do Mundo'
  ];

  return (
    <section className="bg-zinc-900 py-16 sm:py-20 lg:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12">
          SAIBA O QUE VAI ROLAR
        </h2>

        <ul className="space-y-4 sm:space-y-6 mb-12">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex items-start gap-4 text-white text-lg sm:text-xl md:text-2xl"
            >
              <div className="flex-shrink-0 bg-lime-500 rounded-full p-1.5 sm:p-2 mt-1">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              </div>
              <span className="leading-relaxed">{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="bg-lime-500 text-black text-center py-6 px-4 rounded-lg shadow-xl">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold">
            SuperLive de Black Friday dia 9 de novembro às 20h
          </p>
        </div>
      </div>
    </section>
  );
}
