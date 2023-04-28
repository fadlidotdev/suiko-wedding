import React from "react";

function Button({ children, className, ...otherProps }) {
  return (
    <button
      className={`bg-[#171717] text-white text-sm py-2 px-4 rounded-full ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
