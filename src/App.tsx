import { Menu, X, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold" style={{ color: '#730D1F' }}>
            Gabriel Souza
          </div>

          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-[#730D1F] transition-colors duration-200"
            >
              Sobre mim
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-gray-700 hover:text-[#730D1F] transition-colors duration-200"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-[#730D1F] transition-colors duration-200"
            >
              Contato
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="flex flex-col gap-4 px-6 py-4">
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-left text-gray-700 hover:text-[#730D1F] transition-colors"
              >
                Sobre mim
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-left text-gray-700 hover:text-[#730D1F] transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-left text-gray-700 hover:text-[#730D1F] transition-colors"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#68A629]/10 to-[#2E5902]/10 mb-8 animate-fade-in">
            <Sparkles size={16} style={{ color: '#68A629' }} />
            <span className="text-sm font-medium" style={{ color: '#2E5902' }}>
              Transforme sua presença digital
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Sites que{' '}
            <span
              className="bg-gradient-to-r from-[#730D1F] to-[#2E5902] bg-clip-text text-transparent"
            >
              convertem
            </span>{' '}
            visitantes em clientes
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Não é só sobre ter um site bonito. É sobre ter uma presença digital que trabalha por você 24/7.
          </p>

          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: '#68A629' }}
          >
            Vamos criar seu site dos sonhos
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <section id="sobre" className="py-20 px-6" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#0A2611' }}>
            Por que me escolher?
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl">
              Enquanto a maioria das empresas ainda enfrenta dificuldades para se destacar online, meus clientes desfrutam de sites que não apenas impressionam visualmente, mas <strong>geram resultados reais</strong>.
            </p>

            <p className="text-xl">
              Com muita experiência em design e desenvolvimento web, minha missão é simples: <strong>transformar sua visão em uma presença digital poderosa</strong> que atrai, engaja e converte.
            </p>

            <p className="text-xl">
              Cada projeto é tratado com atenção aos detalhes, focando no que realmente importa: <strong>fazer seu negócio crescer</strong>. Não criamos apenas sites — criamos ferramentas estratégicas de marketing que trabalham incansavelmente para você.
            </p>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ color: '#0A2611' }}>
            Serviços que Impulsionam Resultados
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Cada serviço foi desenhado para resolver um problema específico do seu negócio
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4" style={{ borderColor: '#730D1F' }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#730D1F20' }}>
                <CheckCircle2 size={28} style={{ color: '#730D1F' }} />
              </div>

              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A2611' }}>
                Sites Profissionais Sob Medida
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                Imagine ter um site que funciona como seu melhor vendedor — disponível 24 horas, sempre persuasivo, nunca cansado.
              </p>

              <p className="text-gray-600 leading-relaxed">
                <strong>O resultado?</strong> Mais credibilidade, mais confiança e, o mais importante, mais clientes batendo à sua porta.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4" style={{ borderColor: '#2E5902' }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#2E590220' }}>
                <CheckCircle2 size={28} style={{ color: '#2E5902' }} />
              </div>

              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A2611' }}>
                Design Responsivo & Mobile-First
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                Mais de 70% dos usuários acessam sites pelo celular. Se seu site não funciona perfeitamente no mobile, você está perdendo dinheiro.
              </p>

              <p className="text-gray-600 leading-relaxed">
                <strong>A solução?</strong> Sites otimizados para qualquer dispositivo, garantindo que cada visitante tenha uma experiência impecável.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4" style={{ borderColor: '#68A629' }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#68A62920' }}>
                <CheckCircle2 size={28} style={{ color: '#68A629' }} />
              </div>

              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A2611' }}>
                SEO & Otimização de Performance
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                De que adianta ter um site lindo se ninguém consegue encontrá-lo? Um site bem otimizado aparece no Google e carrega em segundos.
              </p>

              <p className="text-gray-600 leading-relaxed">
                <strong>O impacto?</strong> Mais visitantes qualificados, melhor experiência do usuário e maiores taxas de conversão.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 px-6" style={{ backgroundColor: '#0A2611' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Pronto para Transformar Seu Negócio Online?
          </h2>

          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Cada dia sem um site profissional é uma oportunidade perdida. Não deixe seus concorrentes saírem na frente. Vamos conversar sobre como posso ajudar você a conquistar mais clientes e crescer seu negócio.
          </p>

          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ backgroundColor: '#68A629' }}
          >
            Fale comigo no WhatsApp agora
            <ArrowRight size={22} />
          </a>

          <p className="mt-8 text-gray-400 text-sm">
            Respondo em até 24 horas. Vamos criar algo incrível juntos!
          </p>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>&copy; 2025 Gabriel Souza. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">Criando experiências digitais memoráveis</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
