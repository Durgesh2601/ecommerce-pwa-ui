/* eslint-disable react/prop-types */

const Notification = ({ message, visible }) => {
  return (
    <div
      className={`fixed z-40 top-24 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-md transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transition: "opacity 0.5s" }}
    >
      {message}
    </div>
  );
};

export default Notification;
