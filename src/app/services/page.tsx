import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, mobile app development, desktop software, bots & server solutions, and AI agents & automation — built by RYUKSAIDSO Solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-neon-wash">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pt-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
              Services · built by the RYUKSAIDSO team
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Websites, apps, software, bots &amp; AI —{" "}
              <span className="text-gradient-brand">built for you</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              We design, build and run the whole thing. Scope, price and
              timeline agreed before we start — fixed price, production
              handover included.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/pricing" className="btn-ghost">
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            const flip = idx % 2 === 1;
            return (
              <article
                key={s.slug}
                className="card-neon grid gap-8 p-7 sm:p-9 lg:grid-cols-2"
              >
                <div className={flip ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-500/30">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                        From {s.startingPrice} · One-Time
                      </p>
                      <h2 className="text-xl font-extrabold sm:text-2xl">
                        {s.title}
                      </h2>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                    {s.headline}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.chips.map((c) => (
                      <span key={c} className="chip">
                        {c}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/services/${s.slug}`}
                      className="btn-primary !py-2.5 !text-sm"
                    >
                      View plans &amp; pricing
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="btn-ghost !py-2.5 !text-sm"
                    >
                      Get a quote
                    </Link>
                  </div>
                </div>

                <ul
                  className={`grid content-start gap-2.5 ${
                    flip ? "lg:order-1" : ""
                  }`}
                >
                  {s.plans.map((p) => (
                    <li
                      key={p.name}
                      className="flex items-center justify-between gap-4 rounded-xl border border-line bg-white/[0.03] px-4 py-3"
                    >
                      <div>
                        <p className="text-sm font-semibold">{p.name}</p>
                        <p className="text-xs text-muted">{p.tagline}</p>
                      </div>
                      <div className="text-right">
                        <p
                          className={`text-lg font-extrabold ${
                            p.popular ? "text-brand-300" : ""
                          }`}
                        >
                          {p.price}
                        </p>
                        <p className="text-[10px] uppercase tracking-wider text-muted">
                          One-Time
                          {p.popular ? " · Popular" : ""}
                        </p>
                      </div>
                    </li>
                  ))}
                  <li className="px-1 pt-1 text-xs text-muted">
                    {s.types.items.length}+ project types ·{" "}
                    {s.included.items.length} things included in every plan
                  </li>
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-line bg-bg-soft">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Not sure what you need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Tell us the goal and the systems involved — we come back with scope,
            timeline and price. No forms into the void.
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
