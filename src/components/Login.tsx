import React from 'react';
import { signIn } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login: React.FC = () => {
  const handleProviderClick = (provider: string) => {
    signIn(provider, { callbackUrl: `${window.location.origin}/server` });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <button
            onClick={() => handleProviderClick('github')}
            className="w-full mt-4 py-2 px-4 border border-gray-300 rounded-md bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            Sign in with GitHub
          </button>
          <button
            onClick={() => handleProviderClick('google')}
            className="w-full mt-4 py-2 px-4 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          >
            <FontAwesomeIcon icon={faGoogle} className="mr-2 text-red-600" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
