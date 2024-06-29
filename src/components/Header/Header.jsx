/* eslint-disable react/prop-types */
const Header = ({ content }) => {
  if (!content) return null;
  return <h2 className="text-2xl font-semibold mb-4">{content}</h2>;
};

export default Header;
