import SignUpForm from "../components/SignUpForm";
import LogInForm from "../components/LogInForm";
import { Link } from "react-router";

export default function UserPage(props) {
  return (
    <>
      <Link to="/">
        <h2 style={{ textAlign: "center" }}>Home</h2>
      </Link>
      <div
        style={{
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "50%",
          borderRadius: "25px",
          borderTop: "8px solid rgb(87, 5, 87)",
          borderBottom: "8px solid rgb(87, 5, 87)",
          background:
            "linear-gradient(rgb(248, 77, 158) 0%, rgb(255, 116, 117) 100%)",
        }}
      >
        <SignUpForm setUser={props.setUser} />
        <LogInForm setUser={props.setUser} />
      </div>
    </>
  );
}
