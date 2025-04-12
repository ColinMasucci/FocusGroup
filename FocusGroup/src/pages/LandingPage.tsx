import { Link } from "react-router-dom";

const LandingPage = () => (
  <div style={{ padding: "2rem" }}>
    <h1>Welcome to FocusGroup</h1>
    <p>Join our focus group platform to share insights and shape the future of products.</p>
    <Link to="/account/select-role">
      <button>Choose Your Account</button>
    </Link>
  </div>
);

export default LandingPage;
