const Input = ({ placeholder, styleClass }) => {
  return (
    <>
      <input
        className={`bg-input border border-second-color rounded-lg px-2 py-1 text-sm ${styleClass}`}
        placeholder={placeholder || ""}
      />
    </>
  );
};

export default Input;
