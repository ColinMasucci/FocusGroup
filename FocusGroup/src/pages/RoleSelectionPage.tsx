import { Link } from "react-router-dom";

const RoleSelectionPage = () => (
  <div style={{ padding: "2rem" }}>
    <h2>Select Your Role</h2>
    <ul>
      <li><Link to="/account/signup?role=teen">I'm a Teen</Link></li>
      <li><Link to="/account/signup?role=company">I'm a Company</Link></li>
      <li><Link to="/account/signup?role=admin">I'm an Admin</Link></li>
    </ul>
  </div>
);

export default RoleSelectionPage;
