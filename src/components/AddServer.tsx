import Link from "next/link";

function AddServer() {
    return (
        <div className="flex justify-center items-center">
        <div className="w-96">
          <Link href="/form">
            <div className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add a new server
            </div>
          </Link>
        </div>
      </div>
    );}

export default AddServer;