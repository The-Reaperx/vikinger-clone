import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode[] | ReactNode;
}
const Card = ({ children }: CardProps) => {
  return <div className="card">{children}</div>;
};

export default Card;
