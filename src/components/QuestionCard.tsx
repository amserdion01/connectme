import Link from "next/link";
import React from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

interface Question {
  id: string;
  title: string;
  numAnswers: number;
  solved: boolean;
}

const QuestionCard: React.FC<{ question: Question }> = ({ question }) => {
  const { id, title, numAnswers, solved } = question;

  return (
    <div className="mx-auto my-4 w-full max-w-sm rounded-lg bg-gray-100 p-6 shadow-md">
      <Link href={`/question/${id}`}>
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          {title.slice(0, 20)}...
        </h2>
      </Link>
      <div className="mb-4 flex items-center">
        {solved ? (
          <FaCheckCircle className="mr-2 text-green-500" />
        ) : (
          <FaRegCircle className="mr-2 text-red-500" />
        )}
        <p className="font-bold text-gray-700">
          {solved ? "Solved" : "Unsolved"}
        </p>
      </div>
      <div className="mb-4 font-bold text-gray-700">
        {numAnswers} {numAnswers === 1 ? "answer" : "answers"}
      </div>
    </div>
  );
};

export default QuestionCard;
