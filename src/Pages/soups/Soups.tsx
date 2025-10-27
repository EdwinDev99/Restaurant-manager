import CategoryPage from "../../components/CategoryPage";

export default function Soups() {
  const products = [
    { name: "Sopa Del Dia", price: 5000 },
    { name: "Sopa Pequena", price: 7000 },
    { name: "Sopa Grande", price: 10000 },
    { name: "Para llevar", price: 1000 },
  ];

  return <CategoryPage title="Bedidas" products={products} />;
}
