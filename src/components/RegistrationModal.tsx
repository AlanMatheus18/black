import { useState, FormEvent } from 'react';
import { X } from 'lucide-react';
// A importação do 'supabase' foi removida daqui

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  /**
   * Função de envio modificada.
   * Ela não se conecta mais ao Supabase. Apenas simula
   * um tempo de carregamento e redireciona o usuário.
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // 1. Apenas mostramos os dados no console para fins de teste
    console.log('Dados do formulário (simulado):', { name, email, phone });

    // 2. Simulamos um atraso de rede (1.5 segundos) 
    //    para que o botão "Cadastrando..." apareça.
    await new Promise(resolve => setTimeout(resolve, 1500));

    // 3. Redirecionamos para a página de sucesso
    window.location.href = 'https://chat.whatsapp.com/seu-grupo-aqui';

    // Não é necessário chamar setIsSubmitting(false), 
    // pois a página será redirecionada.
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-zinc-900 rounded-lg w-full max-w-md p-6 sm:p-8 relative border border-zinc-800 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Garanta Seu Acesso!
        </h2>
        <p className="text-gray-400 mb-6">
          Preencha seus dados para ter acesso exclusivo
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-lime-500 transition-colors"
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-lime-500 transition-colors"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
              Celular (WhatsApp)
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-lime-500 transition-colors"
              placeholder="(00) 00000-0000"
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3">
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-lime-500 hover:bg-lime-400 text-black font-bold text-lg py-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? 'Cadastrando...' : 'GARANTIR ACESSO EXCLUSIVO'}
          </button>
        </form>

        <p className="text-gray-500 text-xs text-center mt-4">
          Seus dados estão seguros e serão usados apenas para comunicação sobre a Black Friday
        </p>
      </div>
    </div>
  );
}