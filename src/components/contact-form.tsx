"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { contact, services } from "@/lib/data";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: services[0].name,
    details: "",
  });

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project enquiry — ${form.service}${form.company ? ` — ${form.company}` : ""}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        form.company && `Company: ${form.company}`,
        `Service needed: ${form.service}`,
        "",
        "Project details:",
        form.details,
      ]
        .filter(Boolean)
        .join("\n")
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputCls =
    "w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-sm text-text placeholder:text-muted/70 outline-none transition-colors focus:border-brand-500/70 focus:bg-brand-500/[0.04]";

  return (
    <form onSubmit={submit} className="card-neon p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
            Your name *
          </span>
          <input
            required
            value={form.name}
            onChange={set("name")}
            className={inputCls}
            placeholder="John Doe"
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
            Email *
          </span>
          <input
            required
            type="email"
            value={form.email}
            onChange={set("email")}
            className={inputCls}
            placeholder="you@company.com"
            autoComplete="email"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
            Company (optional)
          </span>
          <input
            value={form.company}
            onChange={set("company")}
            className={inputCls}
            placeholder="Acme Pvt Ltd"
            autoComplete="organization"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
            What do you need? *
          </span>
          <select
            required
            value={form.service}
            onChange={set("service")}
            className={inputCls}
          >
            {services.map((s) => (
              <option key={s.slug} value={s.name} className="bg-panel">
                {s.name}
              </option>
            ))}
            <option value="Not sure yet" className="bg-panel">
              Not sure yet
            </option>
          </select>
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
          Project details *
        </span>
        <textarea
          required
          rows={5}
          value={form.details}
          onChange={set("details")}
          className={inputCls}
          placeholder="Goal, timeline, anything specific you need built…"
        />
      </label>

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          Sends via your email app to{" "}
          <span className="text-brand-300">{contact.email}</span>
        </p>
        <button type="submit" className="btn-primary w-full sm:w-auto">
          Send enquiry
          <Send className="h-4 w-4" />
        </button>
      </div>

      {sent && (
        <p className="mt-4 flex items-center gap-2 rounded-xl border border-brand-500/40 bg-brand-500/10 px-4 py-3 text-sm text-brand-300">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          Your email app should be opening with the enquiry. If nothing
          happened, email us directly at {contact.email}.
        </p>
      )}
    </form>
  );
}
