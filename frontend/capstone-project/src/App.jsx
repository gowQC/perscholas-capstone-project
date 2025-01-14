import Home from "./pages/Home";
import ShirtsPage from "./pages/ShirtsPage";
import PantsPage from "./pages/PantsPage";
import FootwarePage from "./pages/FootwarePage";
import SeasonalPage from "./pages/SeasonalPage";
import AuthPage from "./pages/AuthPage";
import CheckoutPage from "./pages/CheckoutPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import PrivacyPage from "./pages/PrivacyPage";
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
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </>
  );
}

export default App;
