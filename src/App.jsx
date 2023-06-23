import { useState } from "react";
import ProductList from "./components/ProductList/ProductList.jsx";
import SearchBar from "./components/SearchBar";
import useFetch from "./hooks/useFetch";

const BASE_URL = "http://localhost:3001/products";

function App() {
  const products = useFetch(BASE_URL);

  // TODO: Use useState to manage the stte of the search bar (setSearchTerm setInStockOnly, set Category)
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  return (
    <>
      <h1 className="my-4 text-center text-2xl font-black">Product App</h1>
      <SearchBar
        categories={[...new Set(products.map((product) => product.category))]}
        setSearchTerm={setSearchTerm}
        setCategory={setCategory}
      />
      <ProductList
        products={products
          .filter((product) => product.name.includes(searchTerm.toLowerCase()))
          .filter(
            (product) => category === "all" || product.category === category
          )}
      />
    </>
  );
}
export default App;
