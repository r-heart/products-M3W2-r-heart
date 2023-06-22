import React from "react";

const BASE_URL = "http://localhost:3001/products";

export default function useProducts() {
    const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch(BASE_URL).then(resp => resp.json()).then(data => {
      setProducts(data)
    })
  }, []);

  return products;
}