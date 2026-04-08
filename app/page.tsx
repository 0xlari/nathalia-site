export default function Home() {
  return (
    <main className="bg-[#f5f7fb] text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(29,78,216,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_28%),linear-gradient(to_bottom,#f8fbff,#eef4ff)]">
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:56px_56px]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-slate-300 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-600 backdrop-blur">
              Tradução simultânea e relatoria
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
              Tradução simultânea e relatoria para eventos, reuniões e treinamentos
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Serviço profissional de tradução simultânea e relatoria para empresas,
              eventos corporativos, reuniões e treinamentos no Rio de Janeiro e em São Paulo,
              com disponibilidade para atuação em outras cidades conforme a agenda.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5521981516413?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-green-500 px-7 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(34,197,94,0.35)] transition hover:bg-green-600 hover:-translate-y-0.5"
              >
                Falar no WhatsApp
              </a>
            </div>

            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Eventos
                </p>
                <p className="mt-2 text-sm font-medium text-slate-900">
                  Corporativos e institucionais
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Idiomas
                </p>
                <p className="mt-2 text-sm font-medium text-slate-900">
                  Inglês, espanhol e português
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Registro
                </p>
                <p className="mt-2 text-sm font-medium text-slate-900">
                  Relatoria profissional
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-blue-200 blur-3xl" />
            <div className="absolute -bottom-10 left-0 h-40 w-40 rounded-full bg-indigo-200/80 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.10)]">
              <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
                <img
                  src="/imagens/nat.png"
                  alt="Natália"
                  className="h-[540px] w-full object-cover object-[50%_15%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Serviços
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
              Soluções pensadas para encontros que exigem clareza e precisão
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
              <div className="h-72 w-full overflow-hidden bg-slate-100">
                <img
                  src="/imagens/tradução.jpeg"
                  alt="Tradução simultânea em eventos"
                  className="h-[400px] w-full object-cover object-[100%_10%] object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-8 md:p-10">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  Serviço 01
                </p>
                <h3 className="mt-4 text-2xl font-semibold">
                  Tradução simultânea
                </h3>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  Ideal para eventos, reuniões, palestras, workshops e
                  treinamentos com participantes de diferentes idiomas,
                  permitindo acompanhamento claro do conteúdo em tempo real.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
              <div className="h-72 w-full overflow-hidden bg-slate-100">
                <img
                  src="/imagens/relatoria.jpeg"
                  alt="Relatoria para eventos e reuniões"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-8 md:p-10">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  Serviço 02
                </p>
                <h3 className="mt-4 text-2xl font-semibold">Relatoria</h3>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  Registro escrito do que aconteceu durante o evento, reunião ou
                  treinamento, preservando os principais pontos, decisões,
                  aprendizados e encaminhamentos.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-blue-300">
                Diferencial
              </p>
              <h3 className="mt-4 text-3xl font-semibold leading-tight">
                Mais segurança para quem organiza
              </h3>
            </div>

            <div>
              <p className="leading-8 text-slate-300">
                Comunicação clara entre participantes de diferentes idiomas e
                registro profissional do que foi discutido.
              </p>
            </div>

            <div>
              <p className="leading-8 text-slate-300">
                Um suporte que contribui para encontros mais acessíveis,
                organizados e com melhor aproveitamento do conteúdo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="border-b border-slate-200 bg-[linear-gradient(to_bottom,#f8fbff,#f5f7fb)]"
      >
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-24">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <img
              src="/imagens/inter.jpeg"
              alt="Natália em ambiente profissional"
              className="h-[520px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Sobre Natália
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
              Atendimento com presença, discrição e foco total na qualidade da
              entrega
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Natália atua com tradução simultânea e relatoria para eventos,
              reuniões e treinamentos, apoiando organizações que precisam de
              comunicação clara e registro confiável das informações.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Seu trabalho contribui para encontros mais produtivos,
              organizados e profissionais, preservando a qualidade do conteúdo e
              o entendimento entre os participantes.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Como funciona
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
              Um processo simples, profissional e bem alinhado
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <span className="text-sm font-medium text-slate-500">01</span>
              <p className="mt-4 leading-8 text-slate-700">
                Você entra em contato com as informações do evento ou reunião.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <span className="text-sm font-medium text-slate-500">02</span>
              <p className="mt-4 leading-8 text-slate-700">
                A necessidade é entendida de acordo com idioma, formato e
                objetivo.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <span className="text-sm font-medium text-slate-500">03</span>
              <p className="mt-4 leading-8 text-slate-700">
                Uma proposta é enviada conforme o escopo e a demanda do evento.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <span className="text-sm font-medium text-slate-500">04</span>
              <p className="mt-4 leading-8 text-slate-700">
                O serviço é realizado com organização, discrição e precisão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="bg-[radial-gradient(circle_at_top_right,rgba(29,78,216,0.08),transparent_25%),linear-gradient(to_bottom,#ffffff,#eef4ff)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Contato
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
                Solicite um orçamento
              </h2>

              <p className="mt-8 text-lg leading-8 text-slate-600">
                Entre em contato para receber uma proposta alinhada à sua
                necessidade e ao formato do seu evento, reunião ou treinamento.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5521981516413?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-green-500 px-7 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(34,197,94,0.35)] transition hover:bg-green-600 hover:-translate-y-0.5"
              >
                Falar no WhatsApp
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}