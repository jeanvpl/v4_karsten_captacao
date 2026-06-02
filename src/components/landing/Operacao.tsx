import { useState } from "react";
import { CtaButton } from "./CtaButton";
import trafegoDesktop from "@/assets/landing/tab-trafego-desktop.webp";
import trafegoMobile from "@/assets/landing/tab-trafego-mobile.webp";
import dashboardsDesktop from "@/assets/landing/tab-dashboards-desktop.webp";
import dashboardsMobile from "@/assets/landing/tab-dashboards-mobile.webp";
import criativosDesktop from "@/assets/landing/tab-criativos-desktop.webp";
import criativosMobile from "@/assets/landing/tab-criativos-mobile.webp";
import growthDesktop from "@/assets/landing/tab-growth-desktop.webp";
import growthMobile from "@/assets/landing/tab-growth-mobile.webp";
import comercialDesktop from "@/assets/landing/tab-comercial-desktop.webp";
import comercialMobile from "@/assets/landing/tab-comercial-mobile.webp";

const tabs = [
  "Tráfego Pago",
  "Dashboards & Dados",
  "Criativos e LPs",
  "Growth Strategy",
  "Consultoria Comercial",
];

const content: Record<string, { title: string; body: string; desktop: string; mobile: string }> = {
  "Tráfego Pago": {
    title: "Gestão profissional nos maiores canais de aquisição do mundo.",
    body: "Gestão de alta performance com foco obsessivo em ROI. Atraímos o público qualificado para que cada centavo investido retorne como receita para o seu caixa.",
    desktop: trafegoDesktop,
    mobile: trafegoMobile,
  },
  "Dashboards & Dados": {
    title: "Implementação de Dashboards, CRM e ferramentas de I.A.",
    body: "Tenha o controle total do seu investimento com métricas auditáveis em tempo real para tomar decisões baseadas em fatos, não em palpites.",
    desktop: dashboardsDesktop,
    mobile: dashboardsMobile,
  },
  "Criativos e LPs": {
    title: "Produção de ativos focados em conversão, não apenas estética.",
    body: "Anúncios desenvolvidos por especialistas em conversão para impactar e Landing Pages desenhadas para transformar visitantes curiosos em oportunidades reais.",
    desktop: criativosDesktop,
    mobile: criativosMobile,
  },
  "Growth Strategy": {
    title: "Planejamento de escala modular adaptado ao seu momento de negócio.",
    body: "O seu marketing gerenciado de ponta a ponta por especialistas em growth que realmente se importam com seu ROI.",
    desktop: growthDesktop,
    mobile: growthMobile,
  },
  "Consultoria Comercial": {
    title: "Alinhamento técnico para garantir que o lead vire venda.",
    body: "Toda experiência do nosso time de vendas à disposição da sua empresa para aumentar sua taxa de conversão.",
    desktop: comercialDesktop,
    mobile: comercialMobile,
  },
};

export function Operacao() {
  const [active, setActive] = useState(tabs[0]);
  const c = content[active];
  return (
    <section id="programas" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-3xl text-center font-sans text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl md:text-left">
          Tenha uma operação completa de marketing e vendas{" "}
          <span className="text-[--primary]">sem contratar e gerenciar pessoas.</span>
        </h2>
        <p className="mt-4 text-center text-sm text-white/60 md:text-left">
          Atendemos toda demanda que surge no marketing. Conheça alguns dos nossos serviços.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2 md:justify-start">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-full px-4 py-2 text-xs transition-colors ${active === t ? "bg-[--primary] text-white" : "bg-white/5 text-white/70 hover:bg-white/10"}`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl bg-white">
          <img src={c.mobile} alt={c.title} className="w-full md:hidden" />
          <img src={c.desktop} alt={c.title} className="w-full hidden md:block" />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
          <h3 className="text-xl font-medium text-white">{c.title}</h3>
          <p className="text-sm leading-relaxed text-white/70">{c.body}</p>
        </div>
        <div className="mt-6">
          <CtaButton href="#formulario">Falar com um consultor</CtaButton>
        </div>
      </div>
    </section>
  );
}
