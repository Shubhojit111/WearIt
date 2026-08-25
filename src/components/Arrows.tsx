import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

type Props = {
  onPrev: () => void;
  onNext: () => void;
};

export default function Arrows({ onPrev, onNext }: Props) {
  return (
    <div className="absolute left-[5.5%] top-[21%] z-20 flex items-center gap-[10px]">
      <button
        aria-label="Previous jacket"
        onClick={onPrev}
        className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white/25 active:scale-90"
      >
        <ChevronLeftIcon className="h-[13px] w-[13px]" />
      </button>
      <button
        aria-label="Next jacket"
        onClick={onNext}
        className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white/25 active:scale-90"
      >
        <ChevronRightIcon className="h-[13px] w-[13px]" />
      </button>
    </div>
  );
}
