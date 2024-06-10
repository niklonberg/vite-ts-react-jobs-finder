import React, { PropsWithChildren } from "react";
import { ClassName } from "../types/className";

const Card: React.FC<PropsWithChildren<ClassName>> = ({
  className,
  children,
}) => {
  return (
    <div className={`bg-gray-100 p-6 rounded-lg shadow-md ${className ?? ""}`}>
      {children}
    </div>
  );
};

export default Card;
