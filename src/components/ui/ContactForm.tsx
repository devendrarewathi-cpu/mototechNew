"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/(site)/contact/actions";
import { ArrowIcon } from "@/components/ui/Primitives";

const initial: ContactState = { status: "idle", message: "" };
const topics = ["General enquiry", "Product enquiry", "Dealer / distributor", "Press & media"];

const field =
  "mt-2 block w-full border border-white/20 bg-carbon px-4 text-base text-bone placeholder:text-steel/70 transition-colors focus:border-accent aria-[invalid=true]:border-accent";

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initial);
  const err = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div role="status" className="border border-white/15 bg-carbon p-8 sm:p-10">
        <h3 className="font-display text-3xl font-semibold uppercase">Message sent</h3>
        <p className="mt-3 text-bone/75">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="grid gap-6 sm:grid-cols-2">
      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Company<input type="text" name="company" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div>
        <label htmlFor="cf-name" className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">Name *</label>
        <input id="cf-name" name="name" autoComplete="name" required aria-invalid={!!err.name} aria-describedby={err.name ? "cf-name-err" : undefined} className={`${field} h-12`} />
        {err.name && <p id="cf-name-err" className="mt-2 text-sm text-accent">{err.name}</p>}
      </div>
      <div>
        <label htmlFor="cf-email" className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">Email *</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" required aria-invalid={!!err.email} aria-describedby={err.email ? "cf-email-err" : undefined} className={`${field} h-12`} />
        {err.email && <p id="cf-email-err" className="mt-2 text-sm text-accent">{err.email}</p>}
      </div>
      <div>
        <label htmlFor="cf-phone" className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">Phone</label>
        <input id="cf-phone" name="phone" type="tel" autoComplete="tel" className={`${field} h-12`} />
      </div>
      <div>
        <label htmlFor="cf-topic" className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">Topic</label>
        <select id="cf-topic" name="topic" className={`${field} h-12`}>
          {topics.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-message" className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">Message *</label>
        <textarea id="cf-message" name="message" rows={6} required aria-invalid={!!err.message} aria-describedby={err.message ? "cf-message-err" : undefined} className={`${field} py-3`} />
        {err.message && <p id="cf-message-err" className="mt-2 text-sm text-accent">{err.message}</p>}
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={pending}
          className="group relative inline-flex h-12 items-center justify-center gap-3 overflow-hidden bg-accent px-8 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-ink disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send message"}
          <ArrowIcon className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
        </button>
        <p role="status" aria-live="polite" className={`text-sm ${state.status === "error" ? "text-accent" : "text-bone/70"}`}>
          {state.status === "error" ? state.message : ""}
        </p>
      </div>
    </form>
  );
}
