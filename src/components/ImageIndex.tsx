import Image from 'next/image';
import Link from 'next/link';

function ImageIndex() {
    return (
        <div className="h-screen grid grid-cols-4 gap-0">
      <div className="col-span-2 flex justify-center items-center h-full">
          <Image
            src="/logo-black.png"
            alt="My Image"
            width={2000}
            height={1080}          
            style={{ objectFit: 'cover', objectPosition: 'left' }}

          />
                    <div className="absolute inset-y-0 left-1/2 w-2 bg-black" ></div>

        </div>

         <div className="col-span-2 flex justify-center items-center h-full bg-gray-100">
        <form className="p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Login to ConnectMe</h1>
          <div className="mb-4">
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
          <div className="flex items-center justify-between">
            <Link href="/server"><button
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              >
              Sign In

              </button>
            
              </Link>
            <a
              className="inline-block align-baseline font-bold text-sm text-gray-800 hover:text-gray-700"
              href="#"
            >
              Forgot Password?
            </a>
            
          </div>
          
        </form>
        
      </div>
      </div>
    );
  }

  export default ImageIndex;