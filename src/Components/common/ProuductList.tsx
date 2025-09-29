import { motion } from "framer-motion";
import { useCartStore } from "../../utils/stores/cart";
import { useCurrencyStore } from "../../utils/stores/currency";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { Product } from "../../types/product";

const ProductList = ({ itemCount }: { itemCount: number }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        if (!db) throw new Error("Firebase is not initialized.");

        const querySnapshot = await getDocs(collection(db, "products"));
        if (!isMounted) return;

        const productList: Product[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name ?? "Unknown Product",
          price: Number(doc.data().price) || 0,
          frontImageUrl: doc.data().frontImageUrl ?? "",
          backImageUrl: doc.data().backImageUrl ?? "",
          quantity: Number(doc.data().quantity) || 1,
          createdAt: doc.data().createdAt ?? { seconds: 0, nanoseconds: 0 },
        }));

        setProducts(productList);
        // console.log("Fetched products:", productList);
      } catch (error) {
        // console.error("Error fetching products:", error);
        if (isMounted) setError("Failed to load products. Please try again.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const addToCart = useCartStore((state) => state.addToCart);
  const currency = useCurrencyStore((state) => state.selectedCurrency);
  const conversionRate = useCurrencyStore((state) => state.rates);

  if (loading) {
    return <p className="text-center text-gray-500">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-appOrange">{error}</p>;
  }

  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12 gap-y-6 py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      {products.slice(0, itemCount).map((product) => {
        const isUSD = currency === "usd";
        const isNGN = currency === "ngn";
        const price = isUSD
          ? Number(product.price).toFixed(2)
          : isNGN
          ? (Number(product.price) * conversionRate.ngn).toFixed(2)
          : (Number(product.price) * conversionRate.ghc).toFixed(2);

        const currencySymbol = isUSD ? "$" : isNGN ? "₦" : "GH₵";

        return (
          <motion.div
            key={product.id}
            className="group bg-white dark:bg-black p-4 rounded-lg shadow-sm"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <motion.div
              className="overflow-hidden rounded-md"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={
                  hoveredId === product.id && product.backImageUrl
                    ? product.backImageUrl
                    : product.frontImageUrl
                }
                alt={product.name}
                className="aspect-square cursor-pointer w-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-75 lg:aspect-auto h-full lg:h-80"
              />
            </motion.div>

            <div className="mt-4 flex justify-between">
              <h3 className="text-sm text-gray-700 dark:text-gray-200">
                {product.name}
              </h3>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
                {currencySymbol + " " + price}
              </p>
            </div>

            <div className="mt-2">
              <button
                className="w-full bg-appOrange cursor-pointer text-gray-200 py-2 px-4 rounded"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ProductList;
