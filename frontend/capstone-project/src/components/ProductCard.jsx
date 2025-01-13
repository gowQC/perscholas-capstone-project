export default function ProductCard() {
  return (
    <div className="productCard">
      <div>product name</div>
      <img src="" alt="Product image" />
      <div>product description</div>
      <ul>
        <li>size1 + in stock or not</li>
        <li>size2 + in stock or not</li>
        <li>size3 + in stock or not</li>
      </ul>
      <div>product price</div>
      <button disabled>place in cart</button>
    </div>
  );
}
