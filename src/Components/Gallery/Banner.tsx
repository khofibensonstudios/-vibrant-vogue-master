import { motion } from "framer-motion";

export const GalleryBanner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div
      className="relative bg-[url(https://images.pexels.com/photos/6147251/pexels-photo-6147251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center bg-fixed"
      style={{ height: "calc(100vh - 24px)" }}
    >
      <motion.div
        className="absolute inset-0 flex flex-col gap-4 items-center justify-center bg-black/50 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-white capitalize text-4xl md:text-6xl font-bold mt-56 ml-4 md:ml-0 "
          variants={itemVariants}
        >
          VV GALLERY
        </motion.h2>
      </motion.div>
    </div>
  );
};
