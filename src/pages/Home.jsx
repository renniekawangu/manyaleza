import { Btn, SectionHeading, Img, ProductCard, ContactCTA, Reveal } from "../components/ui.jsx";
import { products, categories, why, IMG } from "../data.js";

const AUTO = ["Vehicle sourcing", "Vehicle sales", "Vehicle transit", "Clearing services", "Vehicle delivery"];
const SUPPLY = ["Electronics", "Stationery", "Safety equipment", "Clothing and accessories", "Bags and backpacks", "Rice and other supplies"];

const Division = ({ title, items, img, alt, href, cta }) => (
  <Reveal className="group flex flex-col bg-white">
    <Img src={img} alt={alt} ratio="aspect-[16/10]" />
    <div className="flex flex-1 flex-col p-6 md:p-8">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <ul className="mt-5 grid gap-x-6 text-sm text-charcoal/75 sm:grid-cols-2">{items.map((i) => <li key={i} className="border-t border-line py-2.5">{i}</li>)}</ul>
      <div className="mt-auto pt-6"><Btn variant="dark" href={href}>{cta}</Btn></div>
    </div>
  </Reveal>
);

export default function Home({ onOpen }) {
  const cat = (id) => categories.find((c) => c.id === id).name;
  return (<>
    <section className="bg-navy text-ivory"><div className="wrap grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-14 lg:py-24">
      <div>
        <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">Reliable Sourcing. Quality Supplies.</h1>
        <p className="mt-6 max-w-xl text-ivory/70">Your trusted partner in vehicle sourcing, automotive logistics and general supplies. Connecting individuals and businesses to the products and services they need.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Btn href="#/automotive">Explore Our Services</Btn><Btn variant="line" href="#/contact">Contact Us</Btn></div>
      </div>
      <Img priority src={IMG.hero} alt="Cars and vehicle logistics" ratio="aspect-[4/3]" />
    </div></section>

    <section className="sec"><Reveal className="wrap grid gap-6 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-5"><p className="mb-3 text-sm font-medium text-accent">About</p><h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">More Than Just a Supplier.</h2></div>
      <p className="text-charcoal/75 lg:col-span-7 lg:pt-9">Manyaleza Suppliers, based in Ndola, operates across automotive sourcing, vehicle logistics and general supplies, helping individuals and businesses get what they need.</p>
    </Reveal></section>

    <section className="wrap grid gap-6 pb-16 md:grid-cols-2 md:gap-8 md:pb-24">
      <Division title="Automotive and Vehicle Logistics" items={AUTO} img={IMG.autoDivision} alt="Vehicles" href="#/automotive" cta="Explore Automotive Services" />
      <Division title="General Supplies" items={SUPPLY} img={IMG.suppliesDivision} alt="General supplies and goods" href="#/supplies" cta="Browse Catalogue" />
    </section>

    <section className="sec bg-mist"><div className="wrap">
      <Reveal className="flex flex-wrap items-end justify-between gap-4"><SectionHeading kicker="Catalogue" title="Featured products" /><Btn variant="dark" href="#/supplies">View full catalogue</Btn></Reveal>
      <Reveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{products.filter((p) => p.featured).map((p) => <ProductCard key={p.id} p={p} catName={cat(p.cat)} onOpen={onOpen} />)}</Reveal>
    </div></section>

    <section className="sec"><Reveal className="wrap"><SectionHeading kicker="Why Manyaleza" title="Why choose Manyaleza?" />
      <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">{why.map(([t, d]) => <div key={t} className="border-t border-line pt-4"><dt className="font-semibold">{t}</dt><dd className="mt-1 text-sm text-charcoal/70">{d}</dd></div>)}</dl>
    </Reveal></section>
    <ContactCTA />
  </>);
}
