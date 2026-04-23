import { clock } from "../../assets";

const SpecialDeal = ({ content, timer }) => {
  return (
    <div className="p-3 bg-[#d51f43] rounded-lg text-white text-xs space-y-2">
      <div className="flex gap-2">
        <img src={clock} />
        <p className="text-base">Special Deal</p>
      </div>
      <div>{content}</div>
      <div>
        Offer expires in:
        <span className="font-mono pl-3">{timer}</span>
      </div>
    </div>
  );
};

export default SpecialDeal;
