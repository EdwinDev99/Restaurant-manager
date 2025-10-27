import CategoryPage from "../../components/CategoryPage";

export default function Others() {
  const products = [
    { name: "Platano con Queso y Bocadillo", price: 5000 },
    { name: "Chicharron Con Arepa", price: 7000 },
    { name: "Arepa", price: 3000 },
    { name: "Huevo Adicional", price: 1000 },
    { name: "Para llevar", price: 1000 },
  ];

  return <CategoryPage title="Bedidas" products={products} />;
}
