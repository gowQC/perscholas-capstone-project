import Logo from "./Logo";
import { Link } from "react-router";

export default function Nav() {
  return (
    <nav className="navbar">
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
      <Link to="/user">
        <div>Sign Up or Login</div>
      </Link>
    </nav>
  );
}
