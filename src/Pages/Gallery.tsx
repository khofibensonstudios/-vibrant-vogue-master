import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiZoomIn } from "react-icons/fi";

import { Image } from "../types/gallery_image";

import g1 from "../assets/images/gallery/g1.jpg";
import g2 from "../assets/images/gallery/g2.jpg";
import g3 from "../assets/images/gallery/g3.jpg";
import g4 from "../assets/images/gallery/g4.jpg";
import g5 from "../assets/images/gallery/g5.jpg";
import g6 from "../assets/images/gallery/g6.jpg";
import g7 from "../assets/images/gallery/g7.jpg";
import g8 from "../assets/images/gallery/g8.jpg";
import g9 from "../assets/images/gallery/g9.jpg";
import g10 from "../assets/images/gallery/g10.jpg";
import g11 from "../assets/images/gallery/g11.jpg";
import g12 from "../assets/images/gallery/g12.jpg";
import g13 from "../assets/images/gallery/g13.jpg";
import g14 from "../assets/images/gallery/g14.jpg";
import g15 from "../assets/images/gallery/g15.jpg";

const photoshootImages = [
  { id: 1, src: g1, alt: "Gallery Image 1", description: "Vibrant Vogue 1" },
  { id: 2, src: g2, alt: "Gallery Image 2", description: "Vibrant Vogue 2" },
  { id: 3, src: g3, alt: "Gallery Image 3", description: "Vibrant Vogue 3" },
  { id: 4, src: g4, alt: "Gallery Image 4", description: "Vibrant Vogue 4" },
  { id: 5, src: g5, alt: "Gallery Image 5", description: "Vibrant Vogue 5" },
  { id: 6, src: g6, alt: "Gallery Image 6", description: "Vibrant Vogue 6" },
  { id: 7, src: g7, alt: "Gallery Image 7", description: "Vibrant Vogue 7" },
  { id: 8, src: g8, alt: "Gallery Image 8", description: "Vibrant Vogue 8" },
  { id: 9, src: g9, alt: "Gallery Image 9", description: "Vibrant Vogue 9" },
  {
    id: 10,
    src: g10,
    alt: "Gallery Image 10",
    description: "Vibrant Vogue 10",
  },
  {
    id: 11,
    src: g11,
    alt: "Gallery Image 11",
    description: "Vibrant Vogue 11",
  },
  {
    id: 12,
    src: g12,
    alt: "Gallery Image 12",
    description: "Vibrant Vogue 12",
  },
  {
    id: 13,
    src: g13,
    alt: "Gallery Image 13",
    description: "Vibrant Vogue 13",
  },
  {
    id: 14,
    src: g14,
    alt: "Gallery Image 14",
    description: "Vibrant Vogue 14",
  },
  {
    id: 15,
    src: g15,
    alt: "Gallery Image 14",
    description: "Vibrant Vogue 14",
  },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  return (
    <>
      <div className="bg-white dark:bg-black text-black dark:text-gray-200 py-8 px-4 lg:px-0 xl:px-4">
        <div className="container mx-auto px-4 lg:px-0 xl:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photoshootImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300"
              />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col items-center justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent"
              >
                <div className="flex items-center space-x-2">
                  <FiZoomIn className="w-6 h-6 text-white" />
                  <span className="text-sm font-medium text-white">
                    {image.description}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-screen rounded-lg shadow-2xl"
                />
                <button
                  className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
                  onClick={() => setSelectedImage(null)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
