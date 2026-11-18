import { Check, Crown } from "lucide-react";
import type { Plan } from "@/lib/data";

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-6 ${
        plan.popular ? "card-popular" : "card-neon"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-glow-sm">
          <Crown className="h-3.5 w-3.5" />
          Most Popular
        </span>
      )}

      <div className="flex items-start gap-3">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
            plan.popular
              ? "bg-brand-500/25 text-brand-300"
              : "bg-white/5 text-brand-300"
          }`}
        >
          <Check className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-base font-bold uppercase tracking-wide">
            {plan.name}
          </h3>
          <p className="mt-0.5 text-xs text-muted">{plan.tagline}</p>
        </div>
      </div>

      <p className="mt-5 text-4xl font-extrabold tracking-tight">
        {plan.price}
      </p>
      <span className="mt-2 inline-flex w-fit rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-300">
        One-Time
      </span>

      {plan.includesHeader && (
        <p className="mt-5 text-sm font-semibold text-brand-300">
          {plan.includesHeader}
        </p>
      )}

      <ul className="mt-4 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check
              className={`mt-0.5 h-4 w-4 shrink-0 ${
                plan.popular ? "text-brand-300" : "text-brand-400"
              }`}
            />
            <span className="text-text/85">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
