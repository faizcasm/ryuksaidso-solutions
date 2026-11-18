import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-neon-wash flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-6xl font-extrabold text-gradient-brand">404</p>
      <h1 className="mt-4 text-2xl font-extrabold sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/services" className="btn-ghost">
          Browse services
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
