export default function ProductCard({ product }) {
  return (
    <div className="productCard">
      <div>{product.name}</div>
      <img
        style={{ width: "200px", height: "200px", borderRadius: "25px" }}
        src={product.imageUrl}
        alt="Product image"
      />
      <div>{product.description}</div>
      <ul>
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
        <button>Add to cart</button>
      ) : (
        <button disabled>Out of stock</button>
      )}
    </div>
  );
}
