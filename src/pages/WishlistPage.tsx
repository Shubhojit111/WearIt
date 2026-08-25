import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useShop } from "../context/ShopContext";
import { PRODUCTS } from "../data/products";
import { ChevronRightIcon, HeartIcon } from "../components/icons";

export default function WishlistPage() {
  const { wishlist } = useShop();
  const items = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="min-h-full bg-[#141414]">
      <TopBar />
      <main className="mx-auto w-full max-w-[1240px] px-6 pb-24 pt-16">
        <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#f4740a]">
          Wishlist
        </div>
        <h1 className="mt-3 text-[38px] font-medium leading-[46px] text-white">
          Saved for later.
        </h1>

        {items.length === 0 ? (
          <div className="mt-20 text-center">
            <HeartIcon className="mx-auto h-10 w-10 text-white/25" />
            <p className="mt-5 text-[14px] text-white/60">
              Nothing here yet — tap the heart on any product to save it.
            </p>
            <Link
              to="/products"
              className="mt-7 inline-flex h-[42px] items-center gap-2 rounded-full bg-white px-7 text-[12px] font-semibold text-[#1c1c1c]"
            >
              Browse products
              <ChevronRightIcon className="h-3 w-3" />
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
              >
                <ProductCard p={p} />
              </motion.div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
