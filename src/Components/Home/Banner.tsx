import { motion } from "framer-motion";
import { useNavigate } from "react-router";

export const Banner = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative h-svh w-screen bg-cover bg-center"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dh7hqfe4t/image/upload/c_crop,ar_1:1/v1742837233/home-banner-img_xbyz6i.jpg")`,
      }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 z-10 text-center px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-white text-4xl md:text-6xl font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          NEW DROP, LIVE NOW
        </motion.h2>

        {/* Button */}
        <motion.button
          className="mt-6 border bg-appOrange border-appOrange text-base text-white px-6 md:px-10 rounded-lg py-3 md:py-4 cursor-pointer transition-transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate("/shop")}
        >
          SHOP VV NOW
        </motion.button>
      </motion.div>
    </div>
  );
};
