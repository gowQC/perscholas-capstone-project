import { useState } from "react";

export default function ProductCard({ user, product }) {
  const [productName, setProductName] = useState("");

  function handleClick() {
    console.log(user);
    if (user) {
      alert(`Button clicked by ${user.fname} for ${product.name}!`);
    } else {
      alert("You must be signed in to add to cart.");
    }
  }

  return (
    <div className="productCard">
      <h1>{product.name}</h1>
      <img
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "25px",
          border: "5px solid rgb(255, 116, 117)",
        }}
        src={product.imageUrl}
        alt="Product image"
      />
      <h2 style={{ padding: "0px 10px" }}>{product.description}</h2>
      <ul
        style={{
          padding: "0px",
        }}
      >
        {product.XSQuantity > 0 ? (
          <button>XS</button>
        ) : (
          <button disabled>XS</button>
        )}
        {product.SQuantity > 0 ? (
          <button>S</button>
        ) : (
          <button disabled>S</button>
        )}
        {product.MQuantity > 0 ? (
          <button>M</button>
        ) : (
          <button disabled>M</button>
        )}
        {product.LQuantity > 0 ? (
          <button>L</button>
        ) : (
          <button disabled>L</button>
        )}
        {product.XLQuantity > 0 ? (
          <button>XL</button>
        ) : (
          <button disabled>XL</button>
        )}
        {product.XXLQuantity > 0 ? (
          <button>XXL</button>
        ) : (
          <button disabled>XXL</button>
        )}
      </ul>
      <div>${product.price}</div>
      {product.stock > 0 ? (
        <button onClick={handleClick} style={{ marginBottom: "10px" }}>
          Add to cart
        </button>
      ) : (
        <button disabled>Out of stock</button>
      )}
    </div>
  );
}
