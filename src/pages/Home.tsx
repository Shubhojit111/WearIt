import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useShop } from "../context/ShopContext";
import { SLIDES } from "../data/slides";
import Navbar from "../components/Navbar";
import HeroLeft from "../components/HeroLeft";
import Arrows from "../components/Arrows";
import BuyPanel from "../components/BuyPanel";
import ProductStage from "../components/ProductStage";
import Socials from "../components/Socials";
import StickyNav from "../components/StickyNav";
import Marquee from "../components/Marquee";
import ConfidenceSection from "../components/ConfidenceSection";
import ShopTheLookSection from "../components/ShopTheLookSection";
import CollectionSection from "../components/CollectionSection";
import LightweightSection from "../components/LightweightSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";
import {
  CartIcon,
  HeartIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "../components/icons";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 640 : false
  );
  useEffect(() => {
    const on = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return isMobile;
}

/** crossfading per-slide backgrounds */
function BgLayers({ index }: { index: number }) {
  return (
    <>
      {SLIDES.map((s, i) => (
        <motion.div
          key={s.id}
          className={`absolute inset-0 ${s.bgClass}`}
          initial={false}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.95, ease: "easeInOut" }}
        />
      ))}
    </>
  );
}

export default function Home() {
  const isMobile = useIsMobile();
  const { setCartOpen } = useShop();

  const [[index, direction], setCarousel] = useState<[number, number]>([1, 0]);
  const next = useCallback(
    () => setCarousel(([i]) => [(i + 1) % SLIDES.length, 1]),
    []
  );
  const prev = useCallback(
    () => setCarousel(([i]) => [(i + SLIDES.length - 1) % SLIDES.length, -1]),
    []
  );

  return (
    <div className="h-full w-full bg-[#141414]">
      <StickyNav />

      {/* ============ HERO — full-bleed dark parent layout ============ */}
      {isMobile ? (
        <section id="home" className="relative w-full overflow-hidden">
          <BgLayers index={index} />
          <div className="relative z-10 flex min-h-svh flex-col px-6 pb-8 pt-6">
            <header className="flex items-center justify-between">
              <a href="#home" className="flex items-center gap-2">
                <span className="flex h-[22px] w-[22px] items-center justify-center rounded-[3px] bg-white text-[8px] font-semibold tracking-wide text-[#202020]">
                  WI
                </span>
                <span className="font-serif-logo text-[15px] font-semibold tracking-[0.04em] text-white">
                  WearIt
                </span>
              </a>
              <div className="flex items-center gap-4 text-white/85">
                <button aria-label="Cart" onClick={() => setCartOpen(true)}>
                  <CartIcon className="h-[18px] w-[18px]" />
                </button>
                <Link to="/wishlist" aria-label="Wishlist">
                  <HeartIcon className="h-[18px] w-[18px]" />
                </Link>
              </div>
            </header>

            <nav className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-[22px] bg-black/25 px-4 py-3">
              <a
                href="#collection"
                className="rounded-full bg-white px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#202020]"
              >
                Products
              </a>
              {[
                ["About Us", "#about"],
                ["Contact", "#contact"],
              ].map(([l, href]) => (
                <a
                  key={l}
                  href={href}
                  className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/85"
                >
                  {l}
                </a>
              ))}
            </nav>

            <div className="mt-8 flex items-center gap-2">
              <button
                aria-label="Previous jacket"
                onClick={prev}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white"
              >
                <ChevronLeftIcon className="h-3.5 w-3.5" />
              </button>
              <button
                aria-label="Next jacket"
                onClick={next}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white"
              >
                <ChevronRightIcon className="h-3.5 w-3.5" />
              </button>
            </div>

            <h1 className="mt-4 text-[34px] font-medium leading-[40px] text-white">
              Stand out
              <br />
              Without trying
            </h1>
            <p className="mt-4 text-[12.5px] leading-[19px] text-white/70">
              It&apos;s not just about staying warm. It&apos;s about stepping
              outside and instantly feeling confident, comfortable, and
              completely yourself. Designed to elevate even the simplest
              outfit, this jacket wraps you in lightweight warmth.
            </p>
            <div className="mt-6">
              <button className="inline-flex h-9 items-center gap-2 rounded-full bg-white pl-5 pr-4 text-[12px] font-semibold text-[#1c1c1c]">
                Get the look
                <ChevronRightIcon className="h-3 w-3" />
              </button>
            </div>

            <div className="relative mx-auto mt-8">
              <div className="jm-float">
                <img
                  src={SLIDES[index].img}
                  alt={SLIDES[index].name}
                  className="mx-auto h-[260px] w-auto"
                />
              </div>
              <div className="jm-shadow mx-auto mt-2 h-4 w-40 rounded-full bg-black/50 blur-xl" />
            </div>
            <div className="mt-5 text-center text-[15px] leading-[23px] text-white/90">
              Confidence,
              <br />
              wrapped in warmth
            </div>

            <div className="mt-7 flex flex-col items-center">
              <div className="text-[28px] font-medium leading-[36px] text-white">$149</div>
              <div className="text-[22px] leading-[30px] text-white/45 line-through decoration-white/60 decoration-2">
                $199
              </div>
              <div className="mt-4 text-[12px] text-white/75">Choose your size:</div>
              <div className="mt-3 flex gap-3">
                {["36", "38", "40"].map((s, i) => (
                  <span
                    key={s}
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-[11px] ${
                      i === 0
                        ? "bg-white font-medium text-[#202020]"
                        : "bg-black/25 text-white/90"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <Socials className="mx-auto mt-9 gap-7" />
          </div>
        </section>
      ) : (
        <section id="home" className="relative h-svh w-full overflow-hidden">
          <BgLayers index={index} />
          <Navbar />
          <Arrows onPrev={prev} onNext={next} />
          <HeroLeft />
          <ProductStage index={index} direction={direction} />
          <BuyPanel />
          <Socials className="absolute left-[5.5%] top-[88.5%] z-20" />
        </section>
      )}

      {/* ============ REST OF THE HOMEPAGE ============ */}
      <Marquee />
      <ConfidenceSection />
      <ShopTheLookSection />
      <CollectionSection />
      <LightweightSection />
      <FeaturesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
