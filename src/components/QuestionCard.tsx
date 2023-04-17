import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import 'highlight.js/styles/atom-one-light.css';


interface Question {
  id: string;
  title: string;
  content: string;
  solved: boolean;
}

const QuestionCard: React.FC<{ question: Question }> = ({ question }) => {
  const { id, title, content, solved } = question;
  const router = useRouter();
  const currentPath = router.asPath;
  return (
    <div className="mx-auto my-4 w-full max-w-md rounded-lg border border-gray-300 bg-[#fafafa] p-6 shadow-md">
      <Link href={`${currentPath}/${id}`}>
        <h2 className="mb-2 cursor-pointer text-2xl font-bold text-gray-900">
          {title.slice(0, 30)}
        </h2>
        <p className="mb-4 text-sm text-gray-700">
          {
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}
            children = {content.slice(0, 70)}

            />
          }
        </p>
        <span
          className={`inline-block rounded px-2 py-1 text-xs font-semibold ${
            solved ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"
          }`}
        >
          {solved ? "Solved" : "Unsolved"}
        </span>
      </Link>
    </div>
  );
};

export default QuestionCard;
