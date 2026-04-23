import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Select from "../components/Select";
import ProductCard from "../components/ProductCard/ProductCard";
import { products } from "../constants/mocks";

const MainPage = () => {
  const [productsList, setProductsList] = useState();
  const sortBy = ["Price: High to Low", "Price: Low to High"];

  useEffect(() => {
    setProductsList(products.filter((item) => item.category === "tv"));
  }, []);

  return (
    <div className="w-3/4 m-auto my-5 flex gap-4 grow">
      <Sidebar />
      <main className="w-full space-y-3">
        <div className="flex justify-between items-center">
          <p className="text-second-color text-sm">
            {productsList?.length} products
          </p>
          <Select list={sortBy} label="Sort by:" isOneline />
        </div>
        <div className="flex flex-wrap gap-2.5">
          {productsList?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MainPage;
