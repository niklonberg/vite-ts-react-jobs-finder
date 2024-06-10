import React, { PropsWithChildren } from "react";

interface CardProps {}

const Card = ({ children }: PropsWithChildren) => {
  return <div className="bg-gray-100 p-6 rounded-lg shadow-md">{children}</div>;
};

export default Card;
