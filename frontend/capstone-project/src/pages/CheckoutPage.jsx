import { Link } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
//import { StateSelect } from "../components/StateSelect.jsx";
// npm install @material-ui/core
// import Dialog from "@material-ui/core/Dialog";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import Button from "@material-ui/core/Button";

export default function CheckoutPage({ user }) {
  const [addressInfo, setAddressInfo] = useState({
    streetAddress: "",
    state: "",
    city: "",
    zip: "",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    cardHolder: "",
    cvv: "",
    expirationDate: "",
  });
  const [currentCart, setCurrentCart] = useState({});
  // const [total, setTotal] = useState(0);
  let total = 0;

  const URL = `http://localhost:5050/api/users/${user._id}`;

  const getActiveCart = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setCurrentCart(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeAddress = (e) => {
    setAddressInfo({ ...addressInfo, [e.target.name]: e.target.value });
  };

  const handleChangePayment = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  async function handleClick(item) {
    if (confirm(`Are you sure you want to remove your ${item} listing?`)) {
      try {
        await axios.put(`${URL}?field=${item}`);
        alert(`Successfully removed ${item} listing from your cart.`);
        getActiveCart();
      } catch (error) {
        console.error(error);
      }
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // grabs date of order when placed
    const date = new Date();
    // add the date field to cart and send that as the object for order field
    const orderedCart = { ...currentCart, date: `${date}` };
    const payload = { addressInfo, paymentInfo, orderedCart };
    console.log(payload);
    // PUT data to user document
    try {
      await axios.put(
        `http://localhost:5050/api/users/ORDER/${user._id}`,
        payload
      );
      alert("Order placed! Thank you for shopping with us!");
      window.location.href = "http://localhost:5173/";
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getActiveCart();
  }, []);

  return (
    <>
      {/*case 1 of 3: user logged in AND has items in cart*/}
      {user && Object.keys(currentCart).length !== 0 ? (
        <>
          <Link
            to="/"
            style={{
              fontSize: "1.5em",
              textDecoration: "none",
              position: "absolute",
              marginLeft: "70%",
            }}
          >
            Return Home
          </Link>
          <form className="checkout" onSubmit={handleSubmit}>
            {/* addressInfo */}
            <div style={{ textAlign: "center" }}>Delivery Address</div>
            <hr style={{ width: "80%" }} />
            <label>Street Address:</label>{" "}
            <input
              type="text"
              placeholder="Street Address"
              name="streetAddress"
              value={addressInfo.streetAddress}
              onChange={handleChangeAddress}
              required
            />
            <br />
            <label htmlFor="">State:</label>{" "}
            <select
              type="text"
              placeholder="State"
              name="state"
              value={addressInfo.state}
              onChange={handleChangeAddress}
              required
            >
              <option value=""></option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
            <br />
            <label>City:</label>
            <input
              type="text"
              placeholder="City"
              name="city"
              value={addressInfo.city}
              onChange={handleChangeAddress}
              required
            />
            <br />
            <label>Zip Code:</label>{" "}
            <input
              type="text"
              placeholder="Zip Code"
              minLength="5"
              maxLength="5"
              name="zip"
              value={addressInfo.zip}
              onChange={handleChangeAddress}
              required
            />
            <br />
            {/* paymentInfo */}
            <div style={{ textAlign: "center" }}>Payment Info</div>
            <hr style={{ width: "80%" }} />
            <label>Card Number:</label>{" "}
            <input
              type="text"
              placeholder="Card Number"
              minLength="15"
              maxLength="19"
              name="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={handleChangePayment}
              required
            />
            <br />
            <label>Card Holder's Name</label>
            <input
              type="text"
              placeholder="Full Name"
              name="cardHolder"
              value={paymentInfo.cardHolder}
              onChange={handleChangePayment}
              required
            />
            <br />
            <label>Card CVV (3 or 4 digit code)</label>
            <input
              type="text"
              placeholder="CVV"
              minLength="3"
              maxLength="4"
              name="cvv"
              value={paymentInfo.cvv}
              onChange={handleChangePayment}
              required
            />
            <br />
            <label>Expiration Date</label>
            <input
              type="text"
              placeholder="MM/DD"
              pattern="^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])$"
              name="expirationDate"
              minLength="5"
              maxLength="5"
              value={paymentInfo.expirationDate}
              onChange={handleChangePayment}
              required
            />
            <br />
            {/* checkout items display */}
            <div style={{ textAlign: "center" }}>Checkout</div>
            <hr style={{ width: "80%" }} />
            <div className="checkoutContent">
              {Object.keys(currentCart).map((item) => {
                return (
                  // first we iterate through each field of the cart object, essentially grabbing the child objects
                  <div className="checkoutItem">
                    <img
                      src={currentCart[item].imageUrl}
                      alt=""
                      width="20%"
                      style={{
                        aspectRatio: "1/1",
                        border: "2px solid black",
                        borderRadius: "25px",
                      }}
                    />
                    <div className="checkoutItemDetails">
                      <div>{item}</div>
                      <ul>
                        Ordered sizes:
                        {Object.keys(currentCart[item])
                          .filter(
                            (field) => field !== "cost" && field !== "imageUrl"
                          )
                          .map((field) => {
                            return (
                              // then we take those child objects and iterate trough each field that isn't "cost" or "imageUrl" and has a value > 0
                              <>
                                {currentCart[item][field] > 0 ? (
                                  <li>
                                    {field.replace("Quantity", "")}:{" "}
                                    {currentCart[item][field]}
                                  </li>
                                ) : (
                                  <></>
                                )}
                              </>
                            );
                          })}
                      </ul>
                      <span style={{ display: "none" }}>
                        {/* lazy way of calculating total and not displaying it until the end */}
                        {(total += Number(currentCart[item].cost))}
                      </span>
                      <div>${currentCart[item].cost}</div>
                    </div>
                    <button
                      style={{
                        height: "20%",
                        margin: "auto 40px",
                      }}
                      onClick={() => handleClick(item)}
                    >
                      X
                    </button>
                  </div>
                );
              })}
            </div>
            <div style={{ textAlign: "center" }}>
              Total Price: ${total.toFixed(2)}
            </div>
            <br />
            <input
              type="submit"
              value={"Confirm Purchase"}
              style={{ margin: "auto" }}
            />
          </form>
        </>
      ) : user && Object.keys(currentCart).length === 0 ? (
        <>
          <div>Your cart is empty!</div>
          <Link to="/">Home</Link>
        </>
      ) : (
        <>
          {/*case 3 of 3: no user logged in + cart also defaults to nothing if no found user*/}
          No user found! Login to enter checkout!
        </>
      )}
    </>
  );
}
