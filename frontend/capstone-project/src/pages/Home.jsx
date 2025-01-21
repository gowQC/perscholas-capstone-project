import Nav from "../components/Nav";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function Home(props) {
  const [products, setProducts] = useState([]);

  const URL = "http://localhost:5050/api/products/";

  const getProducts = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Nav user={props.user} />
      <div className="backgroundImageWinter">
        <div>The Hottest Clothes To Keep You Warm</div>
      </div>
      {/*repurposed the productDisplay component with minor adjustment*/}
      <div className="productsGrid">
        {products && products.length > 0 ? (
          <>
            {products.map((product) => {
              if (product.promoted === true) {
                //checks if passed in category from parent page matches
                return (
                  <ProductCard
                    user={props.user}
                    product={product}
                    key={product._id}
                  />
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
      <Footer />
    </>
  );
}
