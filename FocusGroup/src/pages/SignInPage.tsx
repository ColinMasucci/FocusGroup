import { useAuth0 } from "@auth0/auth0-react";

const SignInPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Sign In</h2>
      <button onClick={() => loginWithRedirect()}>Sign in with Auth0</button>
    </div>
  );
};

export default SignInPage;
