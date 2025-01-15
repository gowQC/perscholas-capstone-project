import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

export default function ProductDisplay({ user, category }) {
  const [products, setProducts] = useState([]);

  const URL = "http://localhost:5050/api/products/";

  const getProducts = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setProducts(data);
      console.log(products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
    console.log(products);
  }, []);

  return (
    <div className="productsGrid">
      {products && products.length > 0 ? (
        <>
          {products.map((product) => {
            if (category === product.category) {
              //checks if passed in category from parent page matches
              return (
                <ProductCard user={user} product={product} key={product._id} />
              );
            } else {
              return <></>;
            }
          })}
        </>
      ) : (
        <>No search results found...</>
      )}
    </div>
  );
}
