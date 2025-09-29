import { ReactNode, useEffect, useState } from "react";
import { Product } from "../types/product";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { AdminContext } from "../utils/hooks";

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(false);
  const [showAddProductPopUp, setShowAddProductPopUp] = useState(false);
  const handleShowAddProductPopUp = () => {
    setShowAddProductPopUp((prev) => !prev);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      setLoadingProducts(true);
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
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
        setLoadingProducts(false);
      } catch (error) {
        setLoadingProducts(false);
        // console.error("Error fetching products:", error); Will handle this error
      }
    };
    fetchProducts();
  }, []);

  return (
    <AdminContext.Provider
      value={{
        products,
        loadingProducts,
        showAddProductPopUp,
        handleShowAddProductPopUp,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
