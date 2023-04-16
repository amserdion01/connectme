// pages/question/components/Question.tsx
import React from "react";
import Tag from "./Tag";

const mockQuestion = {
  title: "How do I fix this bug in my code?",
  body: "I'm experiencing a bug in my code and I don't know how to fix it...",
  tags: ["javascript", "bug", "help"],
  author: "John Doe",
};

const Question: React.FC = () => {
  const [isSolved, setIsSolved] = React.useState(false);

  const handleSolvedClick = () => {
    setIsSolved(!isSolved);
  };

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold text-gray-800">{mockQuestion.title}</h2>
      <p className="mb-4 text-gray-700">{mockQuestion.body}</p>
      <div className="mb-4 flex items-center">
        {mockQuestion.tags.map((tag, index) => (
          <Tag key={index.toString()} children={tag} name={"name"} />
        ))}
      </div>
      <p className="mb-4 text-gray-700">Author: {mockQuestion.author}</p>
      <button
        onClick={handleSolvedClick}
        className={`mb-4 py-2 px-4 font-bold text-white rounded focus:outline-none focus:shadow-outline ${
          isSolved ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isSolved ? "Solved" : "Mark as Solved"}
      </button>
    </div>
  );
};

export default Question;
