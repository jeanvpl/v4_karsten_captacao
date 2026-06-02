import { ArrowUp } from "lucide-react";
import { V4Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <V4Logo className="h-6 w-auto text-white" />
        <p className="text-xs text-white/50">2026 © V4 Company. Todos os direitos reservados.</p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-white"
        >
          Retornar ao topo <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
}
