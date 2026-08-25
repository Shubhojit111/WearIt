import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartItem = { id: string; size: string; qty: number };

type ShopCtx = {
  cart: CartItem[];
  wishlist: string[];
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
  addToCart: (id: string, size?: string) => void;
  removeFromCart: (id: string, size: string) => void;
  setQty: (id: string, size: string, qty: number) => void;
  toggleWishlist: (id: string) => void;
  cartCount: number;
  subtotal: (priceOf: (id: string) => number) => number;
};

const Ctx = createContext<ShopCtx | null>(null);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (id: string, size = "36") => {
    setCart((c) => {
      const found = c.find((i) => i.id === id && i.size === size);
      if (found)
        return c.map((i) =>
          i.id === id && i.size === size ? { ...i, qty: i.qty + 1 } : i
        );
      return [...c, { id, size, qty: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: string, size: string) =>
    setCart((c) => c.filter((i) => !(i.id === id && i.size === size)));

  const setQty = (id: string, size: string, qty: number) =>
    setCart((c) =>
      qty <= 0
        ? c.filter((i) => !(i.id === id && i.size === size))
        : c.map((i) => (i.id === id && i.size === size ? { ...i, qty } : i))
    );

  const toggleWishlist = (id: string) =>
    setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]));

  const cartCount = useMemo(() => cart.reduce((n, i) => n + i.qty, 0), [cart]);

  const subtotal = (priceOf: (id: string) => number) =>
    cart.reduce((n, i) => n + i.qty * priceOf(i.id), 0);

  return (
    <Ctx.Provider
      value={{
        cart,
        wishlist,
        cartOpen,
        setCartOpen,
        addToCart,
        removeFromCart,
        setQty,
        toggleWishlist,
        cartCount,
        subtotal,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useShop() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useShop outside provider");
  return ctx;
}
