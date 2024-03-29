import Header from "./Components/Header/page";
import BotaoFormulario from "./Components/BotaoFormulario/page";
import "./Global.css";
import type { Metadata } from "next";
import Footer from "./Components/Footer/page";
import Form from "./Components/Form/page";

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
      {children}
      <BotaoFormulario />
      <Form />
      <Footer />
      </body>
    </html>

  );
}
