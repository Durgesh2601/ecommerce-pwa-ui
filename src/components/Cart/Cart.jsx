import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const isCartEmpty = cartItems?.length === 0;
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="bg-white p-4 mt-10 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">
        Cart {!isCartEmpty ? `(${cartItems?.length})` : ""}
      </h2>
      {isCartEmpty ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start border-b border-gray-200 py-4"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4">
                  <div className="font-semibold">{item.title}</div>
                  <p className="text-gray-700">${item.price}</p>
                </div>
              </div>
              <div className="ml-auto flex items-center">
                <button
                  onClick={() => handleRemoveItem(item)}
                  className="text-red-600 hover:text-red-800 ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
