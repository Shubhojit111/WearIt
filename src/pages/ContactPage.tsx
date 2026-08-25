import { useState } from "react";
import { motion } from "framer-motion";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

const INFO = [
  ["Email", "hello@wearit.shop"],
  ["Phone", "+91 90000 12345"],
  ["Studio", "Park Street, Kolkata, IN"],
  ["Hours", "Mon–Sat, 10:00–19:00 IST"],
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "That email doesn't look right.";
    if (form.message.trim().length < 10) errs.message = "Give us a few more details (10+ characters).";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };

  const field =
    "w-full rounded-[14px] border bg-white/[0.05] px-5 py-3.5 text-[13px] text-white placeholder-white/35 outline-none transition focus:border-[#f4740a]/70";

  return (
    <div className="min-h-full bg-[#141414]">
      <TopBar />
      <main className="mx-auto w-full max-w-[1240px] px-6 pb-24 pt-16">
        <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#f4740a]">
          Contact
        </div>
        <h1 className="mt-3 text-[38px] font-medium leading-[46px] text-white md:text-[44px]">
          Talk to us.
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr]">
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            className="space-y-5"
            noValidate
          >
            {sent ? (
              <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-10 text-center">
                <div className="text-[18px] font-medium text-white">Message sent.</div>
                <p className="mt-2 text-[13px] text-white/60">
                  Thanks {form.name.split(" ")[0]} — we'll reply within one working day.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <input
                      className={`${field} ${errors.name ? "border-[#ff5d5d]/70" : "border-white/10"}`}
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    {errors.name && <p className="mt-1.5 text-[11px] text-[#ff8080]">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      className={`${field} ${errors.email ? "border-[#ff5d5d]/70" : "border-white/10"}`}
                      placeholder="Your email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    {errors.email && <p className="mt-1.5 text-[11px] text-[#ff8080]">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <textarea
                    rows={6}
                    className={`${field} resize-none ${errors.message ? "border-[#ff5d5d]/70" : "border-white/10"}`}
                    placeholder="How can we help?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  {errors.message && <p className="mt-1.5 text-[11px] text-[#ff8080]">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="h-[44px] rounded-full bg-white px-8 text-[12.5px] font-semibold text-[#1c1c1c] transition hover:scale-[1.03] active:scale-[0.98]"
                >
                  Send message
                </button>
              </>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            className="space-y-4"
          >
            {INFO.map(([k, v]) => (
              <div
                key={k}
                className="flex items-center justify-between rounded-[16px] border border-white/[0.08] bg-white/[0.04] px-6 py-4"
              >
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
                  {k}
                </span>
                <span className="text-[13px] text-white/85">{v}</span>
              </div>
            ))}
            <div className="rounded-[16px] bg-[image:linear-gradient(135deg,#f4740a_0%,#ee5207_100%)] px-6 py-6">
              <div className="text-[15px] font-medium text-white">Order support</div>
              <p className="mt-1.5 text-[12.5px] leading-[19px] text-white/80">
                Existing order? Include your order number and we'll jump the
                queue.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
