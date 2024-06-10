import React, { PropsWithChildren } from "react";
import { CSSClass } from "../types/CSSClass";

const HeadingThree: React.FC<PropsWithChildren<CSSClass>> = ({
  customClasses,
  children,
}) => {
  return (
    <h3 className={`font-bold text-xl mb-2 ${customClasses ?? ""}`}>
      {children}
    </h3>
  );
};

export default HeadingThree;
