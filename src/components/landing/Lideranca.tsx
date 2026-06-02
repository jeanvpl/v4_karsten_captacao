import { CtaButton } from "./CtaButton";

const stats = [
  { value: "+30 Mil", label: "Empresas atendidas em todos os setores" },
  { value: "+200", label: "Escritórios espalhados por todo o país" },
  { value: "+R$ 16 Bi", label: "Receita gerada para nossos clientes" },
  { value: "+5 Mil", label: "Especialistas certificados para atuar no seu negócio" },
];

export function Lideranca() {
  return (
    <section id="agente-v4" className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(229,9,20,0.35), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="max-w-3xl text-center font-sans text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl md:text-left">
          <span className="font-bold">Liderança absoluta:</span> A maior assessoria de Marketing e
          Vendas da América Latina
        </h2>
        <p className="mt-4 text-center text-sm text-white/60 md:text-left">
          Mais de 13 anos profissionalizando Marketing e Vendas em todo o Brasil.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) => (
            <div key={i} className="rounded-xl border border-white/5 bg-[#0a0a0a] p-5 shadow-2xl">
              <p className="font-mono text-3xl font-bold text-[--primary]">{s.value}</p>
              <p className="mt-2 text-[10px] leading-snug text-white/50">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <CtaButton href="#formulario">Agendar Reunião</CtaButton>
        </div>
      </div>
    </section>
  );
}
