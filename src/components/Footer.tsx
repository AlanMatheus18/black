export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-white text-base sm:text-lg md:text-xl mb-4 font-semibold">
          Método 3xMais • Black Friday 10 de Novembro 2025
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
          <a
            href="#"
            className="text-gray-400 hover:text-lime-500 transition-colors duration-300 text-sm sm:text-base"
          >
            Termos de Uso
          </a>
          <span className="text-gray-600">•</span>
          <a
            href="#"
            className="text-gray-400 hover:text-lime-500 transition-colors duration-300 text-sm sm:text-base"
          >
            Política de Privacidade
          </a>
        </div>

        <p className="text-gray-500 text-xs sm:text-sm">
          Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
