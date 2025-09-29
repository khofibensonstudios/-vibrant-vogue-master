import { useContext, useState } from "react";
import axios from "axios";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { db } from "../../utils/firebase";
import { AdminContext } from "../../utils/hooks";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dh7hqfe4t/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "ibrantvogue_preset";

const ProductUpload = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const adminContext = useContext(AdminContext);

  const handleImageUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await axios.post(CLOUDINARY_URL, formData);
      return response.data.secure_url;
    } catch (error) {
      console.error("Image upload failed:", error); //Will handle error
      return null;
    }
  };

  const handleUpload = async () => {
    if (!name || !price || !frontImage || !backImage) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);
    setSuccessMessage(null);

    try {
      const frontImageUrl = await handleImageUpload(frontImage);
      const backImageUrl = await handleImageUpload(backImage);

      if (!frontImageUrl || !backImageUrl) {
        setSuccessMessage("Failed to upload images. Please try again.");
        return;
      }

      await addDoc(collection(db, "products"), {
        name,
        price: parseFloat(price),
        frontImageUrl,
        backImageUrl,
        createdAt: new Date(),
      });

      setSuccessMessage("Product uploaded successfully!");

      setTimeout(() => {
        if (window.confirm("Do you want to upload another product?")) {
          setName("");
          setPrice("");
          setFrontImage(null);
          setBackImage(null);
          setSuccessMessage(null);
        } else {
          navigate("/admin/manage");
        }
      }, 1500);
    } catch (error) {
      // console.error("Upload failed:", error);
      setSuccessMessage("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={() => {
        adminContext?.handleShowAddProductPopUp();
      }}
      className="fixed inset-0 bg-black/45 bg-opacity-50 flex justify-center items-center z-50 p-4"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-full max-w-lg bg-white  shadow-2xl rounded-lg p-8 md:p-10 transform transition-all scale-100 opacity-100 duration-300"
      >
        <h2 className="text-3xl font-bold  dark:text-gray-100 mb-8 text-center">
          Upload New Product
        </h2>

        <div className="space-y-6">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // Clean input styling, focusing on border and shadow
            className="w-full placeholder:text-gray-500 dark:placeholder:text-gray-400 p-4 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-300 transition"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full placeholder:text-gray-500 dark:placeholder:text-gray-400 p-4 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-300 transition"
          />

          {/* File Upload Inputs */}
          <div>
            <label className="block mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
              Front Image:
            </label>
            <input
              type="file"
              onChange={(e) => setFrontImage(e.target.files?.[0] || null)}
              className="w-full text-gray-700 dark:text-gray-300 border-gray-300"
            />
          </div>
          <div>
            <label className="block mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
              Back Image:
            </label>
            <input
              type="file"
              onChange={(e) => setBackImage(e.target.files?.[0] || null)}
              className="w-full text-gray-700 dark:text-gray-300 border-gray-300"
            />
          </div>

          <button
            onClick={handleUpload}
            className={`w-full py-4 cursor-pointer font-semibold text-lg rounded-lg transition-all duration-300 ${
              loading
                ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                : "bg-appOrange text-white "
            }`}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload Product"}
          </button>

          {successMessage && (
            <p
              className={`text-center text-sm mt-4 font-semibold ${
                successMessage.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {successMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductUpload;
