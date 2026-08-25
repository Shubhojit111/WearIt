import black from "../assets/jacket-black.png";
import orange from "../assets/jacket-orange.png";
import white from "../assets/jacket-white.png";
import red from "../assets/jacket-red.png";

export type Slide = {
  id: string;
  name: string;
  product: string;
  tag: string;
  img: string;
  /** tailwind class for the per-slide card background */
  bgClass: string;
};

/** circular carousel order, as observed in the reference video */
export const SLIDES: Slide[] = [
  {
    id: "orange",
    name: "Ember Orange",
    product: "Ember Puffer",
    tag: "Best Seller",
    img: orange,
    bgClass:
      "bg-[image:radial-gradient(120%_95%_at_50%_42%,#b26118_0%,#9c5013_52%,#7d3e0d_100%)]",
  },
  {
    id: "black",
    name: "Onyx Black",
    product: "Onyx Puffer",
    tag: "The Icon",
    img: black,
    bgClass:
      "bg-[image:radial-gradient(120%_95%_at_50%_42%,#282828_0%,#1c1c1c_52%,#141414_100%)]",
  },
  {
    id: "white",
    name: "Cloud White",
    product: "Cloud Puffer",
    tag: "New Arrival",
    img: white,
    bgClass:
      "bg-gray-400",
  },
  {
    id: "red",
    name: "Crimson Red",
    product: "Crimson Puffer",
    tag: "Limited",
    img: red,
    bgClass:
      "bg-[image:radial-gradient(120%_95%_at_50%_42%,#a41616_0%,#8d1010_52%,#730c0c_100%)]",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "The Onyx Puffer is the first jacket I reach for every single morning. It's warm without the bulk — I forget I'm wearing it.",
    name: "Aisha Rahman",
    role: "Verified buyer · Kolkata",
  },
  {
    quote:
      "I bought the Ember for city winters and ended up wearing it everywhere. The colour gets me compliments every time.",
    name: "Daniel Fernandes",
    role: "Verified buyer · Mumbai",
  },
  {
    quote:
      "Lightweight, soft, and the fit is perfect. Ordered the Cloud White a week after my first one arrived.",
    name: "Meera Iyer",
    role: "Verified buyer · Bengaluru",
  },
];
