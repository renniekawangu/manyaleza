import { SectionHeading, Img, ContactCTA } from "../components/ui.jsx";
import { BUSINESS, IMG } from "../data.js";

export default function About() {
  const facts = [["Location", BUSINESS.location], ["Divisions", "Automotive logistics and general supplies"], ["Contact", BUSINESS.email]];
  return (<>
    <section className="wrap sec grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-7">
        <SectionHeading kicker="About Us" title="A supplier built around what customers need." />
        <div className="mt-6 space-y-4 text-charcoal/75">
          <p>Manyaleza Suppliers is based in {BUSINESS.location} and works across two areas: automotive and vehicle logistics, and general supplies.</p>
          <p>On the automotive side, we handle vehicle sales, sourcing and ordering, transit from Dar es Salaam, clearing at Dar es Salaam Port and Nakonde, and delivery. On the supplies side we offer electronics, stationery, safety equipment, clothing, bags and Nakonde rice.</p>
        </div>
        <dl className="mt-10 grid gap-6 sm:grid-cols-3">{facts.map(([t, d]) => <div key={t} className="border-t border-line pt-3"><dt className="text-xs text-charcoal/55">{t}</dt><dd className="mt-1 text-sm font-medium [overflow-wrap:anywhere]">{d}</dd></div>)}</dl>
        <p className="mt-8 text-sm text-charcoal/55">Business description to be approved by the client.</p>
      </div>
      <div className="lg:col-span-5"><Img priority src={IMG.about} alt="Business office" ratio="aspect-[4/5]" /></div>
    </section>
    <ContactCTA />
  </>);
}
