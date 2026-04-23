const Link = ({ content, href, isActive }) => {
  return (
    <a
      href={href}
      className={`${isActive ? "text-black" : "text-gray-content"} block`}
    >
      {content}
    </a>
  );
};

export default Link;
