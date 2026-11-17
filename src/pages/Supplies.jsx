import { useMemo, useState } from "react";
import { SectionHeading, ProductCard, Btn, ContactCTA } from "../components/ui.jsx";
import { products, categories, waLink } from "../data.js";

export default function Supplies({ onOpen }) {
  const [q, setQ] = useState(""); const [cat, setCat] = useState("all");
  const name = (id) => categories.find((c) => c.id === id).name;
  const list = useMemo(() => { const s = q.trim().toLowerCase(); return products.filter((p) => (cat === "all" || p.cat === cat) && (!s || `${p.name} ${p.desc}`.toLowerCase().includes(s))); }, [q, cat]);
  const active = q.trim() || cat !== "all";
  const reset = () => { setQ(""); setCat("all"); };
  return (<>
    <section className="wrap sec">
      <SectionHeading kicker="General Supplies" title="Catalogue" text="Browse our product categories and enquire directly on WhatsApp." />
      <div className="mt-8 md:mt-10">
        <label className="text-sm font-medium" htmlFor="s">Search products</label>
        <div className="relative">
          <input id="s" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by product name" className="field pr-12" />
          {q && <button onClick={() => setQ("")} aria-label="Clear search" className="absolute right-1 top-1.5 flex h-11 w-11 items-center justify-center text-xl text-charcoal/60 transition-colors duration-[160ms] hover:text-charcoal">×</button>}
        </div>
        <div role="group" aria-label="Filter by category" className="-mx-5 mt-4 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
          {[{ id: "all", name: "All" }, ...categories].map((c) => (
            <button key={c.id} onClick={() => setCat(c.id)} aria-pressed={cat === c.id}
              className={`min-h-[44px] shrink-0 whitespace-nowrap rounded-full border px-5 text-sm transition-colors duration-[160ms] ${cat === c.id ? "border-accent bg-accent text-white" : "border-line bg-white hover:border-accent hover:text-accent"}`}>{c.name}</button>))}
        </div>
        <div className="mt-6 flex min-h-[28px] items-center justify-between gap-4 text-sm text-charcoal/60" aria-live="polite">
          <p>Showing {list.length} of {products.length} products</p>
          {active && <button onClick={reset} className="font-medium text-accent underline underline-offset-4">Clear filters</button>}
        </div>
      </div>
      {list.length ? <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map((p) => <ProductCard key={p.id} p={p} catName={name(p.cat)} onOpen={onOpen} />)}</div> : (
        <div className="mt-6 border border-dashed border-line bg-white px-6 py-14 text-center">
          <p className="text-xl font-semibold">No products found</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-charcoal/70">{q.trim() ? `Nothing matches "${q.trim()}".` : "Nothing in this category yet."} Try another search, or ask us. We may be able to help.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3"><Btn variant="dark" href="#" onClick={(e) => { e.preventDefault(); reset(); }}>Clear filters</Btn><Btn href={waLink(`Hello Manyaleza Suppliers, I am looking for "${q.trim() || "a product"}". Can you help?`)}>Ask on WhatsApp</Btn></div>
        </div>)}
    </section>
    <ContactCTA />
  </>);
}
