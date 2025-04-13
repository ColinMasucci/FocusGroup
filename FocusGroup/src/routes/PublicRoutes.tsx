import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import RegistrationSelection from "../pages/RegistrationSelection";
import RegistrationCompany from "../pages/RegistrationCompany";
import RegistrationReviewer from "../pages/RegistrationReviewer";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/registration" element={<RegistrationSelection />} />
      <Route path="/registration/company" element={<RegistrationCompany />} />
      <Route path="/registration/reviewer" element={<RegistrationReviewer />} />
    </Routes>
  );
};

export default PublicRoutes;
