// eslint-disable-next-line react/prop-types
const ProductCard = ({ title, price, imageUrl }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-gray-700">${price}</p>
    </div>
  );
};

export default ProductCard;
