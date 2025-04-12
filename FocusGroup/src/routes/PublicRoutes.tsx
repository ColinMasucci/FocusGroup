import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import RoleSelectionPage from "../pages/RoleSelectionPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/account/select-role" element={<RoleSelectionPage />} />
      <Route path="/account/signin" element={<SignInPage />} />
      <Route path="/account/signup" element={<SignUpPage />} />
    </Routes>
  );
};

export default PublicRoutes;
