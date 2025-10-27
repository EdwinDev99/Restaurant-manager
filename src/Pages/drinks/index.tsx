import CategoryPage from "../../components/CategoryPage";

export default function Drinks() {
  const products = [
    { name: "Cafe", price: 3000 },
    { name: "Chocolate", price: 3000 },
    { name: "Perico", price: 2000 },
    { name: "Gaseosa Grande", price: 3500 },
    { name: "Gaseosa pequena", price: 2500 },
    { name: "Agua Grande", price: 2500 },
    { name: "Agua pequena", price: 1500 },
    { name: "Jugo hit ", price: 2500 },
    { name: "Jugo hit grande", price: 3000 },
    { name: "Jugos Naturaes Agua", price: 4500 },
    { name: "Jugos Natuareles Leche", price: 5500 },
    { name: "Para llevar", price: 1000 },
  ];

  return <CategoryPage title="Bedidas" products={products} />;
}
