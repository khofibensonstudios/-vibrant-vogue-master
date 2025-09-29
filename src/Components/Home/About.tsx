import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import g12 from "../../assets/images/gallery/g12.jpg";

export const About = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="container  mx-auto lg:flex gap-8 space-y-4 items-center justify-center text-black dark:text-gray-200  lg:py-0 px-4 lg:px-0 xl:px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="w-full lg:w-1/2 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold">ABOUT VV</h2>
        <p className="leading-relaxed">
          Welcome to Vibrant Vogue, where fashion meets passion. In
          2021, Agyemang Eskhado Wisdom with ambitions in African formed a team
          of creatives dedicated to crafting clothing that's not just stylish,
          but also sustainable and responsibly sourced. Our designs are inspired
          by the world around us - from the streets of Tema to the great
          outdoors. We believe that fashion should be a form of
          self-expression,voice of the voiceless,serves an aspirations,embracing
          your individuality,and expressing your culture through bold designs
          and not a trend to follow. That's why we create clothing that's
          timeless, versatile, and made to last. Join our community of
          like-minded individuals who value individuality, sustainability, and
          great design. Discover a realm where styles meet souls at Vibrant
          Vogue. Let us connect Vibrant energies through unique collections that
          inspires confidnece and creativity.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="border bg-appOrange border-appOrange text-base hover:border-appOrange text-white px-4 md:px-8 rounded-[10px] py-2 md:py-4 hover:bg-appOrange hover:text-white cursor-pointer"
        >
          WEAR VV NOW
        </button>
      </div>

      <motion.div
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={g12}
          alt="vibrant vogue about page image"
          className="w-full pb-6 h-[500px] lg:h-[560px] object-cover rounded-2xl"
        />
      </motion.div>
    </motion.div>
  );
};
