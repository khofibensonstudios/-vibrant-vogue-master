import { AllProducts } from "../Components/Shop/AllProducts";
import { ShopBanner } from "../Components/Shop/Banner";

export const Shop = () => {
  return (
    <div className="w-full bg-white dark:bg-black lg:space-y-24 space-y-12 lg-mb-24">
      <ShopBanner />
      <AllProducts />
    </div>
  );
};
