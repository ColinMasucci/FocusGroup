import { useNavigate } from "react-router-dom";

function RegistrationSelection() {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <h2>Choose your account type</h2>
      <div className="flex gap-4 mt-4">
        <button onClick={() => navigate("/register/reviewer")}>Reviewer</button>
        <button onClick={() => navigate("/register/company")}>Company</button>
      </div>
    </div>
  );
}

export default RegistrationSelection;