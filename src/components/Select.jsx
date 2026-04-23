import { useState, useRef, useEffect } from "react";
import { arrow, cross } from "../assets";

const Select = ({ list, label, isOneline }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectItem = (item) => {
    setSelectValue(item);
    setIsOpen(false);
  };

  const handleSelectClear = () => {
    setSelectValue();
  };

  return (
    <div ref={dropdownRef} className="relative z-100">
      <div className={`flex ${isOneline ? "items-center gap-2" : "flex-col"}`}>
        {label && (
          <p
            className={`text-xs font-medium mb-1 ${isOneline && "inline-block"}`}
          >
            {label}
          </p>
        )}
        <div
          className="min-w-1/2 border border-second-color bg-input rounded-lg px-2 py-1 text-xs flex 
          justify-between cursor-pointer"
          onClick={toggleOpen}
        >
          <p>{selectValue ? selectValue : "Выберите фильтр"}</p>
          <div className="flex">
            {selectValue && (
              <img src={cross} width={20} onClick={() => handleSelectClear()} />
            )}
            <img src={arrow} width={20} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute border border-second-color mt-0.5 rounded-lg space-y-1 w-full bg-white">
          {list.map((item) => (
            <div
              key={item}
              className="hover:bg-input px-2 py-1 cursor-pointer"
              onClick={() => handleSelectItem(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
