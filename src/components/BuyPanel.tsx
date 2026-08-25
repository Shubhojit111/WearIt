import { useState } from "react";

const SIZES = ["36", "38", "40"];

export default function BuyPanel() {
  const [size, setSize] = useState("36");
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
    </div>
  );
}
