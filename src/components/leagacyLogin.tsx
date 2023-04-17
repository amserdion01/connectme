import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

function Login() {
  return (
    <div className="col-span-1 flex h-full items-center justify-center bg-gray-200">
      <form className="w-full max-w-lg rounded-lg bg-gray-200 p-10 shadow-lg">
        <h1 className="mb-8 text-4xl font-bold text-gray-800">
          Login to ConnectMe
        </h1>

        <div className="mb-6">
          <label className="mb-2 block font-bold text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="mb-6">
          <label
            className="mb-2 block font-bold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="mb-8 flex items-center justify-between">
          <Link href="/server">
            <button
              className="focus:shadow-outline rounded bg-gray-800 py-2 px-4 font-bold text-white hover:bg-gray-700 focus:outline-none"
              type="button"
            >
              Sign In
            </button>
          </Link>

          <a
            className="inline-block align-baseline text-sm font-bold text-gray-800 hover:text-gray-700"
            href="#"
          >
            Forgot Password?
          </a>
        </div>

        <div className="mb-8 flex items-center justify-center">
          <Link href="/server">
            <button className="flex items-center justify-center rounded bg-white py-2 px-4 font-bold text-gray-800 shadow-md">
              <FaGoogle className="mr-2 text-xl" />
              Sign in with Google
            </button>
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <span className="mr-2 font-bold text-gray-800">
            Don't have an account yet?
          </span>
          <Link href="/register">
            <div className="cursor-pointer font-bold text-gray-800 hover:text-gray-600">
              Register here
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
