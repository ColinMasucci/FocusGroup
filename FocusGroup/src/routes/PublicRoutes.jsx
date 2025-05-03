import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import RegistrationSelection from "../components/RegistrationTabs/RegistrationSelection";
import RegistrationCompany from "../components/RegistrationTabs/RegistrationCompany";
import RegistrationReviewer from "../components/RegistrationTabs/RegistrationReviewer";
import DashboardCompany from "../pages/DashboardCompany";
import DashboardReviewer from "../pages/DashboardReviewer";
import Login from "../pages/Login";
import Onboarding from "../pages/Onboarding"


const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/registration" element={<RegistrationSelection />} />
      <Route path="/registration/company" element={<RegistrationCompany />} />
      <Route path="/registration/reviewer" element={<RegistrationReviewer />} />
      <Route path="/dashboard/company" element={<DashboardCompany />} />
      <Route path="/dashboard/reviewer" element={<DashboardReviewer />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Login />} />
      <Route path="/onboarding" element={<Onboarding />} />
    </Routes>
  );
};

export default PublicRoutes;
