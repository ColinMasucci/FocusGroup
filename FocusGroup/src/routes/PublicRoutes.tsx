import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import RegistrationSelection from "../pages/RegistrationSelection";
import SignInPage from "../pages/SignInPage";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/registration" element={<RegistrationSelection />} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  );
};

export default PublicRoutes;
