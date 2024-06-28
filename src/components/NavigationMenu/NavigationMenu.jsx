import { Link } from "react-router-dom";
import { NAVLINKS } from "../../constants";

const NavigationMenu = () => {
  return (
    <nav className="bg-gray-200 p-4 fixed top-16 left-0 w-full z-10">
      <ul className="flex space-x-4">
        {NAVLINKS.map((item) => (
          <li key={item?.id}>
            <Link to={item?.link} className="text-blue-500">
              {item?.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
