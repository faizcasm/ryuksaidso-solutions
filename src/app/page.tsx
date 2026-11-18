import Link from "next/link";
import {
  ArrowRight,
  Check,
  Sparkles,
  Star,
  type LucideIcon,
} from "lucide-react";
import { services, process, whyChooseAll, contact } from "@/lib/data";

const includedInAll: { icon: LucideIcon; label: string; sub: string }[] = [
  { icon: Check, label: "Fixed Scope", sub: "Price agreed upfront" },
  { icon: Check, label: "Modern Stack", sub: "Fast & scalable" },
  { icon: Check, label: "Handover", sub: "Docs & walkthrough" },
  { icon: Check, label: "Support", sub: "Post-launch included" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-neon-wash">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="chip mx-auto">
              <Sparkles className="h-3.5 w-3.5" />
              Built by the RYUKSAIDSO team
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Websites, apps, software, bots &amp; AI —{" "}
              <span className="text-gradient-brand">built for you</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              RYUKSAIDSO Solutions takes on the whole build — websites, mobile
              and desktop apps, bots &amp; servers, and end-to-end AI
              automation. Scope, price and timeline agreed before we start.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary w-full sm:w-auto">
                Get a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/pricing" className="btn-ghost w-full sm:w-auto">
                View Pricing
              </Link>
            </div>
            <p className="mt-6 text-xs text-muted">
              Fixed-scope builds · Production handover included · Support after
              launch
            </p>
          </div>

          {/* Services grid */}
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className={`card-neon group flex flex-col p-6 ${
                    s.slug === "ai-automation" ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-500/30 transition-shadow group-hover:shadow-glow-sm">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-4 text-lg font-bold">{s.name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {s.headline}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm text-muted">
                      From{" "}
                      <span className="font-bold text-brand-300">
                        {s.startingPrice}
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-300 transition-transform group-hover:translate-x-0.5">
                      View details <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Included strip */}
      <section className="border-y border-line bg-bg-soft">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
          {includedInAll.map((i) => (
            <div key={i.label} className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300">
                <i.icon className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-sm font-semibold">{i.label}</p>
                <p className="text-xs text-muted">{i.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            How a project runs
          </h2>
          <p className="mt-4 text-muted">
            Short feedback loops, working software early, and a clean handover
            at the end.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <div key={p.step} className="card-neon p-6">
              <span className="text-sm font-extrabold text-brand-400">
                {p.step}
              </span>
              <h3 className="mt-3 text-base font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose */}
      <section className="border-y border-line bg-bg-soft">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
              Why choose us
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Why choose <span className="text-gradient-brand">Ryuksaidso?</span>
            </h2>
            <p className="mt-4 max-w-md text-muted">
              One team for the product, the infrastructure and the AI layer —
              from a single landing page to an agentic system running against
              your production data.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="grid gap-3.5">
            {whyChooseAll.map((w) => (
              <li
                key={w}
                className="card-neon flex items-center gap-3.5 px-5 py-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium sm:text-base">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonial-style trust band */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="card-neon flex flex-col items-center gap-5 p-8 text-center sm:p-10">
          <div className="flex gap-1 text-brand-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="max-w-2xl text-lg font-medium leading-relaxed sm:text-xl">
            “Scope, timeline and price agreed before we start — and a
            production handover when we ship.”
          </p>
          <p className="text-sm text-muted">
            RYUKSAIDSO · Digital Solutions ·{" "}
            <a
              href={contact.siteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-300 hover:underline"
            >
              ryuksaidso.online
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="bg-neon-wash absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Let&apos;s build your{" "}
            <span className="text-gradient-brand">digital presence.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Tell us what you need built. We come back with scope, timeline and
            price — a person reads every enquiry.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/pricing" className="btn-ghost w-full sm:w-auto">
              See all pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
