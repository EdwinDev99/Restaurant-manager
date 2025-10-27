// src/pages/categories/Lunches.tsx
import CategoryPage from "../../components/CategoryPage";

export default function Lunches() {
  const products = [
    { name: "Almuerzo", price: 13000 },
    { name: "Bandeja", price: 12000 },
    { name: "Proteína", price: 4500 },
    { name: "Ejecutivo Sobre Barriga", price: 19000 },
    { name: "Ejecutivo Mojarra", price: 19000 },
    { name: "Ejecutivo Churrasco", price: 22000 },
    { name: "Ejecutivo Sopa Especial", price: 20000 },
    { name: "Para Llevar", price: 1000 },
  ];

  return <CategoryPage title="Almuerzos" products={products} />;
}
