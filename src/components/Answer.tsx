import React from 'react';
import { Answer as AnswerType } from '@prisma/client';
import { api } from '~/utils/api';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-light.css';

interface AnswerProps {
  answer: AnswerType;
  onDelete: () => void;
}

const Answer: React.FC<AnswerProps> = ({ answer, onDelete }) => {
  const deleteAnswer = api.answer.deleteAnswer.useMutation();

  const handleDelete = async () => {
    await deleteAnswer.mutateAsync({ id: answer.id });
    onDelete();
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <div className="text-sm text-gray-500">
        <span>Answered by </span>
      </div>
      <div className="mt-2 text-gray-900">
        
      <div className="markdown">
                    <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                      {answer.content}
                    </ReactMarkdown>
                  </div></div>
      <button
        className="mt-4 text-xs text-red-500 hover:text-red-700"
        onClick={handleDelete}
      >
        Delete answer
      </button>
    </div>
  );
};

export default Answer;
