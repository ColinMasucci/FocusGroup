import { Link } from "react-router-dom";
import teensImage from '../assets/teens_on_one_phone_bg.jpg';
import logo from '../assets/logo.png';
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";


const LandingPage = () => {
  const { loginWithRedirect } = useAuth0();
  return(
    <div className="flex h-screen w-screen">
      {/* Left Side - Image */}
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${teensImage})` }}
      />

      {/* Right Side - Content */}
      <div className="w-1/2 h-full bg-gray-100 flex flex-col justify-center items-center p-8">
        <img src={logo} alt="FocusGroup Logo" className="h-12 w-12 mb-6 rounded-full object-cover" />
        <h1 className="text-4xl font-bold mb-4">Welcome to FocusGroup</h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Join our focus group platform to share insights and shape the future of products.
        </p>
        <p className="text-sm text-gray-700 mb-6 text-center">
          Get started by signing in or creating a free account.
        </p>
        <div className="flex gap-4">
          <Button variant="contained" style={{backgroundColor: '#052759', color: 'white'}} component={Link} to="/registration">
            Sign Up
          </Button>
          <Button variant="contained" style={{backgroundColor: '#2ac153', color: 'white'}} onClick={() => loginWithRedirect()}>
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
