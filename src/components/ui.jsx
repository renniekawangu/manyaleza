import { useState, useEffect, useRef } from "react";
import { BUSINESS, waLink, GENERAL_MSG, productEnquiry } from "../data.js";

export const Btn = ({ href, onClick, variant = "accent", children, ...r }) => {
  const ext = href?.startsWith("http");
  const cls = { accent: "bg-accent text-white hover:bg-[#174A8B]", dark: "bg-navy text-ivory hover:bg-[#0A1F38]", line: "border border-current hover:bg-white/10" }[variant];
  return <a href={href} onClick={onClick} {...(ext && { target: "_blank", rel: "noreferrer" })} {...r}
    className={`inline-flex min-h-[48px] items-center justify-center rounded-full px-7 text-sm font-semibold transition-colors duration-[160ms] ease-out aria-disabled:cursor-not-allowed aria-disabled:opacity-50 ${cls}`}>{children}</a>;
};

export const SectionHeading = ({ kicker, title, text, light }) => (
  <div className="max-w-2xl">
    {kicker && <p className="mb-3 text-sm font-medium text-accent">{kicker}</p>}
    <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{title}</h2>
    {text && <p className={`mt-4 ${light ? "text-ivory/70" : "text-charcoal/70"}`}>{text}</p>}
  </div>
);

// Reveals content only if it starts below the fold; never hides anything before JS runs.
export function Reveal({ children, className = "", as: Tag = "div", ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
    el.dataset.reveal = "hidden";
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.dataset.reveal = "shown"; io.disconnect(); } }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={className} {...rest}>{children}</Tag>;
}

// Fixed aspect ratio prevents layout shift. Neutral placeholder when there is no photo or it fails to load.
export function Img({ src, alt, ratio = "aspect-[4/3]", label = "Photograph to be supplied", priority }) {
  const [state, setState] = useState(src ? "loading" : "none");
  const ok = src && state !== "error";
  return (
    <div className={`relative overflow-hidden bg-line ${ratio}`}>
      {ok && <img src={src} alt={alt} decoding="async" loading={priority ? "eager" : "lazy"} onLoad={() => setState("ok")} onError={() => setState("error")}
        className={`h-full w-full object-cover transition-[transform,opacity] duration-[350ms] ease-out group-hover:scale-[1.03] ${state === "ok" ? "opacity-100" : "opacity-0"}`} />}
      {(!ok || state === "loading") && (
        <div role="img" aria-label={`${alt} (no photograph available yet)`} className="absolute inset-0 flex items-center justify-center text-xs text-charcoal/45">
          {state === "loading" ? "Loading…" : label}
        </div>
      )}
    </div>
  );
}

export function Navbar({ route, links }) {
  const [open, setOpen] = useState(false);
  const btn = useRef(null);
  useEffect(() => setOpen(false), [route]);
  useEffect(() => {
    if (!open) return;
    const k = (e) => { if (e.key === "Escape") { setOpen(false); btn.current?.focus(); } };
    document.addEventListener("keydown", k);
    return () => document.removeEventListener("keydown", k);
  }, [open]);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/90 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#/" className="text-lg font-semibold tracking-tight">Manyaleza<span className="text-accent"> Suppliers</span></a>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map(([l, r]) => <a key={r} href={`#/${r}`} aria-current={route === r ? "page" : undefined}
            className={`border-b-2 py-1 text-sm transition-colors duration-[180ms] ${route === r ? "border-accent text-charcoal" : "border-transparent text-charcoal/60 hover:text-charcoal"}`}>{l}</a>)}
        </nav>
        <button ref={btn} className="-mr-3 flex h-12 w-12 items-center justify-center text-2xl leading-none md:hidden" aria-expanded={open} aria-controls="mnav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? "×" : "≡"}</button>
      </div>
      <nav id="mnav" aria-label="Mobile" aria-hidden={!open}
        className={`absolute inset-x-0 top-full border-b border-line bg-ivory md:hidden transition-[opacity,transform,visibility] duration-[220ms] ease-out ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}>
        <div className="wrap pb-3">
          {links.map(([l, r]) => <a key={r} href={`#/${r}`} aria-current={route === r ? "page" : undefined}
            className={`block border-b border-line/70 py-3.5 text-base last:border-0 ${route === r ? "font-semibold text-accent" : ""}`}>{l}</a>)}
        </div>
      </nav>
    </header>
  );
}

export const Footer = ({ links }) => (
  <footer className="bg-navy text-ivory">
    <div className="wrap grid gap-10 py-14 md:grid-cols-3 md:py-16">
      <div><p className="text-lg font-semibold">Manyaleza<span className="text-[#8DB8EA]"> Suppliers</span></p><p className="mt-2 max-w-xs text-sm text-ivory/60">Vehicle sourcing, automotive logistics and general supplies.</p></div>
      <nav aria-label="Footer" className="grid content-start gap-2 text-sm">{links.map(([l, r]) => <a key={r} href={`#/${r}`} className="w-fit text-ivory/70 transition-colors duration-[180ms] hover:text-[#8DB8EA]">{l}</a>)}</nav>
      <div className="space-y-1 text-sm text-ivory/70">
        <p>{BUSINESS.location}</p>
        <p><a className="transition-colors duration-[180ms] hover:text-[#8DB8EA]" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></p>
        <p><a className="transition-colors duration-[180ms] hover:text-[#8DB8EA]" href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}>{BUSINESS.phone}</a></p>
      </div>
    </div>
    <p className="border-t border-white/10 py-5 text-center text-xs text-ivory/45">© 2026 Manyaleza Suppliers · Powered by B34ST Web Services</p>
  </footer>
);

export const ContactCTA = () => (
  <section className="sec bg-navy text-ivory"><Reveal className="wrap">
    <SectionHeading light title="Looking for a Product or a Vehicle?" text="Talk to Manyaleza Suppliers about your requirements. Our team will be happy to assist." />
    <div className="mt-8 flex flex-wrap gap-3">
      <Btn href={waLink(GENERAL_MSG)}>Chat on WhatsApp</Btn>
      <Btn variant="line" href={`mailto:${BUSINESS.email}`}>Send an Email</Btn>
    </div>
  </Reveal></section>
);

export function ProductCard({ p, catName, onOpen }) {
  return (
    <article className="group flex h-full flex-col border border-line bg-white transition-[transform,box-shadow] duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-md">
      <button onClick={(e) => onOpen(p, e.currentTarget)} className="flex flex-1 flex-col text-left" aria-label={`View details for ${p.name}`}>
        <Img src={p.image} alt={p.name} ratio="aspect-[4/3]" />
        <div className="flex-1 p-5 pb-4"><p className="text-xs font-medium text-accent">{catName}</p><h3 className="mt-1 text-lg font-semibold leading-snug">{p.name}</h3><p className="mt-1.5 text-sm text-charcoal/70">{p.desc}</p></div>
      </button>
      <div className="px-5 pb-5"><Btn variant="dark" href={productEnquiry(p.name)}>Enquire on WhatsApp</Btn></div>
    </article>
  );
}

export function ProductDetailModal({ p, catName, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!p) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ref.current?.querySelector("[data-autofocus]")?.focus();
    const k = (e) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab" || !ref.current) return;
      const f = ref.current.querySelectorAll("a[href], button:not([disabled])");
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", k);
    return () => { document.removeEventListener("keydown", k); document.body.style.overflow = prev; };
  }, [p, onClose]);
  if (!p) return null;
  return (
    <div className="backdrop-in fixed inset-0 z-50 flex items-end justify-center bg-navy/70 sm:items-center sm:p-6" onClick={onClose}>
      <div ref={ref} role="dialog" aria-modal="true" aria-labelledby="pm-title" onClick={(e) => e.stopPropagation()}
        className="modal-in relative max-h-[92vh] w-full max-w-3xl overflow-y-auto bg-white sm:grid sm:grid-cols-2">
        <button data-autofocus onClick={onClose} aria-label="Close" className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow transition-colors duration-[160ms] hover:bg-ivory">×</button>
        <Img src={p.image} alt={p.name} ratio="aspect-[4/3] sm:aspect-square" />
        <div className="flex flex-col p-6 sm:p-8">
          <p className="text-xs font-medium text-accent">{catName}</p>
          <h3 id="pm-title" className="mt-1 text-2xl font-semibold">{p.name}</h3>
          <p className="mt-3 text-charcoal/75">{p.desc}</p>
          <p className="mt-3 text-sm text-charcoal/55">Price and availability on enquiry.</p>
          <div className="mt-6"><Btn href={productEnquiry(p.name)}>Enquire on WhatsApp</Btn></div>
        </div>
      </div>
    </div>
  );
}
