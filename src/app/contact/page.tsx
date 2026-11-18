import type { Metadata } from "next";
import { Mail, Phone, Globe, MapPin, Clock, ArrowRight } from "lucide-react";
import { contact, services } from "@/lib/data";
import { ContactForm } from "@/components/contact-form";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Free Consultation",
  description:
    "Get a free consultation for your website, app, desktop software, bot or AI project. Scope, timeline and price agreed before we start.",
};

const details = [
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneHref },
  {
    icon: Globe,
    label: "Website",
    value: contact.site,
    href: contact.siteHref,
  },
  { icon: MapPin, label: "Serving", value: "Clients worldwide", href: null },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 1 business day",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-neon-wash">
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-16 sm:px-6 lg:px-8 lg:pt-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
              Free consultation
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Tell us what you{" "}
              <span className="text-gradient-brand">need built</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Give us the goal and the systems involved. We come back with
              scope, timeline and price — a person reads every enquiry, no
              forms into the void.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <aside className="space-y-5 lg:col-span-2">
            <div className="card-neon p-6">
              <h2 className="text-base font-bold">Direct contact</h2>
              <ul className="mt-4 space-y-4">
                {details.map((d) => {
                  const inner = (
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300">
                        <d.icon className="h-4.5 w-4.5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                          {d.label}
                        </p>
                        <p className="truncate text-sm font-medium">
                          {d.value}
                        </p>
                      </div>
                    </div>
                  );
                  return (
                    <li key={d.label}>
                      {d.href ? (
                        <a
                          href={d.href}
                          target={
                            d.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            d.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="block rounded-lg transition-opacity hover:opacity-80"
                        >
                          {inner}
                        </a>
                      ) : (
                        inner
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="card-neon p-6">
              <h2 className="text-base font-bold">What we build</h2>
              <ul className="mt-4 space-y-2.5">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex items-center justify-between gap-3 text-sm text-muted transition-colors hover:text-brand-300"
                    >
                      <span className="flex items-center gap-2.5">
                        <s.icon className="h-4 w-4 text-brand-400" />
                        {s.name}
                      </span>
                      <span className="font-semibold text-brand-300">
                        {s.startingPrice}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-neon p-6">
              <h2 className="text-base font-bold">Follow us</h2>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {contact.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-line px-4 py-2 text-xs font-medium text-muted transition-colors hover:border-brand-500/60 hover:text-brand-300"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
              <a
                href={contact.siteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-5 w-full !text-sm"
              >
                Visit ryuksaidso.online
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
