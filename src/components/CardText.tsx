import React, { PropsWithChildren } from "react";
import { CSSClass } from "../types/CSSClass";

const CardText: React.FC<PropsWithChildren<CSSClass>> = ({
  customClasses,
  children,
}) => {
  return <p className={`mt-4 mb-4 ${customClasses ?? ""}`}>{children}</p>;
};

export default CardText;
