import { Link } from "react-router-dom";
import CategoryCard from "../../components/CategoryCard";
import { FaArrowAltCircleLeft } from "react-icons/fa";

type Props = {};

function CategoriesPage({}: Props) {
  return (
    <div className="bg-orange-200 min-h-screen">
      <header className=" relative flex justify-center items-center h-20 p-5">
        <Link to={"/home"}>
          <FaArrowAltCircleLeft
            color="green"
            className="absolute left-2.5 size-8 "
          />
        </Link>
        <h1 className="text-green-900 text-7xl font-bold font-serif ">
          Delisopas
        </h1>
      </header>
      <main className="flex justify-center h-full mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 grid-rows-2 gap-24 ">
          <Link to={"/lunch"}>
            <CategoryCard>🍖 Almuerzos</CategoryCard>
          </Link>
          <CategoryCard>🥞 Desayunos</CategoryCard>
          <CategoryCard>🍺 Bebidas</CategoryCard>
          <CategoryCard>🍲 Sopas</CategoryCard>
          <CategoryCard>🍽 Otros</CategoryCard>
        </div>
      </main>
    </div>
  );
}

export default CategoriesPage;
