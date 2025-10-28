import { useTable } from "../hooks/UseTable";

type SummaryScreenProps = {
  products: {
    name: string;
    price: number;
    quantity: number;
    details?: string;
  }[];
  onRemove: (name: string, details?: string) => void;
};

function SummaryScreen({ products, onRemove }: SummaryScreenProps) {
  const total = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

  const { table } = useTable();

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md w-80 h-fit">
      <h2 className="text-3xl font-bold mb-4 text-green-800">
        Resumen {table}
      </h2>
      {products.length === 0 ? (
        <p className="text-gray-500">No hay productos aún</p>
      ) : (
        <ul>
          {products.map((p, index) => (
            <li
              key={`${p.name}-${index}`}
              className="flex justify-between items-center border-b py-2"
            >
              <div>
                <span className="font-semibold">{p.name}</span>{" "}
                <span>x{p.quantity}</span>
                {p.details && (
                  <p className="text-sm text-gray-500 italic">{p.details}</p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span>${p.price * p.quantity}</span>
                <button
                  onClick={() => onRemove(p.name, p.details)}
                  className="text-red-500 hover:text-red-700 font-bold"
                >
                  -
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 text-right font-bold text-2xl">Total: ${total}</div>
    </div>
  );
}

export default SummaryScreen;
