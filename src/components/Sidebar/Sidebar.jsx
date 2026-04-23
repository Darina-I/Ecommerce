import Filter from "./Filter";
import SpecialDeal from "./SpecialDeal";

const Sidebar = () => {
  return (
    <div className="w-1/5 space-y-3">
      <Filter />
      <SpecialDeal
        content="Register now to unlock exclusive offers and discounts"
        timer="0:59:59"
      />
    </div>
  );
};

export default Sidebar;
