import { useState } from "react";
import { useShop } from "../context/ShopContext";
import { SLIDES } from "../data/slides";
import { ChevronRightIcon } from "./icons";

const SIZES = ["36", "38", "40"];

export default function BuyPanel() {
  const [size, setSize] = useState("36");
  const { addToCart } = useShop();
  return (
    <div className="absolute right-[5%] top-[25%] z-20 flex w-[190px] flex-col items-center">
      <div className="text-[36px] font-medium leading-[44px] text-white">$149</div>
      <div className="mt-[2px] text-[30px] leading-[38px] text-white/45 line-through decoration-white/60 decoration-[2px]">
        $199
      </div>
      <div className="mt-[56px] text-[12px] leading-[16px] text-white/75">
        Choose your size:
      </div>
      <div className="mt-[34px] flex items-center gap-[15px]">
        {SIZES.map((s) => (
          <button
            key={s}
            onClick={() => setSize(s)}
            className={`flex h-[34px] w-[34px] items-center justify-center rounded-full text-[11px] transition-all duration-200 ${
              size === s
                ? "bg-white font-medium text-[#202020]"
                : "bg-black/25 text-white/90 hover:bg-black/40"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
      <button
        onClick={() => addToCart(SLIDES[1].id, size)}
        className="group mt-[34px] inline-flex h-[40px] items-center gap-[8px] rounded-full bg-white pl-[24px] pr-[16px] text-[12px] font-semibold text-[#1c1c1c] transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
      >
        Add to Bag
        <ChevronRightIcon className="h-[11px] w-[11px] transition-transform duration-200 group-hover:translate-x-[2px]" />
      </button>
    </div>
  );
}
