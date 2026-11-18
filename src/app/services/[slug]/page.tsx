import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Check,
  Gift,
  Plus,
  Star,
  type LucideIcon,
} from "lucide-react";
import { services, getService } from "@/lib/data";
import { PlanCard } from "@/components/plan-card";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} — From ${service.startingPrice}`,
    description: `${service.title}: ${service.headline} Plans from ${service.startingPrice} one-time. Free scope, timeline and price agreed before we start.`,
  };
}

function InfoRow({
  icon: Icon,
  title,
  children,
  id,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-7 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-500/30">
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="text-2xl font-extrabold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const nextIndex =
    (services.findIndex((s) => s.slug === slug) + 1) % services.length;
  const next = services[nextIndex];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-neon-wash">
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 lg:px-8 lg:pt-16">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-xs text-muted"
          >
            <Link href="/services" className="hover:text-brand-300">
              Services
            </Link>
            <span aria-hidden>/</span>
            <span className="text-text/80">{service.name}</span>
          </nav>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-500/30">
                <Icon className="h-7 w-7" />
              </span>
              <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {service.headline}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.chips.map((c) => (
                  <span key={c} className="chip">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-3">
              <Link href="/contact" className="btn-primary">
                Get a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-center text-xs text-muted">
                Plans from{" "}
                <span className="font-bold text-brand-300">
                  {service.startingPrice}
                </span>{" "}
                · One-Time
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8">
        {/* Pricing plans */}
        <InfoRow icon={Check} title="Pricing Plans" id="pricing">
          <div className="grid gap-6 pt-2 lg:grid-cols-3">
            {service.plans.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>
        </InfoRow>

        {/* Included in all plans */}
        <InfoRow icon={Gift} title={service.included.title}>
          <div className="card-neon grid grid-cols-2 gap-px overflow-hidden bg-line sm:grid-cols-3 lg:grid-cols-6">
            {service.included.items.map((i) => (
              <div
                key={i.label}
                className="flex flex-col items-center gap-1.5 bg-panel px-4 py-7 text-center"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/15 text-brand-300">
                  <Check className="h-4.5 w-4.5" />
                </span>
                <p className="text-sm font-semibold leading-tight">
                  {i.label}
                </p>
                {i.sub && (
                  <p className="text-[11px] text-muted">{i.sub}</p>
                )}
              </div>
            ))}
          </div>
        </InfoRow>

        {/* Types / services list */}
        <InfoRow
          icon={Icon}
          title={service.types.title}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.types.items.map((t) => (
              <div key={t.name} className="card-neon flex items-start gap-3.5 p-5">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </InfoRow>

        {/* Add-ons / use cases */}
        <InfoRow icon={Plus} title={service.addons.title}>
          <div className="card-neon divide-y divide-line overflow-hidden">
            {service.addons.items.map((a) => (
              <div
                key={a.name}
                className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-white/[0.03]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-500/15 text-brand-300">
                    <Plus className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm font-medium">{a.name}</p>
                </div>
                <p className="shrink-0 text-sm font-bold text-brand-300">
                  {a.price}
                </p>
              </div>
            ))}
          </div>
        </InfoRow>

        {/* Why choose */}
        <InfoRow icon={Star} title="Why Choose Ryuksaidso?">
          <div className="grid gap-4 sm:grid-cols-2">
            {service.whyChoose.map((w) => (
              <div
                key={w}
                className="card-neon flex items-center gap-3.5 px-5 py-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">{w}</span>
              </div>
            ))}
          </div>
        </InfoRow>

        {/* Service CTA */}
        <section className="relative overflow-hidden rounded-3xl border border-brand-500/30 bg-neon-wash p-8 text-center sm:p-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {service.cta[0]}{" "}
            <span className="text-gradient-brand">{service.cta[1]}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted sm:text-base">
            Free consultation — scope, timeline and price before anything
            starts.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/pricing" className="btn-ghost">
              Compare all pricing
            </Link>
          </div>
        </section>

        {/* Next service */}
        <div className="hairline flex flex-col items-center justify-between gap-4 pt-10 sm:flex-row">
          <p className="text-sm text-muted">
            Next service:{" "}
            <span className="font-semibold text-text">{next.name}</span>
          </p>
          <Link
            href={`/services/${next.slug}`}
            className="btn-ghost !py-2.5 !text-sm"
          >
            {next.name}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
