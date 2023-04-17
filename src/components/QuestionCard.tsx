import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

interface Question {
  id: string;
  title: string;
  content: string;
}

const QuestionCard: React.FC<{ question: Question }> = ({ question }) => {
  const { id, title, content } = question;
  const router = useRouter();
  const currentPath = router.asPath;
  return (
    <div className="mx-auto my-4 w-full max-w-md bg-gray-900 rounded-lg p-6 shadow-md">
      <Link href={`${currentPath}/${id}`}>
        <div>
          <h2 className="mb-2 text-2xl font-bold text-gray-100 cursor-pointer">
            {title.slice(0, 30)}
          </h2>
        </div>
      </Link>
      <p className="text-gray-300 text-sm mb-4">{content.slice(0, 100)}...</p>
      <Link href={`${currentPath}/${id}`}>
        <div className="text-gray-400 hover:text-gray-200 hover:underline text-sm">
          Read more
        </div>
      </Link>
    </div>
  );
};

export default QuestionCard;
