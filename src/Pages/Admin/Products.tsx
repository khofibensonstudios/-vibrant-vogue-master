import { useContext } from "react";
import { db } from "../../utils/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { Pencil, Plus, Trash } from "lucide-react";
import { AdminContext } from "../../utils/hooks";

export const Products = () => {
  const adminContext = useContext(AdminContext);

  const handleDelete = async (productId: string) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      await deleteDoc(doc(db, "products", productId));
    } catch (error) {
      // console.error("Error deleting product:", error);
      alert("Failed to delete product. Please try again.");
    }
  };

  if (adminContext?.loadingProducts)
    return (
      <div className="flex items-center w-full justify-center flex-col">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-appOrange"></div>
        <p className="text-center text-gray-500">Loading products...</p>
      </div>
    );

  return (
    <div className=" w-full bg-white dark:bg-black">
      <div className="container mx-auto px-4 lg:px-0 xl:px-4">
        <div className=" sticky top-0 py-6 bg-white flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Products
          </h2>
          <button
            onClick={() => {
              adminContext?.handleShowAddProductPopUp();
            }}
            className=" bg-appOrange flex items-center gap-2 cursor-pointer text-white px-4 py-2 rounded hover:bg-appOrange transition"
          >
            <Plus /> Add Products
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {adminContext?.products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-black p-4 rounded-lg shadow-md"
            >
              <img
                src={product.frontImageUrl}
                alt={product.name}
                className="w-full object-cover rounded-md"
              />
              <h3 className="mt-2 text-lg font-medium text-gray-800 dark:text-gray-200">
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Price: ${product.price.toFixed(2)}
              </p>

              <div className=" flex mt-4 items-center justify-between">
                {" "}
                <Trash
                  onClick={() => handleDelete(product.id)}
                  className=" text-appOrange cursor-pointer"
                />
                <Pencil className=" cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
