import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
};

function Table({ children }: Props) {
  return (
    <Link to={"/categories"}>
      <div className="w-44 h-32 bg-amber-900 rounded-full flex items-center justify-center">
        <p className="text-white text-center">{children}</p>
      </div>
    </Link>
  );
}

export default Table;
