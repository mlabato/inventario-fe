import React, { useState, useEffect, useCallback } from "react";

const ProductContext = React.createContext({
  products: [],
  areas: [],
  users: [],
  isLoading: true,
});

const URL = "http://localhost:4000/";

export const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [areas, setAreas] = useState([]);
  const [users, setUsers] = useState([]);
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

    const fetchAreas = async () => {
      try {
        
        const response = await fetch(URL + "areas");

        const body = await response.json();

        if (response.status === 200) {
          setAreas(body);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchAreas().catch(console.error)

    const fetchUsers = async () => {
      try {
       
        const response = await fetch(URL + "users");

        const body = await response.json();

        if (response.status === 200) {
          setUsers(body);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchUsers().catch(console.error)
  },[]);

 

  const contextValue = {
    products: products,
    areas: areas,
    users: users,
    isLoading: productIsLoading,
  };
  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
