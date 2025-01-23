import Nav from "../components/Nav";
import axios from "axios";

export default function UserPage({ user }) {
  const URL = `https://perscholas-capstone-project-backend.onrender.com/api/users/${user._id}`;

  const handleClick = async () => {
    if (confirm("Delete your profile?")) {
      await axios.delete(URL);
      localStorage.removeItem("token");
      alert("Deleted!");
      window.location.href =
        "https://glowing-sunflower-61048c.netlify.app/" ||
        "http://localhost:5173/";
    }
  };

  return (
    <>
      <Nav user={user} />
      <div>
        <div>Order History</div>
        <div>Shipping Address</div>
        <div>Payment Info</div>
        <button onClick={handleClick}>Delete Account?</button>
      </div>
    </>
  );
}
