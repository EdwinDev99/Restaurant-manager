import { createContext } from "react";

type Tablecontext = {
  table: string;
  setTable: (velue: string) => void;
};

export default createContext<Tablecontext>({} as Tablecontext);
