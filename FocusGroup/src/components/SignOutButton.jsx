import { useNavigate } from 'react-router-dom';
import supabase from '../config/supabaseClient'

const SignOutButton = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <button
      onClick={handleSignOut}
      className="px-4 mt-4 mb-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
