import Image from "next/image";
import Link from "next/link";
import { services, contact } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-soft">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="relative block h-9 w-9 overflow-hidden rounded-lg ring-1 ring-white/15">
                <Image
                  src="/logo-r.png"
                  alt="RYUKSAIDSO logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </span>
              <span className="leading-none">
                <span className="block text-[15px] font-extrabold tracking-[0.14em]">
                  RYUKSAIDSO
                </span>
                <span className="block text-[9px] font-medium tracking-[0.34em] text-muted">
                  SOLUTIONS
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Websites, mobile apps, desktop software, bots & servers and AI
              automation — designed, built and launched end to end by the
              RYUKSAIDSO team. Fixed-scope pricing, agreed before we start.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {contact.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-line px-3.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-brand-500/60 hover:text-brand-300"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          <nav className="md:col-span-3" aria-label="Services">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-muted transition-colors hover:text-brand-300"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-2" aria-label="Company">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Company
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "/services", label: "All Services" },
                { href: "/pricing", label: "Pricing" },
                { href: "/contact", label: "Contact" },
                { href: contact.siteHref, label: "ryuksaidso.online" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      l.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm text-muted transition-colors hover:text-brand-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-brand-300"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.phoneHref}
                  className="transition-colors hover:text-brand-300"
                >
                  {contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-12 flex flex-col items-center justify-between gap-3 pt-6 text-xs text-muted sm:flex-row">
          <p>
            © 2026 RYUKSAIDSO Solutions. All rights reserved.
          </p>
          <p>
            Part of{" "}
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
      </div>
    </footer>
  );
}
