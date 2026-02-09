'use client';

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Título */}
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-[#bf953f] to-[#aa771c] px-6 py-2 rounded-full mb-4">
            <span className="text-xs font-bold text-white uppercase tracking-[2px]">Como Funciona</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase font-cinzel leading-tight">
            Seu Atendimento<br />
            <span className="bg-gradient-to-r from-[#bf953f] to-[#aa771c] bg-clip-text text-transparent">
              Rápido e Personalizado
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Em apenas 3 passos simples, você recebe sua cotação personalizada em menos de <strong className="text-[#bf953f]">10 minutos</strong>
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              step: '01',
              icon: '📋',
              title: 'Cadastro',
              desc: 'Preencha o formulário do site ou fale diretamente no WhatsApp',
            },
            {
              step: '02',
              icon: '💬',
              title: 'Perguntas Essenciais',
              desc: 'Respondemos algumas perguntas rápidas sobre suas necessidades',
            },
            {
              step: '03',
              icon: '✅',
              title: 'Cotação Gerada',
              desc: 'Receba sua cotação personalizada em até 10 minutos',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Número */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#bf953f] to-[#aa771c] rounded-full flex items-center justify-center text-3xl font-black text-white opacity-30 font-cinzel">
                {item.step}
              </div>

              {/* Ícone */}
              <div className="relative mb-6 inline-block">
                <div className="w-24 h-24 bg-gradient-to-br from-[#bf953f] to-[#aa771c] rounded-full flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
              </div>

              {/* Título */}
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase font-cinzel">
                {item.title}
              </h3>

              {/* Descrição */}
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>

              {/* Progress Bar */}
              <div className="mt-6 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#bf953f] to-[#aa771c] transition-all duration-1000"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl border border-gray-100 shadow-lg">
          <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase font-cinzel">
            Pronto para Começar?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Inicie agora seu atendimento personalizado e descubra como economizar até <strong className="text-[#bf953f]">50%</strong> no seu plano de saúde
          </p>
          <a
            href="#formulario"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-white px-12 py-5 rounded-full text-sm uppercase tracking-widest font-black shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            Solicitar Cotação
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
