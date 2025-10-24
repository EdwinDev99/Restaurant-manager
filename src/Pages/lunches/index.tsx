import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

type Props = {};

function Lunches({}: Props) {
  return (
    <div className="bg-orange-200 min-h-screen">
      <header className=" relative flex justify-center items-center h-20 p-5">
        <Link to={"/categories"}>
          <FaArrowAltCircleLeft
            color="green"
            className="absolute left-2.5 size-8 "
          />
        </Link>
        <h1 className="text-green-900 text-7xl font-bold font-serif ">
          Delisopas
        </h1>
      </header>
      <main className="flex m-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 grid-rows-2 gap-24 ">
          <ProductCard price={13000}>Almuerzos</ProductCard>
          <ProductCard price={12000}>Bandeja</ProductCard>
          <ProductCard price={4500}>Proteina</ProductCard>
          <ProductCard price={19000}>Ejecutivo Sobre Barriga</ProductCard>
          <ProductCard price={19000}>Ejecutivo mojarra</ProductCard>
          <ProductCard price={22000}>Ejecutivo churrasco</ProductCard>
          <ProductCard price={1000}>Para llevar</ProductCard>
        </div>
      </main>
    </div>
  );
}

export default Lunches;
