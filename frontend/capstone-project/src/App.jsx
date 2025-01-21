import Home from "./pages/Home";
import ShirtsPage from "./pages/ShirtsPage";
import PantsPage from "./pages/PantsPage";
import FootwarePage from "./pages/FootwarePage";
import SeasonalPage from "./pages/SeasonalPage";
import AuthPage from "./pages/AuthPage";
import UserPage from "./pages/UserPage";
import CheckoutPage from "./pages/CheckoutPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import PrivacyPage from "./pages/PrivacyPage";
import { Route, Routes } from "react-router";
import { useState } from "react";
import { getUser } from "./utilities/users-services";
import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    //user will be passed down to pages that use the Nav component, but the function to set user will be sent to AuthPage
    <>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/shirts" element={<ShirtsPage user={user} />} />
        <Route path="/pants" element={<PantsPage user={user} />} />
        <Route path="/footware" element={<FootwarePage user={user} />} />
        <Route path="/seasonal" element={<SeasonalPage user={user} />} />
        <Route
          path="/auth"
          element={<AuthPage user={user} setUser={setUser} />}
        />
        <Route path="/profile" element={<UserPage user={user} />} />
        <Route path="/checkout" element={<CheckoutPage user={user} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </>
  );
}

export default App;
