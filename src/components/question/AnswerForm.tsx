import React, { useState } from "react";

interface AnswerFormProps {
  onSubmit: (content: string) => void;
}

const AnswerForm: React.FC<AnswerFormProps> = ({ onSubmit }) => {
  const [answerContent, setAnswerContent] = useState("");

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Your Answer
      </label>
      <textarea
        className="w-full rounded-lg border px-3 py-2 text-sm text-gray-700 focus:outline-none"
        rows={4}
        value={answerContent}
        onChange={(e) => setAnswerContent(e.target.value)}
      ></textarea>
      <button
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={() => {
          onSubmit(answerContent);
          setAnswerContent("");
        }}
      >
        Submit Answer
      </button>
    </div>
  );
};

export default AnswerForm;
