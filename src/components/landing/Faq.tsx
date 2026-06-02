import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    q: "Para qual tamanho de empresa a V4 Company é indicada?",
    a: "Atendemos empresas que faturam acima de R$ 100 mil/mês, de pequenas operações até grandes multinacionais.",
  },
  {
    q: "Já tenho uma equipe de marketing interna. Por que contratar a V4?",
    a: "Complementamos seu time com especialistas certificados, tecnologia e processos validados em milhares de operações.",
  },
  {
    q: "Como saber se funciona para o meu segmento?",
    a: "Já atuamos em mais de 30 setores. No diagnóstico gratuito mostramos cases do seu segmento.",
  },
  {
    q: "O que diferencia a V4 de uma agência de marketing comum?",
    a: "Foco obsessivo em ROI, operação completa (marketing + vendas) e metodologia validada em mais de 30 mil empresas.",
  },
  {
    q: "Quanto tempo leva para os resultados aparecerem?",
    a: "Os primeiros resultados aparecem em 30 a 90 dias, dependendo do segmento e do ponto de partida.",
  },
  {
    q: "Vocês garantem resultados de vendas?",
    a: "Trabalhamos com metas de performance acordadas no início do projeto e prestamos contas continuamente.",
  },
];

export function Faq() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center font-sans text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl md:text-left">
          Tire suas dúvidas antes de começar
        </h2>
        <Accordion type="single" collapsible className="mt-8 space-y-2">
          {items.map((it, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-none bg-[#111] px-5 py-2 data-[state=open]:bg-[#161616]"
            >
              <AccordionTrigger className="text-left text-sm font-semibold text-white/90 hover:no-underline">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-white/60 leading-relaxed pb-4">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
