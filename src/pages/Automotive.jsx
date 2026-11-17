import { Btn, SectionHeading, Img, ContactCTA, Reveal } from "../components/ui.jsx";
import { services, steps, waLink, AUTO_MSG, IMG } from "../data.js";

export default function Automotive() {
  return (<>
    <section className="bg-navy text-ivory"><div className="wrap grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-14 lg:py-24">
      <div><h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">Your Vehicle Journey, Made Simpler.</h1>
        <p className="mt-6 text-ivory/70">From vehicle sourcing to transportation and clearing, Manyaleza Suppliers helps customers navigate the vehicle procurement process.</p>
        <div className="mt-8"><Btn href={waLink(AUTO_MSG)}>Automotive Enquiry</Btn></div></div>
      <Img priority src={IMG.autoHero} alt="Vehicle transport on the road" />
    </div></section>

    <section className="wrap sec space-y-14 md:space-y-24">
      {services.map((s, i) => (
        <Reveal key={s.id} id={s.id} className="group grid items-center gap-6 md:grid-cols-12 md:gap-12">
          <div className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}><Img src={s.image} alt={s.title} ratio="aspect-[16/10]" /></div>
          <div className="md:col-span-5"><p className="text-sm font-medium text-accent">0{i + 1}</p><h2 className="mt-2 text-2xl font-semibold leading-tight sm:text-3xl">{s.title}</h2><p className="mt-3 text-charcoal/70">{s.text}</p>
            <div className="mt-6"><Btn variant="dark" href={waLink(`Hello Manyaleza Suppliers, I would like to enquire about ${s.title}.`)}>Enquire about this</Btn></div></div>
        </Reveal>))}
    </section>

    <section className="sec bg-mist"><Reveal className="wrap">
      <SectionHeading kicker="Process" title="How it works" text="The services involved depend on the agreement made with each customer." />
      <ol className="mt-12 grid gap-0 md:grid-cols-5 md:gap-6">{steps.map((t, i) => (
        <li key={t} className="relative border-l border-line pb-8 pl-8 last:border-transparent last:pb-0 md:border-0 md:pb-0 md:pl-0">
          <span className="absolute -left-5 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white md:static">{i + 1}</span>
          {i < steps.length - 1 && <span aria-hidden="true" className="absolute left-12 -right-6 top-5 hidden h-px bg-line md:block" />}
          <p className="pt-2 text-sm leading-relaxed md:pt-4 md:pr-2">{t}</p>
        </li>))}</ol>
    </Reveal></section>
    <ContactCTA />
  </>);
}
