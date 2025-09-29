import { FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import { useCartStore } from "../../utils/stores/cart";
import { useCurrencyStore } from "../../utils/stores/currency";

type CartPopupProps = {
  isCartOpen: boolean;
  onClose: () => void;
};

const CartPopup = ({ isCartOpen, onClose }: CartPopupProps) => {
  const cartItems = useCartStore((state) => state.cart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeItem = useCartStore((state) => state.removeFromCart);
  const totalPrice = useCartStore((state) => state.getCartTotal());

  const currency = useCurrencyStore((state) => state.selectedCurrency);
  const conversionRate = useCurrencyStore((state) => state.rates);

  const isUSD = currency === "usd";
  const isNGN = currency === "ngn";

  const convertedTotal = isUSD
    ? totalPrice
    : isNGN
    ? totalPrice * conversionRate.ngn
    : totalPrice * conversionRate.ghc;

  const currencySymbol = isUSD ? "$" : isNGN ? "₦" : "GH₵";

  const handleBuy = () => {
    const cart = useCartStore.getState().cart;
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const conversionFactor = isUSD
      ? 1
      : isNGN
      ? conversionRate.ngn
      : conversionRate.ghc;

    let message =
      "Hi VV, I'm interested in purchasing the following items:\n\n";
    cart.forEach((item) => {
      const itemConvertedPrice = (item.price * conversionFactor).toFixed(2);
      message += `${item.name} (x${item.quantity}) - ${currencySymbol}${itemConvertedPrice}\nImage: ${item.frontImageUrl}\n\n`;
    });

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity * conversionFactor,
      0
    );
    message += `\nTotal: ${currencySymbol}${total.toFixed(2)}`;

    const phoneNumber = "233242749215";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      )}

      <div
        className={`fixed top-0 right-0 w-full md:w-1/2 h-screen text-black dark:text-gray-200 bg-white dark:bg-black shadow-lg z-50 transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="hover:text-appOrange cursor-pointer"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <div className="p-4 space-y-4 overflow-y-auto h-[calc(100vh-200px)]">
            {cartItems.map((item) => {
              const itemPrice = isUSD
                ? item.price.toFixed(2)
                : isNGN
                ? (item.price * conversionRate.ngn).toFixed(2)
                : (item.price * conversionRate.ghc).toFixed(2);

              return (
                <div key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.frontImageUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />

                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-sm">
                      {currencySymbol} {itemPrice}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="p-1 hover:text-appOrange cursor-pointer"
                    >
                      <FaMinus size={12} />
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="p-1 hover:text-appOrange cursor-pointer"
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-red-600 hover:text-red-900"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-300">
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-bold">Total:</p>
              <p className="text-lg font-bold">
                {currencySymbol} {convertedTotal.toFixed(2)}
              </p>
            </div>
            <button
              onClick={handleBuy}
              className="w-full cursor-pointer bg-appOrange text-white py-2 rounded-md transition-all duration-300"
            >
              Proceed to Purchase
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPopup;
