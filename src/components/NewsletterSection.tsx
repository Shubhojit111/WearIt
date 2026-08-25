import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRightIcon } from "./icons";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section id="contact" className="bg-[#141414] pb-24 pt-4 md:pb-28">
      <div className="mx-auto w-full max-w-[1240px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative overflow-hidden rounded-[32px] bg-[image:linear-gradient(135deg,#f4740a_0%,#ee5207_100%)] px-8 py-14 md:px-16 md:py-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[image:radial-gradient(80%_90%_at_85%_10%,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_55%)]" />
          <div className="relative flex flex-wrap items-center justify-between gap-10">
            <div className="max-w-[460px]">
              <h2 className="text-[30px] font-medium leading-[38px] text-white md:text-[38px] md:leading-[46px]">
                Join the WearIt Club.
              </h2>
              <p className="mt-3 text-[13px] leading-[20px] text-white/80">
                Early access to new drops, private sales and 10% off your first
                jacket. No noise — just warmth.
              </p>
            </div>
            {done ? (
              <div className="rounded-full bg-[#141414]/85 px-8 py-4 text-[13px] font-medium text-white">
                You&apos;re on the list — welcome to the club.
              </div>
            ) : (
              <form
                className="flex w-full max-w-[440px] flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.trim()) setDone(true);
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="h-[46px] flex-1 rounded-full border border-white/30 bg-white/15 px-6 text-[13px] text-white placeholder-white/60 outline-none backdrop-blur-sm transition focus:border-white/70"
                />
                <button
                  type="submit"
                  className="group flex h-[46px] items-center justify-center gap-2 rounded-full bg-[#141414] px-7 text-[12.5px] font-semibold text-white transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
                >
                  Get 10% off
                  <ChevronRightIcon className="h-[11px] w-[11px] transition-transform group-hover:translate-x-[2px]" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
