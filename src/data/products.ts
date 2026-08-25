import { SLIDES } from "./slides";
import beanie from "../assets/prod-beanie.png";
import pants from "../assets/prod-pants.png";
import sneakers from "../assets/prod-sneakers.png";

export type Product = {
  id: string;
  name: string;
  price: number;
  compareAt?: number;
  img: string;
  bgClass: string;
  tag?: string;
  kind: "jacket" | "accessory";
  desc: string;
};

const DARK = "bg-[#1f1f1f]";

export const PRODUCTS: Product[] = [
  ...SLIDES.map((s) => ({
    id: s.id,
    name: s.product,
    price: 149,
    compareAt: 199,
    img: s.img,
    bgClass: s.bgClass,
    tag: s.tag,
    kind: "jacket" as const,
    desc: "A glossy cropped puffer with a high standing collar and cloud-soft recycled fill. Lightweight warmth that elevates even the simplest outfit.",
  })),
  {
    id: "beanie",
    name: "Beanie Cap",
    price: 29,
    img: beanie,
    bgClass: DARK,
    tag: "Accessory",
    kind: "accessory",
    desc: "Ribbed knit beanie in soft black yarn. One size, zero fuss.",
  },
  {
    id: "cargo",
    name: "Minimal Cargo Pants",
    price: 69,
    img: pants,
    bgClass: DARK,
    tag: "Accessory",
    kind: "accessory",
    desc: "Straight-cut cargo pants in matte black. Utility pockets, clean lines.",
  },
  {
    id: "sneakers",
    name: "Street Sneakers",
    price: 99,
    img: sneakers,
    bgClass: DARK,
    tag: "Accessory",
    kind: "accessory",
    desc: "Everyday black leather sneakers with a cushioned street sole.",
  },
];

export const byId = (id?: string) => PRODUCTS.find((p) => p.id === id);

export const SIZES = ["36", "38", "40"];
