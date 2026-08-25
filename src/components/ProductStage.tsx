import { AnimatePresence, motion } from "framer-motion";
import { SLIDES } from "../data/slides";

type Props = {
  index: number;
  direction: number;
};

const EASE = [0.4, 0, 0.2, 1] as const;
const DUR = 0.95;

/** offset of the bottom-right "next" thumbnail, relative to stage center */
const THUMB = { x: 600, y: 286, scale: 0.22 };
/** offset of the off-stage top-left slot, relative to stage center */
const TOP_LEFT = { x: -250, y: -420, scale: 0.55 };

const variants = {
  enter: (dir: number) =>
    dir >= 0
      ? { ...THUMB, opacity: 1 } // next: grow in from the thumbnail slot
      : { ...TOP_LEFT, opacity: 0 }, // prev: slide in from the top-left
  center: (dir: number) => ({
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    transition:
      dir < 0
        ? {
            x: { duration: DUR, ease: EASE },
            y: { duration: DUR, ease: EASE },
            scale: { duration: DUR, ease: EASE },
            opacity: { duration: 0.4, ease: "easeOut" },
          }
        : { duration: DUR, ease: EASE },
  }),
  exit: (dir: number) =>
    dir >= 0
      ? {
          // next: old jacket shrinks away toward the top-left
          ...TOP_LEFT,
          opacity: 0,
          transition: { duration: DUR, ease: EASE },
        }
      : {
          // prev: old jacket shrinks down into the thumbnail slot
          ...THUMB,
          opacity: 0,
          transition: {
            x: { duration: DUR, ease: EASE },
            y: { duration: DUR, ease: EASE },
            scale: { duration: DUR, ease: EASE },
            opacity: { delay: 0.55, duration: 0.35, ease: "easeOut" },
          },
        },
};

export default function ProductStage({ index, direction }: Props) {
  const next = (index + 1) % SLIDES.length;
  return (
    <div className="absolute inset-0 z-10">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute left-1/2 top-[52%]"
        >
          <div className="-translate-x-1/2 -translate-y-1/2">
            <div className="jm-float">
              <img
                src={SLIDES[index].img}
                alt={SLIDES[index].name}
                draggable={false}
                className="h-[min(64svh,560px)] w-auto select-none drop-shadow-[0_26px_34px_rgba(0,0,0,0.28)]"
              />
            </div>
            <div className="jm-shadow mx-auto mt-[8px] h-[22px] w-[280px] rounded-full bg-black/50 blur-[18px]" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* caption */}
      <div className="absolute left-1/2 top-[86%] -translate-x-1/2 text-center text-[20px] leading-[27px] text-white/90">
        Confidence,
        <br />
        wrapped in warmth
      </div>

      {/* bottom-right "next" preview thumbnail */}
      <AnimatePresence initial={false}>
        <motion.img
          key={next}
          src={SLIDES[next].img}
          alt=""
          draggable={false}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ delay: 0.5, duration: 0.45, ease: "easeOut" }}
          className="absolute bottom-[5%] right-[4%] h-[104px] w-auto select-none"
        />
      </AnimatePresence>
    </div>
  );
}
