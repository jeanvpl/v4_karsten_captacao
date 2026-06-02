import { useState } from "react";
import { Menu, X } from "lucide-react";
import { V4Logo } from "./Logo";

const nav = [
  { label: "Imprensa", href: "#imprensa" },
  { label: "Programas", href: "#programas" },
  { label: "A gente é V4", href: "#agente-v4" },
  { label: "B2C", href: "#formulario" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" aria-label="V4 Company" onClick={() => setOpen(false)}>
          <V4Logo className="h-6 w-auto text-white" />
        </a>
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-1 text-white/90"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <nav className="hidden md:flex items-center gap-7 text-xs text-white/80">
          {nav.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-white transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
      </div>
      {open && (
        <nav className="md:hidden border-t border-white/10 px-6 pb-4 pt-3 text-sm text-white/90">
          <div className="flex flex-col gap-3">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="transition-colors hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
