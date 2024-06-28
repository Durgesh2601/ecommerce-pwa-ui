import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NAVLINKS } from "../../constants";
import logo from "../../assets/logo.svg";

const NavigationMenu = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="bg-blue-500 text-white p-4 fixed top-0 left-0 w-full z-10 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />{" "}
        <span className="text-xl font-semibold">My E-Commerce</span>
      </div>
      <ul className="flex space-x-4">
        {NAVLINKS.map((item) => (
          <li key={item?.id}>
            <Link to={item?.link} className="text-white">
              {item?.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="relative">
        <Link to="/cart" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>

          {cartItems.length > 0 && (
            <span className="absolute cart-count top-0 right-0 bg-red-600 text-white rounded-full px-1.5 text-xs">
              {cartItems.length > 9 ? "9+" : cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default NavigationMenu;
