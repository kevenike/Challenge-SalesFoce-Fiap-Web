import Header from "./Components/Header/page";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "./Components/Footer/page";
import ContatoPage from "../app/Components/ContatoPage/page"
import "../app/Components/BotaoFormulario/page"
import Providers from "./Components/Providers/providers";



export const metadata: Metadata = {
  title: "SalesForce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <Providers>
          {children}
        </Providers>
        <ContatoPage />
        <Footer />
      </body>
    </html>
  );
}
