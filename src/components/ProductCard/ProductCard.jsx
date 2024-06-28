/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addItem, removeItem } from "../../redux/cartSlice";
import Notification from "../Notification/Notification";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isProductInCart = cartItems.some((item) => item.id === product.id);
  const [notificationVisible, setNotificationVisible] = useState(false);

  const handleAddToCart = () => {
    dispatch(addItem(product));
    setNotificationVisible(true);
    setTimeout(() => {
      setNotificationVisible(false);
    }, 2000); // Hide notification after 2 seconds
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItem(product));
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md flex flex-col justify-between h-full">
      <div>
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-44 object-contain rounded-md"
        />
        <h2 className="text-xl font-semibold mt-2 line-clamp-2">
          {product?.title}
        </h2>
        <p className="text-gray-700 mt-1">${product?.price}</p>
      </div>
      {isProductInCart ? (
        <button
          onClick={handleRemoveFromCart}
          className="bg-red-500 text-white mt-4 py-2 px-4 rounded-md transition-colors duration-200 hover:bg-red-600"
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white mt-4 py-2 px-4 rounded-md transition-colors duration-200 hover:bg-blue-600"
        >
          Add to Cart
        </button>
      )}
      <Notification
        message="Product added to cart!"
        visible={notificationVisible}
      />
    </div>
  );
};

export default ProductCard;
