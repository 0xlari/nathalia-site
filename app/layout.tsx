import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tradução simultânea e relatoria para eventos | Natália",
  description:
    "Serviço profissional de tradução simultânea e relatoria para eventos, reuniões e treinamentos. Comunicação clara, registro confiável e atendimento profissional.",
  keywords: [
    "tradução simultânea",
    "relatoria",
    "tradução simultânea para eventos",
    "relatoria para eventos",
    "tradução para reuniões",
    "relatoria profissional",
    "tradução simultânea RJ",
    "tradução simultânea Rio de Janeiro",
    "intérprete eventos RJ",
    "relatoria eventos RJ",
    "tradução simultânea São Paulo",
    "intérprete eventos SP",
    "relatoria eventos SP",
  ],
  verification: {
    google:"6w71t63VZL3V9ZXbz0ODVjb5hyRVdIaE-OsrQ4UaB40",
  },
};
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="border-b border-zinc-200 bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <span className="text-base font-semibold tracking-[0.18em] text-zinc-900 uppercase">
              Natália Belém
            </span>

            <nav className="hidden gap-8 md:flex">
              <a
                href="#servicos"
                className="text-sm text-zinc-600 transition hover:text-zinc-950"
              >
                Serviços
              </a>
              <a
                href="#sobre"
                className="text-sm text-zinc-600 transition hover:text-zinc-950"
              >
                Sobre
              </a>
              <a
                href="#contato"
                className="text-sm text-zinc-600 transition hover:text-zinc-950"
              >
                Contato
              </a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Natália Belém — Tradução simultânea e
              relatoria.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}