import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ title, price, imageUrl }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ title, price, imageUrl, id: Date.now() }));
  };

  return (
    <div className="border p-4 rounded-md shadow-md">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-gray-700">${price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
