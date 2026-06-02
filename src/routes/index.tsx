import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Conselheiro } from "@/components/landing/Conselheiro";
import { Depoimentos } from "@/components/landing/Depoimentos";
import { Lideranca } from "@/components/landing/Lideranca";
import { Operacao } from "@/components/landing/Operacao";
import { IA } from "@/components/landing/IA";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "V4 Company | Assessoria de Marketing Digital" },
      {
        name: "description",
        content:
          "A V4 Company entrega operação completa de marketing e vendas com foco obsessivo em ROI. Conheça a assessoria que já atendeu mais de 30.000 empresas.",
      },
      { property: "og:title", content: "V4 Company | Assessoria de Marketing Digital" },
      {
        property: "og:description",
        content:
          "A V4 Company entrega operação completa de marketing e vendas com foco obsessivo em ROI.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />

        {/* Container branco arredondado para Conselheiro e Depoimentos */}
        <div className="bg-white rounded-[40px] md:rounded-[80px] mx-4 md:mx-10 py-16 md:py-24 my-10 overflow-hidden">
          <Conselheiro />
          <Depoimentos />
        </div>

        <Lideranca />
        <Operacao />
        <IA />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
