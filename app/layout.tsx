import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Tradução simultânea e relatoria para eventos | Natália Belém",
  description:
    "Serviço profissional de tradução simultânea e relatoria para eventos, reuniões e treinamentos.",
  keywords: [
    "tradução simultânea",
    "relatoria",
    "tradução simultânea para eventos",
    "relatoria para eventos",
    "tradução para reuniões",
    "relatoria profissional",
  ],
  verification: {
    google: "6w7lt63VZL3V9ZXbz00DVjb5hyRVdIaE-OsrQ4UaB40",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}