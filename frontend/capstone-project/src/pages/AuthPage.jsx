import SignUpForm from "../components/SignUpForm";
import LogInForm from "../components/LogInForm";

export default function UserPage(props) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SignUpForm setUser={props.setUser} />
      <LogInForm setUser={props.setUser} />
    </div>
  );
}
