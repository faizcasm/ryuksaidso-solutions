import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { services } from "@/lib/data";
import { PlanCard } from "@/components/plan-card";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Fixed one-time pricing for website, mobile app, desktop software, bots & servers, and AI automation development. Plans from ₹10,000.",
};

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-neon-wash">
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-16 text-center sm:px-6 lg:px-8 lg:pt-20">
          <span className="chip mx-auto">
            <Sparkles className="h-3.5 w-3.5" />
            Fixed-scope · One-time pricing
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Simple, <span className="text-gradient-brand">upfront pricing</span>{" "}
            for every build
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted sm:text-lg">
            Three plans per service. Scope, timeline and price agreed before we
            start — no surprises, no hourly billing.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-ghost">
              Explore all services
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-24 px-4 py-16 sm:px-6 lg:px-8">
        {services.map((s) => (
          <section key={s.slug} id={s.slug} className="scroll-mt-24">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div className="flex items-center gap-3.5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-500/30">
                  <s.icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                    From {s.startingPrice} · One-Time
                  </p>
                  <h2 className="text-2xl font-extrabold tracking-tight">
                    {s.title}
                  </h2>
                </div>
              </div>
              <Link
                href={`/services/${s.slug}`}
                className="btn-ghost !py-2.5 !text-sm"
              >
                Full details
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {s.plans.map((p) => (
                <PlanCard key={p.name} plan={p} />
              ))}
            </div>

            <div className="card-neon mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Included in all plans
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {s.included.items.map((i) => (
                  <li
                    key={i.label}
                    className="flex items-center gap-2 text-sm text-text/85"
                  >
                    <Check className="h-4 w-4 shrink-0 text-brand-400" />
                    {i.label}
                    {i.sub && (
                      <span className="text-xs text-muted">({i.sub})</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className="border-t border-line bg-bg-soft">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Need something custom?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Add-ons, maintainers and fully custom scopes are quoted per project.
            Tell us what you need and we&apos;ll price it before we start.
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Get a Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
