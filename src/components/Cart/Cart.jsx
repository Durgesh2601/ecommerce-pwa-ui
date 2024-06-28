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
    <div className="bg-white p-2 mt-10 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">
        Cart {!isCartEmpty ? `(${cartItems?.length})` : ""}
      </h2>
      {isCartEmpty ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between border-b py-2 p-2 mb-2"
            >
              <div className="flex items-center">
                <img
                  src={item?.image}
                  alt={item.title}
                  className="w-12 h-12 object-cover"
                />
                <div className="ml-2">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveItem(item)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
