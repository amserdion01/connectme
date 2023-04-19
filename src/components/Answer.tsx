import React from 'react';
import { Answer as AnswerType } from '@prisma/client';
import { api } from '~/utils/api';

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
      <div className="mt-2 text-gray-900">{answer.content}</div>
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
