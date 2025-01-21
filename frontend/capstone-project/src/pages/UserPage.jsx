import Nav from "../components/Nav";
import axios from "axios";

export default function UserPage({ user }) {
  const URL = `http://localhost:5050/api/users/${user._id}`;

  const handleClick = async () => {
    if (confirm("Delete your profile?")) {
      await axios.delete(URL);
      localStorage.removeItem("token");
      alert("Deleted!");
      window.location.href = "http://localhost:5173/";
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
