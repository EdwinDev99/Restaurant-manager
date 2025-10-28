import { Link } from "react-router-dom";
import { useContext } from "react";
import TableContext from "../context/TableContext";

type Props = {
  nameTable: string;
};

function Table({ nameTable }: Props) {
  const { setTable } = useContext(TableContext);

  const handleClick = () => {
    setTable(nameTable); // Guardamos la mesa seleccionada en el Context
  };

  return (
    <Link to={"/categories"} onClick={handleClick}>
      <div className="w-44 h-32 bg-amber-900 rounded-full flex items-center justify-center">
        <p className="text-white text-center">{nameTable}</p>
      </div>
    </Link>
  );
}

export default Table;
