import Link from "next/link";
import { useRouter } from "next/router";
import { FaPlus } from "react-icons/fa";

function AddQuestion() {
  const router = useRouter();
  const currentPath = router.asPath;
  return (
    <div className="flex items-center justify-center">
      <div className="w-fit text-center">
        <Link href={`${currentPath}/form`}>
          <div className="focus:shadow-outline fixed bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 py-2 px-4 font-bold text-white hover:bg-gray-700 focus:outline-none">
            <FaPlus className="text-2xl" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AddQuestion;
