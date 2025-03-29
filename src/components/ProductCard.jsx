import React, { useState } from "react";

const ProductCard = ({ product, setCartItems, cartItems }) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  const addToCart = () => {
    const existProduct = cartItems.find((item) => item.id === product.id);

    if (existProduct) {
      const newCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(newCartItems);
    } else {
      const cartItemsObj = { ...product, user_id: userData.id, quantity: 1 };
      const newCartItems = [...cartItems, cartItemsObj];
      setCartItems(newCartItems);
    }
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        height={"230px"}
        className="object-fit-cover card-img-top"
        src={product.image}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title text-truncate">{product.name}</h5>
        <p className="card-text text-truncate">{product.description}</p>
        <h5 className="">${product.price}</h5>
        <button
          onClick={() => {
            addToCart();
          }}
          className="btn btn-primary mt-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
