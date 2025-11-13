import { cn } from "@/lib/utils";

type PillProps = {
  children: React.ReactNode;
  tone?: "default" | "accent" | "neutral";
};

export function Pill({ children, tone = "default" }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase",
        {
          "border-slate-200 bg-white text-slate-600 shadow-sm": tone === "default",
          "border-transparent bg-[#111827] text-white shadow-sm":
            tone === "accent",
          "border-transparent bg-slate-100 text-slate-500": tone === "neutral",
        },
      )}
    >
      {children}
    </span>
  );
}

