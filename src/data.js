// Content lives here, separate from presentation. Only verified facts; no prices, stock, stats or reviews.
const localAsset = (filename) => `/assets/${filename}`;

export const stock = (kw, n, w = 800, h = 600) => {
  const map = {
    "car,suv": localAsset("hero_car.jpeg"),
    "car,vehicle": localAsset("front_view_car.jpeg"),
    "warehouse,goods": localAsset("calculator.jpg"),
    "truck,highway": localAsset("better_plate_car.jpg"),
    "office,business": localAsset("car_deal.png"),
    "car,dealership": localAsset("front_view_car.jpeg"),
    "car,keys": localAsset("hero_car.jpeg"),
    "truck,transport": localAsset("plate_car.jpg"),
    "shipping,container": localAsset("portview.png"),
    "delivery,van": localAsset("front_view_car.jpeg"),
    "bluetooth,speaker": localAsset("speaker.jpg"),
    "earbuds,wireless": localAsset("pods.jpg"),
    "stationery,notebook": localAsset("calculator.jpg"),
    "work,boots": localAsset("safetyboots.jpg"),
    "workwear,overalls": localAsset("worksuit.jpeg"),
    "cotton,clothes": localAsset("boxers.jpg"),
    backpack: localAsset("bagpack.jpg"),
    "laptop,bag": localAsset("laptopbag.jpg"),
    "rice,grain": localAsset("rice.jpg"),
  };

  return map[kw] ?? localAsset("front_view_car.jpeg");
};

export const LAPTOP_IMG = localAsset("laptop.webp");
export const IMG = {
  hero: localAsset("hero_car.jpeg"),
  autoDivision: localAsset("front_view_car.jpeg"),
  suppliesDivision: localAsset("pods.jpg"),
  autoHero: localAsset("better_plate_car.jpg"),
  about: localAsset("car_deal.png"),
};

export const BUSINESS = {
  name: "Manyaleza Suppliers",
  location: "Ndola, Zambia",
  email: "zanginisuppliers@gmail.com",
  phone: "+260 760 820 239", // confirm before production deployment
  wa: "260760820239",
};

export const waLink = (text) => `https://wa.me/${BUSINESS.wa}?text=${encodeURIComponent(text)}`;
export const productUrl = (p) => {
  if (!p.image) return "";
  if (typeof window === "undefined") return p.image;
  return new URL(p.image, window.location.origin).toString();
};
export const productEnquiry = (p) => {
  const link = productUrl(p);
  const message = [
    "Hello Manyaleza Suppliers,",
    "",
    `I would like to enquire about ${p.name}.`,
    "Please share the current price and availability.",
    ...(link ? ["", `Product link: ${link}`] : [""]),
  ].join("\n");
  return waLink(message);
};
export const GENERAL_MSG = "Hello Manyaleza Suppliers, I would like to make an enquiry.";
export const AUTO_MSG = "Hello Manyaleza Suppliers, I would like to enquire about your vehicle services.";

export const services = [
  { id: "sales", image: localAsset("front_view_car.jpeg"), title: "Vehicle Sales", text: "Vehicles available through our dealership services. Ask us about what is currently on offer." },
  { id: "sourcing", image: localAsset("hero_car.jpeg"), title: "Vehicle Sourcing and Ordering", text: "Tell us the vehicle you need and we discuss sourcing and ordering it on your behalf." },
  { id: "transit", image: localAsset("plate_car.jpg"), title: "Transit from Dar es Salaam", text: "Transportation of vehicles from Dar es Salaam, Tanzania, to destinations across Zambia." },
  { id: "clearing", image: localAsset("portview.png"), title: "Clearing at Dar Port and Nakonde", text: "Clearing arrangements at Dar es Salaam Port and Nakonde through our stated agent network." },
  { id: "delivery", image: localAsset("front_view_car.jpeg"), title: "Vehicle Delivery", text: "Delivery of your vehicle to you, arranged and agreed with you directly." },
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
  { id: 2, name: "Bluetooth Speakers", cat: "electronics", desc: "Portable Bluetooth speakers. Ask about available models.", image: localAsset("speaker.jpg"), featured: true },
  { id: 3, name: "AirPods", cat: "electronics", desc: "Wireless earbuds. Ask about available options.", image: localAsset("pods.jpg") },
  { id: 4, name: "Stationery", cat: "stationery", desc: "Office and school stationery supplies, including bulk orders.", image: localAsset("calculator.jpg") },
  { id: 5, name: "Safety Boots", cat: "safety", desc: "Safety boots for work sites and industrial use.", image: localAsset("safetyboots.jpg"), featured: true },
  { id: 6, name: "Work Suits", cat: "safety", desc: "Work suits and workwear for businesses and individuals.", image: localAsset("worksuit.jpeg") },
  { id: 7, name: "Boxers", cat: "clothing", desc: "Men's boxers. Ask about available sizes.", image: localAsset("boxers.jpg") },
  { id: 8, name: "Backpacks", cat: "bags", desc: "Backpacks for school, work and travel.", image: localAsset("bagpack.jpg"), featured: true },
  { id: 9, name: "Laptop Bags", cat: "bags", desc: "Laptop bags for carrying and protecting your device.", image: localAsset("laptopbag.jpg") },
  { id: 10, name: "Nakonde Rice", cat: "rice", desc: "Nakonde rice. Ask about available pack sizes.", image: localAsset("rice.jpg"), featured: true },
];
