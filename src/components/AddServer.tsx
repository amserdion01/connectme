import Link from "next/link";
import { FaPlus } from 'react-icons/fa';

function AddServer() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-fit text-center">
        <Link href="/form">
          <div className="fixed bottom-4 right-4 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full w-12 h-12 flex items-center justify-center focus:outline-none focus:shadow-outline">
            <FaPlus className="text-2xl" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AddServer;
