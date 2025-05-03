import supabase from '../config/supabaseClient'
import { Auth } from '@supabase/auth-ui-react'
import {ThemeSupa} from '@supabase/auth-ui-shared'
import logo from '../assets/logo.png';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [view, setView] = useState('sign_in');

  useEffect(() => {
    if (location.pathname === '/signup') {
      setView('sign_up');
    } else {
      setView('sign_in');
    }
  }, [location.pathname]);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        navigate('/onboarding');
      }
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, [navigate]);

  return(
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
    <img src={logo} alt="FocusGroup Logo" className="h-12 w-12 mb-6 rounded-full object-cover" />
    <h1 className="text-4xl font-bold mb-4">Welcome to FocusGroup</h1>
    <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg border border-blue-100">
      <h2 className="text-3xl mb-4 font-bold text-indigo-700 flex justify-center">
        {view === 'sign_in' && 'Log In'}
        {view === 'sign_up' && 'Sign Up'}
        {view === 'forgotten_password' && 'Reset Password'}
      </h2>
      <Auth
        supabaseClient={supabase}
        view={view}
        onViewChange={(newView) => setView(newView)}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#4F46E5',       // Indigo-600
                brandAccent: '#3B82F6', // Blue-500
                brandButtonText: '#ffffff',
                inputBorder: '#BFDBFE', // Light blue border
                inputLabelText: '#1E3A8A', // Deep indigo text
                inputText: '#1E40AF',
                messageText: '#1E40AF',
                anchorTextColor: '#2563EB',
                anchorTextHoverColor: '#1D4ED8',
              },
            },
          },
        }}
        theme="light"
        providers={[]}
        showLinks={false} // hide default "Don't have an account?" links
      />

      {/* Custom toggle links */}
      <div className="mt-4 text-center text-sm">
          {view === 'sign_in' ? (
            <div>
            <p>
              Forgot your password?{' '}
              <button
                onClick={() => setView('forgotten_password')}
                className="text-blue-600 hover:underline"
              >
                Change password
              </button>
            </p>
            <p>
            Don’t have an account?{' '}
            <button
              onClick={() => setView('sign_up')}
              className="text-blue-600 hover:underline"
            >
              Sign up
            </button>
          </p>
          </div>
          ) : (
            <p>
              Already have an account?{' '}
              <button
                onClick={() => setView('sign_in')}
                className="text-blue-600 hover:underline"
              >
                Log in
              </button>
            </p>
          )}
        </div>
    </div>
    
  </div>
  );
}
export default Login;