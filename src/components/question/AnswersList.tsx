import React from "react";
import type { Answer as AnswerType } from '@prisma/client';

import Answer from "~/components/question/Answer";

interface AnswersListProps {
  answers: AnswerType[];
  onDelete: () => void;
}

const AnswersList: React.FC<AnswersListProps> = ({ answers, onDelete }) => {
  return (
    <div>
      {answers.map((answer) => (
        <Answer key={answer.id} answer={answer} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default AnswersList;
