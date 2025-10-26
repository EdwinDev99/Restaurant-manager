import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import SummaryScreen from "../../components/SummaryScreen";
import { useState } from "react";

type Product = {
  name: string;
  price: number;
  quantity: number;
  details?: string;
};

function Lunches() {
  const [selectProducts, setSelectProducts] = useState<Product[]>([]);
  const [showDetails, setShowDetails] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<{
    name: string;
    price: number;
  } | null>(null);

  const [details, setDetails] = useState("");

  // Agregar producto con detalles
  const handleAddProduct = (name: string, price: number, details?: string) => {
    setSelectProducts((prev) => {
      const existingProduct = prev.find(
        (p) => p.name === name && p.details === details
      );

      if (existingProduct) {
        return prev.map((p) =>
          p.name === name && p.details === details
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...prev, { name, price, quantity: 1, details }];
    });
  };

  // Disminuir cantidad o eliminar
  const handleRemoveProduct = (name: string, details?: string) => {
    setSelectProducts((prev) =>
      prev
        .map((p) =>
          p.name === name && p.details === details
            ? { ...p, quantity: p.quantity - 1 }
            : p
        )
        .filter((p) => p.quantity > 0)
    );
  };

  // Mostrar modal para escribir detalles
  const handleOpenDetails = (name: string, price: number) => {
    setCurrentProduct({ name, price });
    setDetails("");
    setShowDetails(true);
  };

  // Confirmar detalle
  const handleConfirmDetails = () => {
    if (currentProduct) {
      handleAddProduct(currentProduct.name, currentProduct.price, details);
    }
    setShowDetails(false);
    setDetails("");
    setCurrentProduct(null);
  };

  return (
    <div className="bg-orange-200 min-h-screen ">
      <header className="relative flex justify-center items-center h-20 p-5">
        <Link to={"/categories"}>
          <FaArrowAltCircleLeft
            color="green"
            className="absolute left-2.5 size-8"
          />
        </Link>
        <h1 className="text-green-900 text-7xl font-bold font-serif">
          Delisopas
        </h1>
      </header>

      <main className="flex flex-col items-center lg:flex-row lg:justify-around md:justify-between m-4 lg:m-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 grid-rows-2 gap-24">
          <ProductCard onAdd={handleOpenDetails} price={13000}>
            Almuerzos
          </ProductCard>

          <ProductCard onAdd={handleOpenDetails} price={12000}>
            Bandeja
          </ProductCard>
          <ProductCard onAdd={handleOpenDetails} price={4500}>
            Proteina
          </ProductCard>
          <ProductCard onAdd={handleOpenDetails} price={19000}>
            Ejecutivo Sobre Barriga
          </ProductCard>
          <ProductCard onAdd={handleOpenDetails} price={19000}>
            Ejecutivo mojarra
          </ProductCard>
          <ProductCard onAdd={handleOpenDetails} price={22000}>
            Ejecutivo churrasco
          </ProductCard>
          <ProductCard onAdd={handleOpenDetails} price={1000}>
            Para llevar
          </ProductCard>
        </div>

        <div className="m-8 lg:mt-0 lg:ml-12">
          <SummaryScreen
            products={selectProducts}
            onRemove={handleRemoveProduct}
          />
        </div>
      </main>

      {/* Modal simple */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
            <h2 className="text-2xl font-bold text-green-800 mb-3">
              Agregar detalles
            </h2>
            <textarea
              className="w-full border rounded-lg p-2 mb-4"
              placeholder="Ej: sin cebolla, sopa de huevo..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDetails(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded-lg"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmDetails}
                className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Lunches;
