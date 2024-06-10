import React, { PropsWithChildren } from "react";
import { ClassName } from "../types/className";

const HeadingThree: React.FC<PropsWithChildren<ClassName>> = ({
  className,
  children,
}) => {
  return (
    <h3 className={`font-bold text-xl mb-2 ${className ?? ""}`}>{children}</h3>
  );
};

export default HeadingThree;
