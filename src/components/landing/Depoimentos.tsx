import { Star } from "lucide-react";
import diego from "@/assets/landing/diego.webp";
import sandro from "@/assets/landing/sandro.webp";
import jonas from "@/assets/landing/jonas.webp";
import andre from "@/assets/landing/andre.png";

const items = [
  {
    title: "Crescimento de 70% no ano a ano",
    quote:
      "Se a gente comparar ano x ano, a gente cresceu 70%. Isso mostra que as decisões, e a V4 entre essas decisões, estão gerando o resultado que a gente espera.",
    name: "Diego Lopes",
    role: "Head de DTC | MAX Titanium",
    avatar: diego,
  },
  {
    title: "De pequenas empresas até multinacionais",
    quote:
      "A dor que a V4 atende pega desde uma empresa com 5 colaboradores, até uma multinacional de consumo.",
    name: "Sandro Magaldi",
    role: "CEO | Gestão do Amanhã",
    avatar: sandro,
  },
  {
    title: "ROI de 9,5",
    quote:
      "A gente vendeu, através da V4, 45 unidades. Nós temos um investimento considerável e o nosso ROI está na casa de 9,5.",
    name: "Jonas Esteves",
    role: "Diretor de Marketing | Lugano Chocolates",
    avatar: jonas,
  },
  {
    title: "A V4 veste a camisa do seu negócio",
    quote:
      "O que eu vejo da V4, o escritório que atende a gente, eles vestem a camisa, então isso me dá uma confiança. E outra, são muito rápidos, estão sempre disponíveis.",
    name: "André Vieira",
    role: "CEO | Venum Brasil",
    avatar: andre,
  },
];

export function Depoimentos() {
  return (
    <section id="imprensa" className="px-4 lg:px-16 pb-10 max-w-6xl mx-auto">
      <div className="text-black">
        <h2 className="text-center font-sans text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-left">
          As empresas que <span className="font-bold">mais crescem</span>
          <br />
          <span className="font-bold">no Brasil</span> passam pela V4
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <article
              key={it.name}
              className="flex flex-col rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
            >
              <div className="flex gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-500" />
                ))}
              </div>
              <h3 className="mt-3 text-sm font-bold uppercase leading-snug text-[--primary]">
                {it.title}
              </h3>
              <p className="mt-3 flex-1 text-xs leading-relaxed text-black/70 font-semibold">
                "{it.quote}"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img src={it.avatar} alt={it.name} className="h-9 w-9 rounded-full object-cover" />
                <div>
                  <p className="text-xs font-semibold">{it.name}</p>
                  <p className="text-[10px] text-black/60">{it.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
