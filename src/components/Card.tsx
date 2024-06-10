import React, { PropsWithChildren } from "react";

interface CardProps {
  className?: string;
}

const Card: React.FC<PropsWithChildren<CardProps>> = ({
  className,
  children,
}) => {
  return (
    <div className={`bg-gray-100 p-6 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default Card;
