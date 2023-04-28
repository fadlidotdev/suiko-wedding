import React from "react";
import { twMerge } from "tailwind-merge";

function Section({ isFullScreen = true, headerComponent, children, className, ...otherProps }) {
  return (
    <section
      className={twMerge(
        "p-5 flex flex-col items-center justify-center !place-items-stretch text-center",
        isFullScreen && "min-h-[100vh]",
        className
      )}
      {...otherProps}
    >
      {headerComponent && <div className="mb-5">{headerComponent}</div>}

      {children}
    </section>
  );
}

export default Section;
