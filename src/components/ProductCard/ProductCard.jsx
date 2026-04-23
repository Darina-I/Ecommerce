import { useState } from "react";
import Button from "../Button";
import SliderPhoto from "./SliderPhoto";
import { heart, whiteHeart } from "../../assets";

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(0);
  const [isFavourite, setIsFavourite] = useState(false);

  const handleAddBasket = (type) => {
    switch (type) {
      case "+":
        setCount(count + 1);
        break;
      case "-":
        setCount(count - 1);
        break;
    }
  };

  const handleToggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="border border-second-color rounded-lg overflow-hidden w-68.5 relative">
      <SliderPhoto photos={product.images} />
      {product.isSpecialOffer && (
        <div className="absolute bg-custom-red rounded-md text-white p-1 text-xs top-1 left-1">
          Special Offer
        </div>
      )}
      <div
        className={`absolute right-1 top-1 rounded-md p-1.5 cursor-pointer
          ${isFavourite ? "bg-custom-red" : "bg-second-color"}`}
        onClick={() => handleToggleFavourite()}
      >
        <img src={isFavourite ? whiteHeart : heart} />
      </div>
      <div className="p-2 flex flex-col justify-between h-40">
        <div>
          <p className="text-gray-content text-sm">{product.make}</p>
          <p className="font-medium line-clamp-2">{product.model}</p>
        </div>
        <div className="space-y-2">
          <p className="font-mono">${product.price.toLocaleString("en-US")}</p>
          {count === 0 ? (
            <Button
              content="Add to Cart"
              onClick={() => handleAddBasket("+")}
            />
          ) : (
            <div className="flex justify-between items-center">
              <Button
                content="-"
                isGray
                isSquare
                onClick={() => handleAddBasket("-")}
              />
              <p className="text-sm">{count} in cart</p>
              <Button
                content="+"
                isSquare
                onClick={() => handleAddBasket("+")}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
