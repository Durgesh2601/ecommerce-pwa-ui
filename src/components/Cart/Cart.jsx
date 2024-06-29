import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../../redux/cartSlice';
import { calculateTotalPrice } from '../../utils';
import { useState } from 'react';
import Notification from '../Notification/Notification';
import { NOTIFICATION_MSGS } from '../../constants';
import CustomImage from '../CustomImage/CustomImage';
import Header from '../Header/Header';

const Cart = () => {
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState('');
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const isCartEmpty = cartItems?.length === 0;

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
    setNotificationMsg(NOTIFICATION_MSGS.REMOVE_PRODUCT);
    setNotificationVisible(true);
    setTimeout(() => {
      setNotificationVisible(false);
    }, 2000); // Hide notification after 2 seconds
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    setNotificationMsg(NOTIFICATION_MSGS.CART_CLEAR);
    setNotificationVisible(true);
    setTimeout(() => {
      setNotificationVisible(false);
    }, 2000); // Hide notification after 2 seconds
  };

  return (
    <div className="bg-white p-4 mt-10 mb-12 shadow-md rounded-md">
      <Header
        content={`Cart ${!isCartEmpty ? `(${cartItems?.length})` : ''}`}
      />
      {isCartEmpty ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-start border-b border-gray-200 py-4"
            >
              <div className="flex items-center w-full sm:w-auto">
                <CustomImage
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4 flex flex-col">
                  <div className="font-semibold text-base sm:text-lg">
                    {item.title}
                  </div>
                  <p className="text-gray-700 mt-1">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveItem(item)}
                className="text-red-600 hover:text-red-800 ml-auto mt-2 sm:mt-0"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <div className="text-lg font-semibold">Total :</div>
            <div className="text-xl font-bold">
              ${calculateTotalPrice(cartItems)}
            </div>
          </div>
          <button
            onClick={handleClearCart}
            className="bg-red-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-red-600 transition-colors duration-200"
          >
            Remove All
          </button>
        </div>
      )}
      <Notification message={notificationMsg} visible={notificationVisible} />
    </div>
  );
};

export default Cart;
