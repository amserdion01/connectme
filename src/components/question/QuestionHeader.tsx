import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

interface QuestionHeaderProps {
  title: string;
  solved: boolean;
  content: string;
}

const QuestionHeader: React.FC<QuestionHeaderProps> = ({ title, solved }) => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h1 className="text-3xl font-extrabold text-gray-900">{title}</h1>
      <span
        className={`inline-block rounded px-2 py-1 text-xs font-semibold ${
          solved
            ? "bg-green-200 text-green-700"
            : "bg-red-200 text-red-700"
        }`}
      >
        {solved ? "Solved" : "Unsolved"}
      </span>
    </div>
  );
};

export default QuestionHeader;
