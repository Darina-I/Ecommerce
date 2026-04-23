const Button = ({ content, onClick, isGray, isSquare }) => {
  return (
    <>
      <button
        className={`${isSquare ? "px-3 py-1" : "w-full px-3 py-1.5 text-sm"} rounded-lg 
        ${isGray ? "bg-second-color" : "bg-main-color text-white"} cursor-pointer`}
        onClick={onClick}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
