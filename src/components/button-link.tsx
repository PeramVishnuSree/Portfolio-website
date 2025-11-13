import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200",
        {
          "bg-[#111827] text-white shadow-[0_10px_30px_-15px_rgba(17,24,39,1)] hover:translate-y-[-1px] hover:shadow-[0_12px_35px_-15px_rgba(17,24,39,1)]":
            variant === "solid",
          "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900":
            variant === "ghost",
        },
      )}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}

