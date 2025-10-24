import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function CategoryCard({ children }: Props) {
  return (
    <div className="h-44 w-56 bg-amber-900 rounded-full flex justify-center items-center">
      <span className="text-white">{children}</span>
    </div>
  );
}

export default CategoryCard;
