import { CtaButton } from "./CtaButton";
import flavio from "@/assets/landing/flavio.webp";
import flavioMobile from "@/assets/landing/flavio-mobile.webp";

export function Conselheiro() {
  return (
    <section className="px-4 pb-16 lg:pb-24 max-w-6xl mx-auto">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] text-black">
        <div>
          <h2 className="text-center font-sans text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-left">
            <span className="font-bold">Conselheiro Estratégico</span>
            <br />
            <span className="text-[--primary]">V4 Company</span>
          </h2>
          <p className="mt-6 mx-auto max-w-md text-center text-sm leading-relaxed text-black/70 md:mx-0 md:text-left">
            Trazemos para a sua operação o rigor e a mentalidade de um dos maiores empresários do
            país.
          </p>
          <div className="mt-8">
            <CtaButton href="#formulario">Saber Mais</CtaButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          {/* Mobile: natural image height, no empty area below */}
          <img
            src={flavioMobile}
            alt="Flávio Augusto"
            className="block w-full object-cover md:hidden"
          />
          {/* Desktop: fixed aspect ratio container */}
          <div className="relative hidden overflow-hidden rounded-[40px] aspect-[3/4] md:block">
            <img
              src={flavio}
              alt="Flávio Augusto, Founder Wise UP e Conselheiro Estratégico V4 Company"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
