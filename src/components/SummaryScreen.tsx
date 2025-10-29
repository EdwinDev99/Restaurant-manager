// components/SummaryScreen.tsx
import { useContext } from "react";
import { useOrders } from "../firebase/useOrder"; // Asegúrate de que la ruta es correcta
import TableContext from "../context/TableContext";

export default function SummaryScreen() {
  const { orders, decreaseOrder, clearOrders } = useOrders();

  const total = orders.reduce((sum, p) => sum + p.price * p.quantity, 0);

  const { table } = useContext(TableContext);

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md w-80 h-fit">
      <h2 className="text-3xl font-bold mb-4 text-green-800">
        Resumen {table}
      </h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">No hay productos aún</p>
      ) : (
        <ul>
          {orders.map((p) => (
            <li
              key={p.id}
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
                  onClick={() => decreaseOrder(p.id)}
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

      <div className="mt-4 flex gap-2">
        <button
          onClick={clearOrders}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Limpiar Pedido
        </button>
      </div>
    </div>
  );
}
