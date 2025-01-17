export default function OrderSizes({ product, order, setOrder }) {
  // makes sure appropriate numbers are inputted by user
  function validate(e) {
    // case - leading 0
    if (e.target.value.length > 1 && e.target.value.startsWith("0")) {
      e.target.value = e.target.value.slice(1);
    }
    // case - goes below or surpasses number range
    if (Number(e.target.value) < Number(e.target.min)) {
      e.target.value = e.target.min;
    }
    if (Number(e.target.value) > e.target.max) {
      e.target.value = e.target.max;
    }
  }

  const handleChange = (e) => {
    validate(e);
    setOrder({ ...order, [e.target.name]: Number(e.target.value) });
  };

  return (
    <>
      {product.XSQuantity > 0 ? (
        <>
          <label>XS:</label>{" "}
          <input
            type="number"
            min="0"
            placeholder="0"
            name="XSQuantity"
            max={product.XSQuantity}
            value={order.XSQuantity}
            onChange={handleChange}
          />{" "}
          <span>Availability: {product.XSQuantity}</span>
          <br />
        </>
      ) : (
        <></>
      )}
      {product.SQuantity > 0 ? (
        <>
          <label>S:</label>{" "}
          <input
            type="number"
            min="0"
            placeholder="0"
            name="SQuantity"
            max={product.SQuantity}
            value={order.SQuantity}
            onChange={handleChange}
          />{" "}
          <span>Availability: {product.SQuantity}</span>
          <br />
        </>
      ) : (
        <></>
      )}
      {product.MQuantity > 0 ? (
        <>
          <label>M:</label>{" "}
          <input
            type="number"
            min="0"
            placeholder="0"
            name="MQuantity"
            max={product.MQuantity}
            value={order.MQuantity}
            onChange={handleChange}
          />{" "}
          <span>Availability: {product.MQuantity}</span>
          <br />
        </>
      ) : (
        <></>
      )}
      {product.LQuantity > 0 ? (
        <>
          <label>L:</label>{" "}
          <input
            type="number"
            min="0"
            placeholder="0"
            name="LQuantity"
            max={product.LQuantity}
            value={order.LQuantity}
            onChange={handleChange}
          />{" "}
          <span>Availability: {product.LQuantity}</span>
          <br />
        </>
      ) : (
        <></>
      )}
      {product.XLQuantity > 0 ? (
        <>
          <label>XL:</label>{" "}
          <input
            type="number"
            min="0"
            placeholder="0"
            name="XLQuantity"
            max={product.XLQuantity}
            value={order.XLQuantity}
            onChange={handleChange}
          />{" "}
          <span>Availability: {product.XLQuantity}</span>
          <br />
        </>
      ) : (
        <></>
      )}
      {product.XXLQuantity > 0 ? (
        <>
          <label>XXL:</label>{" "}
          <input
            type="number"
            min="0"
            placeholder="0"
            name="XXLQuantity"
            max={product.XXLQuantity}
            value={order.XXLQuantity}
            onChange={handleChange}
          />{" "}
          <span>Availability: {product.XXLQuantity}</span>
          <br />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
