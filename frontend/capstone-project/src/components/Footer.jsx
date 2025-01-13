import { Link } from "react-router";

export default function Footer() {
  return (
    <footer>
      <Link to="/about">
        <div>About Us</div>
      </Link>
      <Link to="/contact">
        <div>Contact</div>
      </Link>
      <Link to="/careers">
        <div>Careers</div>
      </Link>
      <Link to="/privacy">
        <div>Privacy Notice</div>
      </Link>
    </footer>
  );
}
