import { useEffect, useState, useCallback, useRef } from "react";
import { Navbar, Footer, ProductDetailModal } from "./components/ui.jsx";
import { categories } from "./data.js";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Automotive from "./pages/Automotive.jsx";
import Supplies from "./pages/Supplies.jsx";
import Contact from "./pages/Contact.jsx";

const links = [["Home", ""], ["About", "about"], ["Automotive", "automotive"], ["Supplies", "supplies"], ["Contact", "contact"]];
const meta = {
  "": ["Manyaleza Suppliers | Vehicle Sourcing and General Supplies, Zambia", "Vehicle sourcing, transit and clearing coordination, plus electronics, workwear, stationery and more. Based in Ndola, Zambia."],
  about: ["About Us | Manyaleza Suppliers", "Manyaleza Suppliers is an Ndola-based business in automotive logistics and general supplies."],
  automotive: ["Automotive Services | Manyaleza Suppliers", "Vehicle sales, sourcing, transit from Dar es Salaam, clearing at Dar Port and Nakonde, and delivery to Zambia."],
  supplies: ["General Supplies Catalogue | Manyaleza Suppliers", "Browse electronics, stationery, safety equipment, bags, clothing and Nakonde rice. Enquire on WhatsApp."],
  contact: ["Contact | Manyaleza Suppliers", "Contact Manyaleza Suppliers in Ndola, Zambia by WhatsApp, phone or email."],
};
const getRoute = () => { const r = window.location.hash.replace(/^#\/?/, ""); return r in meta ? r : ""; };
const pages = { "": Home, about: About, automotive: Automotive, supplies: Supplies, contact: Contact };

export default function App() {
  const [route, setRoute] = useState(getRoute());
  const [sel, setSel] = useState(null);
  const trigger = useRef(null);
  const open = useCallback((p, el) => { trigger.current = el; setSel(p); }, []);
  const close = useCallback(() => { setSel(null); trigger.current?.focus(); }, []);
  useEffect(() => {
    const h = () => { setRoute(getRoute()); window.scrollTo({ top: 0, behavior: "instant" }); };
    window.addEventListener("hashchange", h);
    return () => window.removeEventListener("hashchange", h);
  }, []);
  useEffect(() => {
    const [t, d] = meta[route]; document.title = t;
    const m = document.querySelector('meta[name="description"]'); if (m) m.content = d;
  }, [route]);
  const Page = pages[route];
  return (<>
    <Navbar route={route} links={links} />
    <main><div key={route} className="page"><Page onOpen={open} /></div></main>
    <Footer links={links} />
    <ProductDetailModal p={sel} catName={sel && categories.find((c) => c.id === sel.cat).name} onClose={close} />
  </>);
}
