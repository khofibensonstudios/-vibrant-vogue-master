import { Link } from "react-router";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLinks } from "../../utils/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const hoverVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <motion.footer
      className="bg-black text-gray-200 py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-4 lg:px-0 xl:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="text-left md:text-left"
            variants={itemVariants}
          >
            <h2 className="text-xl font-bold mb-4">VIBRANT VOGUE</h2>
            <p className="text-gray-400">
              Your destination for the latest fashion trends and styles.
            </p>
          </motion.div>

          <motion.nav
            className="flex flex-col items-start md:items-start"
            variants={itemVariants}
          >
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {NavLinks.map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link
                    className="text-gray-400 hover:text-appOrange transition-all duration-300 ease-in-out"
                    to={link.to}
                  >
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          <motion.div
            className="flex flex-col items-start md:items-end"
            variants={itemVariants}
          >
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-appOrange transition-all duration-300 ease-in-out"
                variants={hoverVariants}
                whileHover="hover"
              >
                <FaFacebook size={24} />
              </motion.a>
              <motion.a
                href="https://wa.me/233242749215?text=Hello,%20I%27m%20interested%20in%20your%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-appOrange transition-all duration-300 ease-in-out"
                variants={hoverVariants}
                whileHover="hover"
              >
                <FaWhatsapp size={24} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/vibrant_vogue_?igsh=emh4djA5eTd0cWV3&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-appOrange transition-all duration-300 ease-in-out"
                variants={hoverVariants}
                whileHover="hover"
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a
                href="https://pin.it/3RWVk67g6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-appOrange transition-all duration-300 ease-in-out"
                variants={hoverVariants}
                whileHover="hover"
              >
                <FaPinterest size={24} />
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@vibrantvogue1?_t=ZM-8tQSW6kx6RR&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-appOrange transition-all duration-300 ease-in-out"
                variants={hoverVariants}
                whileHover="hover"
              >
                <FaTiktok size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center"
          variants={itemVariants}
        >
          <p className="text-gray-400">
            &copy; {currentYear} VIBRANT VOGUE. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
