import Link from "next/link";
import { getDictionary } from "./dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getDictionary(lang);

  return (
    <main className="bg-[#E5E6E1] text-[#32453A]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#32453A]/10 bg-gradient-to-br from-[#E5E6E1] to-[#dcded8]">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(50,69,58,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(50,69,58,0.06)_1px,transparent_1px)] [background-size:56px_56px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold uppercase tracking-[0.18em] text-[#32453A]">
              {t.brand}
            </span>

            <nav className="hidden gap-8 md:flex">
              <a
                href="#servicos"
                className="text-sm text-[#32453A]/80 transition hover:text-[#32453A]"
              >
                {t.nav.services}
              </a>
              <a
                href="#sobre"
                className="text-sm text-[#32453A]/80 transition hover:text-[#32453A]"
              >
                {t.nav.about}
              </a>
              <a
                href="#contato"
                className="text-sm text-[#32453A]/80 transition hover:text-[#32453A]"
              >
                {t.nav.contact}
              </a>
            </nav>

            <div className="flex items-center gap-3 text-sm">
              <Link
                href="/pt"
                className={
                  lang === "pt"
                    ? "font-semibold text-[#32453A]"
                    : "text-[#32453A]/50"
                }
              >
                PT
              </Link>
              <Link
                href="/en"
                className={
                  lang === "en"
                    ? "font-semibold text-[#32453A]"
                    : "text-[#32453A]/50"
                }
              >
                EN
              </Link>
              <Link
                href="/es"
                className={
                  lang === "es"
                    ? "font-semibold text-[#32453A]"
                    : "text-[#32453A]/50"
                }
              >
                ES
              </Link>
            </div>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-[#32453A]/15 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#32453A]/80 backdrop-blur">
              {t.hero.badge}
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[#32453A] md:text-6xl">
              {t.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#32453A]/80">
              {t.hero.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5521981516413?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-7 py-3 text-sm font-medium text-white shadow-md transition hover:opacity-90"
              >
                {t.hero.whatsappCta}
              </a>
            </div>

            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#32453A]/10 bg-white/70 p-4 shadow-sm backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-[#32453A]/60">
                  {t.hero.cards.eventsLabel}
                </p>
                <p className="mt-2 text-sm font-medium text-[#32453A]">
                  {t.hero.cards.eventsText}
                </p>
              </div>

              <div className="rounded-2xl border border-[#32453A]/10 bg-white/70 p-4 shadow-sm backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-[#32453A]/60">
                  {t.hero.cards.languagesLabel}
                </p>
                <p className="mt-2 text-sm font-medium text-[#32453A]">
                  {t.hero.cards.languagesText}
                </p>
              </div>

              <div className="rounded-2xl border border-[#32453A]/10 bg-white/70 p-4 shadow-sm backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-[#32453A]/60">
                  {t.hero.cards.reportingLabel}
                </p>
                <p className="mt-2 text-sm font-medium text-[#32453A]">
                  {t.hero.cards.reportingText}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/50 blur-3xl" />
            <div className="absolute -bottom-10 left-0 h-40 w-40 rounded-full bg-[#32453A]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-[0_30px_80px_rgba(50,69,58,0.12)]">
              <div className="overflow-hidden rounded-[1.5rem] bg-[#E5E6E1]">
                <img
                  src="/imagens/nat_principal.jpeg"
                  alt={t.hero.imageAlt}
                  className="h-[360px] w-full object-cover object-[50%_15%] sm:h-[430px] md:h-[540px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-[#32453A]/10 bg-[#E5E6E1]">
  <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#32453A]/60">
        {t.trusted.title}
      </p>
    </div>

    <div className="mt-10 grid grid-cols-2 items-center gap-8 md:grid-cols-4 lg:grid-cols-4">
      <div className="flex items-center justify-center rounded-2xl bg-white/50 p-6">
        <img
          src="/imagens/clientes/cliente1.png"
          alt="Logo cliente 1"
          className="h-15 w-auto object-contain opacity-80 grayscale"
        />
      </div>

      <div className="flex items-center justify-center rounded-2xl bg-white/50 p-6">
        <img
          src="/imagens/clientes/cliente2.png"
          alt="Logo cliente 2"
          className="h-15 w-auto object-contain opacity-80 grayscale"
        />
      </div>

      <div className="flex items-center justify-center rounded-2xl bg-white/50 p-6">
        <img
          src="/imagens/clientes/cliente3.png"
          alt="Logo cliente 3"
          className="h-15 w-auto object-contain opacity-80 grayscale"
        />
      </div>

      <div className="flex items-center justify-center rounded-2xl bg-white/50 p-6">
        <img
          src="/imagens/clientes/cliente4.png"
          alt="Logo cliente 4"
          className="h-15 w-auto object-contain opacity-100 grayscale"
        />
      </div>
    </div>
  </div>
</section>

      {/* SERVIÇOS */}
      <section id="servicos" className="border-b border-[#32453A]/10 bg-[#E5E6E1]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#32453A]/60">
              {t.services.badge}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#32453A] md:text-5xl">
              {t.services.title}
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <article className="overflow-hidden rounded-[2rem] border border-[#32453A]/10 bg-white/70 shadow-sm transition duration-300 hover:-translate-y-1">
              <div className="h-72 w-full overflow-hidden bg-[#E5E6E1]">
                <img
                  src="/imagens/tradução.jpeg"
                  alt={t.services.item1Title}
                  className="h-[400px] w-full object-cover object-[100%_10%] object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-8 md:p-10">
                <p className="text-sm uppercase tracking-[0.18em] text-[#32453A]/50">
                  {t.services.item1Label}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[#32453A]">
                  {t.services.item1Title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#32453A]/75">
                  {t.services.item1Text}
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-[#32453A]/10 bg-white/70 shadow-sm transition duration-300 hover:-translate-y-1">
              <div className="h-72 w-full overflow-hidden bg-[#E5E6E1]">
                <img
                  src="/imagens/relatoria.jpeg"
                  alt={t.services.item2Title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-8 md:p-10">
                <p className="text-sm uppercase tracking-[0.18em] text-[#32453A]/50">
                  {t.services.item2Label}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[#32453A]">
                  {t.services.item2Title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#32453A]/75">
                  {t.services.item2Text}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="border-b border-[#32453A]/10 bg-[#32453A] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-white/60">
                {t.authority.badge}
              </p>
              <h3 className="mt-4 text-3xl font-semibold leading-tight">
                {t.authority.title}
              </h3>
            </div>

            <div>
              <p className="leading-8 text-white/80">{t.authority.text1}</p>
            </div>

            <div>
              <p className="leading-8 text-white/80">{t.authority.text2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="border-b border-[#32453A]/10 bg-[#E5E6E1]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-24">
          <div className="overflow-hidden rounded-[2rem] border border-[#32453A]/10 bg-white/70 shadow-sm">
            <img
              src="/imagens/inter.jpeg"
              alt={t.about.imageAlt}
              className="h-[320px] w-full object-cover sm:h-[420px] md:h-[520px]"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#32453A]/60">
              {t.about.badge}
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#32453A] md:text-5xl">
              {t.about.title}
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#32453A]/80">
              {t.about.text1}
            </p>

            <p className="mt-6 text-lg leading-8 text-[#32453A]/80">
              {t.about.text2}
            </p>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="border-b border-[#32453A]/10 bg-[#E5E6E1]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#32453A]/60">
              {t.process.badge}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#32453A] md:text-5xl">
              {t.process.title}
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            <div className="rounded-[2rem] border border-[#32453A]/10 bg-white/60 p-6 shadow-sm">
              <span className="text-sm font-medium text-[#32453A]/50">01</span>
              <p className="mt-4 leading-8 text-[#32453A]/80">{t.process.step1}</p>
            </div>

            <div className="rounded-[2rem] border border-[#32453A]/10 bg-white/60 p-6 shadow-sm">
              <span className="text-sm font-medium text-[#32453A]/50">02</span>
              <p className="mt-4 leading-8 text-[#32453A]/80">{t.process.step2}</p>
            </div>

            <div className="rounded-[2rem] border border-[#32453A]/10 bg-white/60 p-6 shadow-sm">
              <span className="text-sm font-medium text-[#32453A]/50">03</span>
              <p className="mt-4 leading-8 text-[#32453A]/80">{t.process.step3}</p>
            </div>

            <div className="rounded-[2rem] border border-[#32453A]/10 bg-white/60 p-6 shadow-sm">
              <span className="text-sm font-medium text-[#32453A]/50">04</span>
              <p className="mt-4 leading-8 text-[#32453A]/80">{t.process.step4}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-gradient-to-b from-[#E5E6E1] to-[#dcded8]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#32453A]/60">
              {t.contact.badge}
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#32453A] md:text-5xl">
              {t.contact.title}
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#32453A]/80">
              {t.contact.text}
            </p>

            <div className="mt-10">
              <a
                href="https://wa.me/5521981516413?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-8 py-4 text-lg font-medium text-white shadow-md transition hover:opacity-90"
              >
                {t.contact.cta}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}