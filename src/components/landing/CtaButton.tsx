import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  href?: string;
  arrow?: boolean;
};

export function CtaButton({ className, children, href, arrow = true, ...props }: Props) {
  const content = (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-8 py-3 text-[19px] md:text-[21px] font-medium text-white shadow-[0_1.43px_22px_0_rgba(83,153,43,0.52)] transition-transform hover:scale-[1.02] active:scale-[0.99] bg-[linear-gradient(266deg,#2e7900_0%,#27a106_100%)]",
        className,
      )}
    >
      {children}
      {arrow && <ArrowRight className="h-4 w-4" />}
    </span>
  );
  if (href) {
    return (
      <a href={href} className="block w-fit mx-auto md:mx-0">
        {content}
      </a>
    );
  }
  return (
    <button {...props} className="block w-fit mx-auto md:mx-0">
      {content}
    </button>
  );
}
