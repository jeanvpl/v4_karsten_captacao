import { Check } from "lucide-react";
import metaLogo from "@/assets/landing/meta.svg";
import trayveLogo from "@/assets/landing/trayve.svg";
import googleLogo from "@/assets/landing/google-partner.svg";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-white/90">
      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[--primary] text-white">
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  );
}

export function Hero() {
  return (
    <section id="formulario" className="relative overflow-hidden pt-32 pb-24">
      {/* decorative red glows */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #E50914, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute top-40 right-0 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #E50914, transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <div className="h-[2px] w-4 bg-[--primary] md:hidden"></div>
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 md:text-left">
              <span className="block md:inline">Para empresas que faturam</span>
              <span className="block md:inline md:ml-1">acima de R$ 100 mil/mês</span>
            </p>
          </div>
          <h1 className="mt-6 text-center font-sans text-[42px] font-medium leading-[1.1] tracking-tight text-white sm:text-5xl md:text-left lg:text-[64px]">
            Faça de 2026 o<br />
            ano mais lucrativo
            <br />
            da sua empresa
          </h1>
          <p className="mt-6 mx-auto max-w-md text-center text-sm leading-relaxed text-white/70 md:mx-0 md:text-left">
            Agende seu diagnóstico gratuito e descubra como podemos transformar seu marketing em uma
            máquina de geração de receita.
          </p>
          <ul className="mt-8 space-y-3">
            <Bullet>Marketing e comercial focados no seu ROI</Bullet>
            <Bullet>Tecnologia e I.A. aplicadas à sua operação</Bullet>
            <Bullet>Especialistas dedicados com soluções sob medida</Bullet>
          </ul>

          <div className="mt-12">
            <p className="mb-4 text-center text-[10px] uppercase tracking-wider text-white/50 md:text-left">
              Certificados pelas maiores companhias
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <img src={googleLogo} alt="Google Partner" className="h-[52px] w-auto" />
              <img src={trayveLogo} alt="Trayve" className="h-[34px] w-auto opacity-70" />
              <img
                src={metaLogo}
                alt="Meta Business Partner"
                className="h-[34px] w-auto opacity-70"
              />
            </div>
          </div>
        </div>

        <FormCard />
      </div>
    </section>
  );
}

function FormCard() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="rounded-[24px] bg-white p-8 md:p-10 shadow-2xl flex flex-col w-full max-w-[480px] mx-auto mt-10 lg:mt-0"
    >
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Qual o seu nome e sobrenome?"
          className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-[13px] text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[--primary] focus:border-[--primary]"
        />
        <input
          type="email"
          placeholder="Qual o seu melhor e-mail corporativo?"
          className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-[13px] text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[--primary] focus:border-[--primary]"
        />
        <input
          type="text"
          placeholder="Qual o nome da sua empresa?"
          className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-[13px] text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[--primary] focus:border-[--primary]"
        />

        <div className="flex gap-3">
          <div className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-3 w-28 shrink-0">
            <span>🇧🇷</span>
            <span className="text-[13px] text-black">+55</span>
          </div>
          <input
            type="tel"
            placeholder="Qual o seu telefone?"
            className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-[13px] text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[--primary] focus:border-[--primary]"
          />
        </div>

        <select
          defaultValue=""
          className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-[13px] text-black appearance-none focus:outline-none focus:ring-1 focus:ring-[--primary] focus:border-[--primary]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 16px center",
          }}
        >
          <option value="" disabled>
            Qual o faturamento mensal da sua empresa?
          </option>
          {[
            "Até 50 mil",
            "De 51 mil à 70 mil",
            "De 71 mil à 100 mil",
            "De 101 mil à 200 mil",
            "De 201 mil à 400 mil",
            "De 401 mil à 1 milhão",
            "De 1 à 4 milhões",
            "De 4 à 16 milhões",
            "De 16 a 40 milhões",
            "Mais de 40 milhões",
          ].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>

        <select
          defaultValue=""
          className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-[13px] text-black appearance-none focus:outline-none focus:ring-1 focus:ring-[--primary] focus:border-[--primary]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 16px center",
          }}
        >
          <option value="" disabled>
            Qual o segmento da sua empresa?
          </option>
          {[
            "Serviço",
            "Varejo",
            "Indústria",
            "E-commerce",
            "Food Service",
            "Educação",
            "Imobiliária",
            "SAAS",
            "Finanças",
            "Franquia / Franchising",
            "Telecom",
            "Energia Solar",
            "Turismo",
            "Outro",
          ].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-full py-3.5 font-semibold uppercase tracking-wide text-white shadow-[0_4px_14px_0_rgba(46,121,0,0.39)] transition-transform hover:scale-[1.02] active:scale-[0.98] bg-[linear-gradient(266deg,#2e7900_0%,#27a106_100%)] text-[14px]"
      >
        Falar com especialista
      </button>
    </form>
  );
}
