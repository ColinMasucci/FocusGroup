import { useSearchParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const SignUpPage = () => {
  const { loginWithRedirect } = useAuth0();
  const [params] = useSearchParams();
  const role = params.get("role") || "user";

  const handleSignup = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: "signup",
      },
      appState: { role }
    });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Sign Up ({role})</h2>
      <button onClick={handleSignup}>Sign up with Auth0</button>
    </div>
  );
};

export default SignUpPage;
