import SignUpForm from "../components/SignUpForm";
import LogInForm from "../components/LogInForm";

export default function UserPage() {
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
      <SignUpForm />
      <LogInForm />
    </div>
  );
}
