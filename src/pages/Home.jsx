import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../products.js";

const Home = () => {
  const [productsData, setProductsData] = useState(products);
  const [visibleCount, setVisbleCount] = useState(8);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("carts")) || []
  );

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="container">
      <h3 className="mt-3">All Product</h3>
      <div className="mt-3 d-flex justify-content-between flex-wrap gap-5">
        {productsData.slice(0, visibleCount).map((pro) => (
          <ProductCard
            key={pro.id}
            product={pro}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      </div>
      <div className="d-flex justify-content-center my-5">
        {visibleCount >= productsData.length ? (
          <button
            onClick={() => setVisbleCount(8)}
            className="btn btn-outline-primary"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setVisbleCount(visibleCount + 8)}
            className="btn btn-outline-primary"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
