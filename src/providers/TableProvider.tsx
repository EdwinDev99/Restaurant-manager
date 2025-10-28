import { useState } from "react";
import TableContext from "../context/TableContext";

export const TableProvider = ({ children }: { children: React.ReactNode }) => {
  const [table, setTable] = useState("");

  return (
    <TableContext.Provider value={{ table, setTable }}>
      {children}
    </TableContext.Provider>
  );
};
