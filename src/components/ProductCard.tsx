import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  price: number;
  onAdd: (name: string, price: number) => void;
};

function ProductCard({ children, price, onAdd }: Props) {
  return (
    <button
      onClick={() => onAdd(String(children), price)}
      className="h-20 w-48 bg-green-900 rounded-full flex flex-col items-center justify-center hover:bg-green-700 transition text-white"
    >
      <h1>{children}</h1>
      <span>${price}</span>
    </button>
  );
}

export default ProductCard;
