import Logo from "./Logo";
import { Link } from "react-router";
import { logOut } from "../utilities/users-services";

export default function Nav(props) {
  function handleLogout() {
    logOut();
    // update state will also cause a rerender
    setUser(null);
  }

  return (
    <nav className="navbar">
      {console.log(props.user)}
      <Logo />
      <ul className="navLinks">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/shirts">
          <div>Shirts</div>
        </Link>
        <Link to="/pants">
          <div>Pants</div>
        </Link>
        <Link to="/footware">
          <div>Footware</div>
        </Link>
        <Link to="/seasonal">
          <div>Seasonal</div>
        </Link>
      </ul>
      {props.user !== null ? (
        <div className="greetingsContainer">
          <div>Hello</div>
          <Link to="/profile">{props.user.fname}!</Link>
          <span>
            <Link to="/checkout">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </span>
          <Link to="/" onClick={handleLogout}>
            <div>Sign Out</div>
          </Link>
        </div>
      ) : (
        <Link to="/auth">
          <div>Sign Up or Login</div>
        </Link>
      )}
    </nav>
  );
}
