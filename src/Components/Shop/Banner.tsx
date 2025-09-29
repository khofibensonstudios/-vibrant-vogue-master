import { motion } from "framer-motion";
import BannerImg from "../../assets/images/gallery/g11.jpg";

export const ShopBanner = () => {
  return (
    <div
      className="relative h-[calc(100vh-24px)] w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 z-10 text-center px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-white text-4xl md:text-6xl font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          WEAR VV, SHOP NOW
        </motion.h2>
      </motion.div>
    </div>
  );
};
