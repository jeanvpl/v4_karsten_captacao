import { Check } from "lucide-react";
import { CtaButton } from "./CtaButton";
import ai from "@/assets/landing/ai.svg";

function Item({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-white/80">
      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[--primary] text-white">
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  );
}

export function IA() {
  return (
    <section className="relative overflow-hidden py-20">
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #E50914, transparent 70%)" }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="text-center font-sans text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl md:text-left">
            Inteligência Artificial
            <br />e Tecnologia
          </h2>
          <p className="mt-5 mx-auto max-w-md text-center text-sm text-white/60 md:mx-0 md:text-left">
            Nós fazemos a curadoria e a implementação da tecnologia certa para o seu negócio
            enquanto você foca no lucro.
          </p>
          <ul className="mt-6 space-y-3">
            <Item>
              Identificação de soluções de IA para automatizar processos operacionais e reduzir
              custos.
            </Item>
            <Item>
              Implementação rápida de tecnologia nas campanhas de marketing para gerar insights de
              alta performance.
            </Item>
            <Item>
              Análise contínua de dados com IA para otimizar a conversão e aumentar as margens de
              lucro.
            </Item>
          </ul>
          <div className="mt-8">
            <CtaButton href="#formulario">Saber Mais</CtaButton>
          </div>
        </div>
        <div className="relative">
          <img
            src={ai}
            alt="Ecossistema de IA e Tecnologia V4 Company"
            className="mx-auto w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
