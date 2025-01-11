import Home from "./pages/Home";
import ShirtsPage from "./pages/ShirtsPage";
import PantsPage from "./pages/PantsPage";
import FootwarePage from "./pages/FootwarePage";
import SeasonalPage from "./pages/SeasonalPage";
import UserPage from "./pages/UserPage";
import CheckoutPage from "./pages/CheckoutPage";
import { Route, Routes } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shirts" element={<ShirtsPage />} />
        <Route path="/pants" element={<PantsPage />} />
        <Route path="/footware" element={<FootwarePage />} />
        <Route path="/seasonal" element={<SeasonalPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  );
}

export default App;
