import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "./icons";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 0.61, 0.36, 1] as const },
  }),
};

export default function HeroLeft() {
  return (
    <div className="absolute left-[5.5%] top-[27%] z-20 w-[432px] max-w-[36%]">
      <motion.h1
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-[58px] font-medium leading-[57px] tracking-[-0.01em] text-white"
      >
        Stand out
        <br />
        Without trying
      </motion.h1>

      <motion.p
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-[26px] w-full text-[14px] leading-[19px] text-white/70"
      >
        It&apos;s not just about staying warm. It&apos;s about stepping
        outside and instantly feeling confident, comfortable, and
        completely yourself. Designed to elevate even the simplest
        outfit, this jacket wraps you in lightweight warmth.
      </motion.p>

      <motion.div custom={2} variants={fadeUp} initial="hidden" animate="show" className="mt-[48px]">
        <Link
          to="/product/black"
          className="group inline-flex h-[36px] items-center gap-[12px] rounded-full bg-white pl-[26px] pr-[18px] text-[12px] font-semibold text-[#1c1c1c] transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
        >
          Get the look
          <ChevronRightIcon className="h-[11px] w-[11px] transition-transform duration-200 group-hover:translate-x-[2px]" />
        </Link>
      </motion.div>
    </div>
  );
}
