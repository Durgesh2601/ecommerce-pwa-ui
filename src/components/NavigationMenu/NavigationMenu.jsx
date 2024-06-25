const NavigationMenu = () => {
  return (
    <nav className="bg-gray-200 p-4 fixed top-16 left-0 w-full z-10">
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-500">
            Shop
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-500">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-500">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
