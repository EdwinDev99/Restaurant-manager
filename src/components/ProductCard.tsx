import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  price: number;
};

function ProductCard({ children, price }: Props) {
  return (
    <div className="h-20 w-48 bg-green-900 rounded-full flex flex-col items-center justify-center ">
      <h1 className="text-white">{children}</h1>
      <span className="text-white">{price}</span>
    </div>
  );
}

export default ProductCard;
