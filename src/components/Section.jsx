import React from "react";

function Section({ children, className, ...otherProps }) {
  return (
    <section
      className="min-h-[100vh] p-5 flex items-center justify-center text-center"
      {...otherProps}
    >
      <div className={className}>{children}</div>
    </section>
  );
}

export default Section;
