// src/pages/categories/Breakfasts.tsx
import CategoryPage from "../../components/CategoryPage";

export default function Breakfasts() {
  const products = [
    { name: "Calentado", price: 8000 },
    { name: "Huevos al gusto", price: 6000 },
    { name: "Arepa con queso", price: 3000 },
    { name: "Chocolate", price: 2000 },
  ];

  return <CategoryPage title="Desayunos" products={products} />;
}
