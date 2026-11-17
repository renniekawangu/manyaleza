import { useState } from "react";
import { SectionHeading, Btn } from "../components/ui.jsx";
import { BUSINESS, waLink, GENERAL_MSG } from "../data.js";

export default function Contact() {
  const [f, setF] = useState({ name: "", msg: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const body = `Hello Manyaleza Suppliers, my name is ${f.name.trim()}. ${f.msg.trim()}`;
  const ok = f.name.trim() && f.msg.trim();
  const guard = (e) => !ok && e.preventDefault();
  const rows = [["Business", BUSINESS.name], ["Location", BUSINESS.location]];
  return (
    <section className="wrap sec grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <SectionHeading kicker="Contact" title="Let's talk about what you need." />
        <dl className="mt-8 text-sm">
          {rows.map(([t, d]) => <div key={t} className="flex justify-between gap-6 border-t border-line py-3"><dt className="text-charcoal/55">{t}</dt><dd className="text-right">{d}</dd></div>)}
          <div className="flex justify-between gap-6 border-t border-line py-3"><dt className="text-charcoal/55">Email</dt><dd className="text-right [overflow-wrap:anywhere]"><a className="underline underline-offset-4" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></dd></div>
          <div className="flex justify-between gap-6 border-y border-line py-3"><dt className="text-charcoal/55">WhatsApp</dt><dd className="text-right"><a className="underline underline-offset-4" href={waLink(GENERAL_MSG)} target="_blank" rel="noreferrer">{BUSINESS.phone}</a></dd></div>
        </dl>
        <div className="mt-8 flex flex-wrap gap-3"><Btn href={waLink(GENERAL_MSG)}>Chat on WhatsApp</Btn><Btn variant="dark" href={`mailto:${BUSINESS.email}`}>Send an Email</Btn></div>
      </div>
      <form className="bg-white p-6 md:p-8 lg:col-span-7" onSubmit={(e) => e.preventDefault()} noValidate>
        <h2 className="text-xl font-semibold">Send an enquiry</h2>
        <p className="mt-1 text-sm text-charcoal/60">Your message opens in WhatsApp or your email app, ready to send.</p>
        <div className="mt-6 space-y-5">
          <div><label htmlFor="n" className="text-sm font-medium">Your name</label><input id="n" className="field" value={f.name} onChange={set("name")} autoComplete="name" required /></div>
          <div><label htmlFor="m" className="text-sm font-medium">Your message</label><textarea id="m" rows="5" className="field" value={f.msg} onChange={set("msg")} required /></div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Btn href={ok ? waLink(body) : undefined} aria-disabled={!ok} onClick={guard}>Send via WhatsApp</Btn>
          <Btn variant="dark" href={ok ? `mailto:${BUSINESS.email}?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(body)}` : undefined} aria-disabled={!ok} onClick={guard}>Send via Email</Btn>
        </div>
        {!ok && <p className="mt-3 text-xs text-charcoal/55">Enter your name and message to enable sending.</p>}
      </form>
    </section>
  );
}
