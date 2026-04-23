import { useState } from "react";
import { basket, profile } from "../assets";
import { nav } from "../constants/navHeader";
import Link from "./Link";

const Header = () => {
  const [activeCategory, setActiveCategory] = useState("TV");

  return (
    <div className="border-b border-second-color flex justify-center py-4 sticky top-0 bg-white z-50">
      <div className="w-3/4 flex flex-row justify-between">
        <div className="flex items-end gap-3">
          <a
            href="/tv"
            className="text-2xl font-medium"
            onClick={() => handleToMain()}
          >
            TechStore
          </a>
          <div className="flex gap-3">
            {nav?.map((item) => (
              <Link
                content={item.name}
                href={item.link}
                isActive={item.name === activeCategory}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <img className="cursor-pointer" src={basket} width={20} />
          <img className="cursor-pointer" src={profile} width={20} />
        </div>
      </div>
    </div>
  );
};

export default Header;
