import React, { PropsWithChildren } from "react";
import { CSSClass } from "../types/CSSClass";

const Card: React.FC<PropsWithChildren<CSSClass>> = ({
  customClasses,
  children,
}) => {
  return (
    <div
      className={`bg-gray-100 p-6 rounded-lg shadow-md ${customClasses ?? ""}`}
    >
      {children}
    </div>
  );
};

export default Card;
