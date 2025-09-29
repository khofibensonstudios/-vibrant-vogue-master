import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  IoCartOutline,
  IoMenu,
  IoClose,
  IoSunny,
  IoMoon,
} from "react-icons/io5";
import { NavLinks } from "../../utils/data";
import { useCartStore } from "../../utils/stores/cart";
import CartPopup from "../Shop/Cart";
import { useLocation } from "react-router";
import { CurrencySelector } from "./CurrencySelector";
import { motion } from "framer-motion";
import Logo from "../../assets/images/common/LOGO.png";

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const count = useCartStore((state) => state.cart.length);

  const path = useLocation().pathname;

  const currentPath = useLocation().pathname;
  const checkPathToHide = (): boolean => {
    if (currentPath.includes("admin")) return true;
    return false;
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <div className="w-full bg-white dark:bg-black text-black dark:text-gray-200 shadow sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center py-3  px-4 lg:px-0 xl:px-4">
        {/* Mobile Menu Button */}
        {!checkPathToHide && (
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-2xl focus:outline-none cursor-pointer"
            >
              {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        )}
        {!checkPathToHide() && (
          <nav className="hidden md:flex items-center space-x-6">
            {NavLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className={`text-base hover:text-appOrange transition-all duration-300 ease-in-out transform hover:scale-105 hover:font-semibold ${
                  path === link.to ? "text-appOrange font-semibold" : ""
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        )}

        <div>
          <Link to="/" className="flex items-center">
            <img className="w-16 h-16 " src={Logo} alt="Vibrant Vogue Logo" />
          </Link>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <button
            onClick={toggleDarkMode}
            className="text-2xl cursor-pointer transition-all duration-300 ease-in-out"
          >
            {isDarkMode ? <IoSunny /> : <IoMoon />}
          </button>

          {!checkPathToHide && (
            <div className="relative">
              <IoCartOutline
                onClick={toggleCart}
                className="text-2xl cursor-pointer hover:text-appOrange hover:scale-110 transition-all duration-300 ease-in-out"
              />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-appOrange text-white text-xs rounded-full px-1.5 py-0.5">
                  {count}
                </span>
              )}
            </div>
          )}

          {!checkPathToHide() && <CurrencySelector />}
        </div>
      </div>

      {!checkPathToHide() && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: isMobileMenuOpen ? 0 : "-100%" }}
          transition={{ type: "spring", stiffness: 120 }}
          className="md:hidden fixed top-0 left-0  w-1/2 h-full bg-white dark:bg-black shadow-lg z-30"
        >
          <nav className="flex flex-col items-start space-y-4 p-6">
            {NavLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                onClick={toggleMobileMenu}
                className={`text-base hover:text-appOrange transition-all duration-300 ease-in-out transform hover:scale-105 hover:font-semibold ${
                  path === link.to ? "text-appOrange font-semibold" : ""
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20"
          onClick={toggleMobileMenu}
        />
      )}

      <CartPopup isCartOpen={isCartOpen} onClose={toggleCart} />
    </div>
  );
};

export default NavBar;
