import { About } from "../Components/Home/About";
import { Banner } from "../Components/Home/Banner";
import { NewArrivals } from "../Components/Home/NewArrivals";

export const Home = () => {
  return (
    <div className="w-full lg:space-y-24 bg-white dark:bg-black  lg-mb-24 ">
      <Banner />
      <NewArrivals />
      <About />
      {/* <FAQ /> */}
    </div>
  );
};
