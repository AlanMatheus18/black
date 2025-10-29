import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Quando vai ser a Black Friday?',
      answer: 'Dia 10 de novembro! E quem está cadastrada vai ter acesso exclusivo.'
    },
    {
      question: 'Quando vocês vão revelar o que é?',
      answer: 'Muito em breve! Quem está cadastrada vai ser a primeira a saber. Vale a pena a espera, prometo.'
    },
    {
      question: 'É só desconto ou tem algo mais?',
      answer: 'Muito mais! Desconto é uma palavra pequena para o que preparamos. É sobre acesso total a um universo de transformação.'
    },
    {
      question: 'Preciso pagar algo para me cadastrar?',
      answer: 'Não! O cadastro é 100% gratuito e sem compromisso. É apenas para garantir seu acesso prioritário no dia 10 de novembro.'
    },
    {
      question: 'E se eu não conseguir participar no dia 10?',
      answer: 'Por isso estamos avisando com antecedência. Queremos que TODAS tenham a chance de se organizar para participar desta oportunidade única no dia 10 de novembro.'
    },
    {
      question: 'Vai ser só online?',
      answer: 'Todos os detalhes serão revelados para quem está cadastrada. Mas posso garantir: vai ser acessível para todas.'
    },
    {
      question: 'Qual horário vai começar no dia 10?',
      answer: 'Os detalhes de horário serão enviados por e-mail para todas as cadastradas. Fique tranquila, você não vai perder!'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-zinc-900 py-16 sm:py-20 lg:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12">
          PERGUNTAS QUE NÃO SAEM DA NOSSA DM
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black rounded-lg overflow-hidden border border-zinc-800 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-zinc-800 transition-colors duration-300"
              >
                <span className="text-white text-base sm:text-lg md:text-xl font-semibold pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 bg-lime-500 rounded-full p-1">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-black" />
                  ) : (
                    <Plus className="w-5 h-5 text-black" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-4 sm:p-6 pt-0">
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
