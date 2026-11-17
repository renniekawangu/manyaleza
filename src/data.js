// Content lives here, separate from presentation. Only verified facts; no prices, stock, stats or reviews.
// Stand-in photos from stable public URLs. Replace with the client's own product photos before launch.
export const stock = (kw, n, w = 800, h = 600) => {
  const map = {
    "car,suv": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    "car,vehicle": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    "warehouse,goods": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    "truck,highway": "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80",
    "office,business": "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    "car,dealership": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    "car,keys": "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
    "truck,transport": "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1200&q=80",
    "shipping,container": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    "delivery,van": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    "bluetooth,speaker": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
    "earbuds,wireless": "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=900&q=80",
    "stationery,notebook": "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    "work,boots": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
    "workwear,overalls": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    "cotton,clothes": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    backpack: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
    "laptop,bag": "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80",
    "rice,grain": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80",
  };

  return map[kw] ?? `https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
};

export const LAPTOP_IMG = "https://images.unsplash.com/photo-1709721821603-8f0f11ce3e0d?fm=jpg&q=70&w=800&auto=format&fit=crop";
export const IMG = {
  hero: stock("car,suv", 11, 1000, 800), autoDivision: stock("car,vehicle", 12), suppliesDivision: stock("warehouse,goods", 13),
  autoHero: stock("truck,highway", 14, 1000, 800), about: stock("office,business", 15, 800, 1000),
};

export const BUSINESS = {
  name: "Manyaleza Suppliers",
  location: "Ndola, Zambia",
  email: "zanginisuppliers@gmail.com",
  phone: "+260 760 820 239", // confirm before production deployment
  wa: "260760820239",
};

export const waLink = (text) => `https://wa.me/${BUSINESS.wa}?text=${encodeURIComponent(text)}`;
export const productEnquiry = (n) => waLink(`Hello Manyaleza Suppliers, I would like to enquire about ${n}. Please share the current price and availability.`);
export const GENERAL_MSG = "Hello Manyaleza Suppliers, I would like to make an enquiry.";
export const AUTO_MSG = "Hello Manyaleza Suppliers, I would like to enquire about your vehicle services.";

export const services = [
  { id: "sales", image: stock("car,dealership", 41), title: "Vehicle Sales", text: "Vehicles available through our dealership services. Ask us about what is currently on offer." },
  { id: "sourcing", image: stock("car,keys", 42), title: "Vehicle Sourcing and Ordering", text: "Tell us the vehicle you need and we discuss sourcing and ordering it on your behalf." },
  { id: "transit", image: stock("truck,transport", 43), title: "Transit from Dar es Salaam", text: "Transportation of vehicles from Dar es Salaam, Tanzania, to destinations across Zambia." },
  { id: "clearing", image: stock("shipping,container", 44), title: "Clearing at Dar Port and Nakonde", text: "Clearing arrangements at Dar es Salaam Port and Nakonde through our stated agent network." },
  { id: "delivery", image: stock("delivery,van", 45), title: "Vehicle Delivery", text: "Delivery of your vehicle to you, arranged and agreed with you directly." },
];

export const steps = [
  "You submit a vehicle request.",
  "We discuss vehicle sourcing and procurement.",
  "Transportation arrangements are coordinated.",
  "Clearing arrangements are handled.",
  "Delivery is arranged with you.",
];

export const why = [
  ["Multiple categories", "Vehicles and everyday supplies from one business."],
  ["Sourcing assistance", "Help finding and ordering the vehicle you need."],
  ["Transit and clearing coordination", "Support from Dar es Salaam through to Zambia."],
  ["Direct communication", "Talk to us directly on WhatsApp, phone or email."],
  ["Serving customers across Zambia", "Based in Ndola, working with clients nationwide."],
];

export const categories = [
  { id: "electronics", name: "Electronics" },
  { id: "stationery", name: "Stationery" },
  { id: "safety", name: "Safety Equipment" },
  { id: "clothing", name: "Clothing and Accessories" },
  { id: "bags", name: "Backpacks and Laptop Bags" },
  { id: "rice", name: "Nakonde Rice" },
];

// image: set to a path like "/products/laptop.jpg" once real photos are supplied. null shows a neutral placeholder.
export const products = [
  { id: 1, name: "Laptops", cat: "electronics", desc: "Laptops for work, study and business. Ask about available models.", image: LAPTOP_IMG, featured: true },
  { id: 2, name: "Bluetooth Speakers", cat: "electronics", desc: "Portable Bluetooth speakers. Ask about available models.", image: stock("bluetooth,speaker", 22), featured: true },
  { id: 3, name: "AirPods", cat: "electronics", desc: "Wireless earbuds. Ask about available options.", image: stock("earbuds,wireless", 23) },
  { id: 4, name: "Stationery", cat: "stationery", desc: "Office and school stationery supplies, including bulk orders.", image: stock("stationery,notebook", 24) },
  { id: 5, name: "Safety Boots", cat: "safety", desc: "Safety boots for work sites and industrial use.", image: stock("work,boots", 25), featured: true },
  { id: 6, name: "Work Suits", cat: "safety", desc: "Work suits and workwear for businesses and individuals.", image: stock("workwear,overalls", 26) },
  { id: 7, name: "Boxers", cat: "clothing", desc: "Men's boxers. Ask about available sizes.", image: stock("cotton,clothes", 27) },
  { id: 8, name: "Backpacks", cat: "bags", desc: "Backpacks for school, work and travel.", image: stock("backpack", 28), featured: true },
  { id: 9, name: "Laptop Bags", cat: "bags", desc: "Laptop bags for carrying and protecting your device.", image: stock("laptop,bag", 29) },
  { id: 10, name: "Nakonde Rice", cat: "rice", desc: "Nakonde rice. Ask about available pack sizes.", image: stock("rice,grain", 30), featured: true },
];
