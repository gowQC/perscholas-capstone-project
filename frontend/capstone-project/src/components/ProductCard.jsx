import { useState } from "react";
// npm install @material-ui/core
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import OrderSizes from "./OrderSizes";
import axios from "axios";

export default function ProductCard({ user, product }) {
  // store add to cart info
  const defaultOrder = {
    name: "",
    XSQuantity: 0,
    SQuantity: 0,
    MQuantity: 0,
    LQuantity: 0,
    XLQuantity: 0,
    XXLQuantity: 0,
    cost: 0,
  };
  const [order, setOrder] = useState(defaultOrder);

  // opens and closes dialogue box
  const [open, setOpen] = useState(false);
  // dialogue box for signin prompt
  const [signInPrompt, setSignInPrompt] = useState(false);

  function handleClick() {
    if (user) {
      setOpen(!open);
      setOrder({ ...order, name: product.name });
    } else {
      setSignInPrompt(!signInPrompt);
    }
  }

  async function handleConfirmClick() {
    alert(`Successfully added ${product.name} order to cart!`);

    // get order ready to be PUT into cart array in db
    const orderData = { ...order };
    const quantity =
      order.XSQuantity +
      order.SQuantity +
      order.MQuantity +
      order.LQuantity +
      order.XLQuantity +
      order.XXLQuantity;
    const cost = product.price * quantity;
    orderData.cost = cost.toFixed(2); // initialize cost field with number that has 2 decimal places
    console.log(orderData); // has all order info
    // send orderData to db
    try {
      await axios.put(`http://localhost:5050/api/users/${user._id}`, orderData);
    } catch (error) {
      console.log(error);
    } finally {
      // reset for next order to be added to cart
      setOrder(defaultOrder);
      setOpen(!open);
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
      <Dialog open={open} onClose={handleClick}>
        <DialogTitle>{"Add to Cart"}</DialogTitle>
        <DialogContent>
          <DialogContentText>How many {product.name} orders?</DialogContentText>
          <DialogContentText>
            <OrderSizes product={product} order={order} setOrder={setOrder} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmClick} color="primary" autoFocus>
            Add to Cart
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={signInPrompt} onClose={handleClick}>
        <DialogTitle>Must Sign In</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You must sign in before adding items to your cart.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick} color="primary" autoFocus>
            I understand
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
