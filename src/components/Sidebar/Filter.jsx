import { useEffect, useState } from "react";
import { products } from "../../constants/mocks";
import Select from "../Select";
import Input from "../Input";
import Button from "../Button";

const Filter = () => {
  const [brands, setBrands] = useState();

  useEffect(() => {
    const listBrands = [...new Set(products.map((product) => product.brand))];
    setBrands(listBrands);
  }, [products]);
  return (
    <div className="border border-second-color p-3 rounded-lg space-y-3">
      <p className="font-lg font-medium">Filters</p>
      <Select list={brands} label="Brand" />
      <div>
        <p className="text-xs font-medium mb-1">Price Range</p>
        <div className="flex gap-2">
          <Input styleClass="flex-1 min-w-0" placeholder="0" />
          <Input styleClass="flex-1 min-w-0" placeholder="5000" />
        </div>
      </div>
      <Button content="Apply Filters" />
    </div>
  );
};

export default Filter;
