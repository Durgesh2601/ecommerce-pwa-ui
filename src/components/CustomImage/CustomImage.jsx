/* eslint-disable react/prop-types */
import { useState } from "react";

const CustomImage = ({ src, alt, className = "" }) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoaded = () => {
    setTimeout(() => {
      setLoaded(true); // false loader to make ux good
    }, 1000);
  };

  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div className="absolute inset-1 bg-gray-200 dark:bg-gray-300 animate-pulse rounded-md overflow-hidden"></div>
      )}
      <img
        src={src}
        alt={alt || "Custom Image"}
        className={`rounded-md ${className} ${loaded ? "block" : "hidden"}`}
        style={{ opacity: loaded ? 1 : 0 }}
        onLoad={handleImageLoaded}
      />
    </div>
  );
};

export default CustomImage;
