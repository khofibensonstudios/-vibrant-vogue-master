import { useEffect, useState } from "react";
import ProductList from "../common/ProuductList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { Product } from "../../types/product";

export const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productList: Product[] = querySnapshot.docs.map((doc) => {
          const data = doc.data();

          return {
            id: doc.id,
            name: data.name ?? "Unknown Product",
            price: Number(data.price) || 0,
            frontImageUrl: data.frontImageUrl ?? "",
            backImageUrl: data.backImageUrl ?? undefined,
            quantity: Number(data.quantity) || 1,
            createdAt: data.createdAt ?? { seconds: 0, nanoseconds: 0 },
          };
        });

        setProducts(productList);
        // console.log(productList);
      } catch (error) {
        // console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="w-full container mx-auto text-black dark:text-gray-200 px-4 lg:px-0 xl:px-4">
      <h2 className="text-2xl capitalize md:text-4xl font-bold">
        ALL PRODUCTS
      </h2>
      <div>
        <ProductList itemCount={products.length} />
      </div>
    </div>
  );
};
