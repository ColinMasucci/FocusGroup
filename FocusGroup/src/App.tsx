import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Auth0 + React (TypeScript)</h1>

      {isAuthenticated ? (
        <>
          <p>Welcome, {user?.name}</p>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log out
          </button>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log in</button>
      )}
    </div>
  );
};

export default App;
