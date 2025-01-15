import { useState } from "react";
import { login } from "../utilities/users-services";

export default function LogInForm(props) {
  const [logInFormData, setLogInFormData] = useState({
    email: "",
    password: "",
  });

  const [logInError, setLogInError] = useState("");

  // onChange handlers for respective forms - fills whatever was in object before + adds modifications made by user to the new state
  const handleLogInChange = (e) => {
    setLogInFormData({ ...logInFormData, [e.target.name]: e.target.value });
    setLogInError("");
  };

  // form submit functions - will be using util functions for API calls
  const handleLogInSubmit = async (e) => {
    e.preventDefault();
    const credentials = { ...logInFormData };
    try {
      // the promise returned by the login service method wil resolve to the user
      // object included in the payload of the JWT
      const user = await login(credentials);
      props.setUser(user);
    } catch (error) {
      setLogInError("Log in failed - try again.");
    }
  };

  return (
    <form
      autoComplete="off"
      style={{ margin: "30px" }}
      onSubmit={handleLogInSubmit}
    >
      <h2>Log In Here</h2>
      <label>Email: </label>
      <input
        type="email"
        name="email"
        value={logInFormData.email}
        onChange={handleLogInChange}
        required
      />{" "}
      <br />
      <label>Password: </label>
      <input
        type="password"
        name="password"
        value={logInFormData.password}
        onChange={handleLogInChange}
        required
      />{" "}
      <br />
      <button type="submit">Log In</button>
    </form>
  );
}
