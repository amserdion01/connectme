import React from "react";
import { signIn } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login: React.FC = () => {
  const handleProviderClick = (provider: string) => {
    signIn(provider, { callbackUrl: `${window.location.origin}/server` });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center  mb-8">
        </div>
        <div>
          <div
            onClick={() => handleProviderClick("github")}
            role="button"
            className="mt-4 flex w-full transform items-center justify-center rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-medium text-gray-700 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-50 hover:shadow-md focus:outline-none hover:-translate-y-1"
          >
            <FaGithub className="mr-2 text-gray-900" />
            Sign in with GitHub
          </div>

          <div
            onClick={() => handleProviderClick("google")}
            role="button"
            className="mt-4 flex w-full transform items-center justify-center rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-medium text-gray-700 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-50 hover:shadow-md focus:outline-none hover:-translate-y-1"
          >
            <FaGoogle className="mr-2 text-red-600" />
            Sign in with Google
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
