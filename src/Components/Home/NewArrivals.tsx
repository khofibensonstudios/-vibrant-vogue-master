import ProductList from "../common/ProuductList";

export const NewArrivals = () => {
  return (
    <div className="b w-full container mx-auto text-black dark:text-gray-200  px-4 lg:px-0 xl:px-4 lg:py-0 py-12">
      <h2 className=" text-2xl md:text-4xl font-bold">NEW ARRIVALS</h2>
      <div className="">
        <ProductList itemCount={4} />
      </div>
    </div>
  );
};
