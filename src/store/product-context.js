import React, { useState, useEffect, useReducer } from "react";

const ProductContext = React.createContext({
  products: [],
  areas: [],
  isLoading: true,
});

const URL = "http://localhost:4000/";

export const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [areas, setAreas] = useState([]);
  const [productIsLoading, setProductIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProductIsLoading(true);
        const response = await fetch(URL + "products");

        const body = await response.json();

        if (response.status === 200) {
          setProducts(body);
          setProductIsLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts().catch(console.error);
  },[products]);

  const contextValue = {
    products: products,
    areas: areas,
    isLoading: productIsLoading,
  };
  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
