import { useState } from "react";

export default function SignUpForm() {
  const [signUpFormData, setSignUpFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [signUpError, setSignUpError] = useState("");

  // onChange handler - fills whatever was in object before + adds modifications made by user to the new state
  const handleSignUpChange = (e) => {
    setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
    setSignUpError("");
  };

  // form submit function - will be using util functions for API calls
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    try {
      const submitData = { ...signUpFormData };
      delete submitData.confirm; // only used for password confirmation purposes - confirm is not actually stored in db
      console.log(submitData);
    } catch (error) {
      setSignUpError("Sing up failed - Try again.");
    }
  };

  return (
    <form
      autoComplete="off"
      style={{ margin: "30px" }}
      onSubmit={handleSignUpSubmit}
    >
      <h2>Sign Up Here</h2>
      <label>First Name: </label>
      <input
        type="text"
        name="fname"
        value={signUpFormData.fname}
        onChange={handleSignUpChange}
        required
      />{" "}
      <br />
      <label>Last Name: </label>
      <input
        type="text"
        name="lname"
        value={signUpFormData.lname}
        onChange={handleSignUpChange}
        required
      />{" "}
      <br />
      <label>Email: </label>
      <input
        type="email"
        name="email"
        value={signUpFormData.email}
        onChange={handleSignUpChange}
        required
      />{" "}
      <br />
      <label>Password: </label>
      <input
        type="password"
        name="password"
        value={signUpFormData.password}
        onChange={handleSignUpChange}
        required
      />{" "}
      <br />
      <label>Confirm Password: </label>
      <input
        type="password"
        name="confirm"
        value={signUpFormData.confirm}
        onChange={handleSignUpChange}
        required
      />{" "}
      <br />
      <button
        type="submit"
        disabled={signUpFormData.password !== signUpFormData.confirm}
      >
        Sign Up
      </button>
    </form>
  );
}
