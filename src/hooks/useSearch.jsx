import { useState } from "react";

export default function useSearch(products) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) => category === "all" || product.category === category)
    .filter((product) => !inStockOnly || product.stocked);

  return {
    setSearchTerm,
    setCategory,
    setInStockOnly,
    filteredProducts,
  };
}
