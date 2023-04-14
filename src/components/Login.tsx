import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa';

function Login() {
  return (
    <div className="col-span-1 flex justify-center items-center h-full bg-gray-200">
      <form className="p-10 rounded-lg shadow-lg bg-gray-200 w-full max-w-lg">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Login to ConnectMe</h1>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="flex items-center justify-between mb-8">
          <Link href="/server">
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </Link>

          <a className="inline-block align-baseline font-bold text-sm text-gray-800 hover:text-gray-700" href="#">
            Forgot Password?
          </a>
        </div>

        <div className="flex items-center justify-center mb-8">
          <Link href="/server">
            <button className="bg-white text-gray-800 font-bold py-2 px-4 rounded flex items-center justify-center shadow-md">
              <FaGoogle className="text-xl mr-2" />
              Sign in with Google
            </button>
          </Link>
        </div>
        
        <div className="flex items-center justify-center">
          <span className="text-gray-800 font-bold mr-2">
            Don't have an account yet?
          </span>
          <Link href="/register">
            <div className="text-gray-800 hover:text-gray-600 font-bold cursor-pointer">
              Register here
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
