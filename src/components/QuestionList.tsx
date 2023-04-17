import React from 'react';
import { api } from '~/utils/api';
import QuestionCard from './QuestionCard';

const QuestionList: React.FC<{ filter: string | undefined }> = ({ filter }) => {
   
            
  const questions = api.question.getAllQuestions.useQuery({ server });
    const Spinner = () => (
    <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
  );

  if (!questions) {
    return (
      <div className="min-h-screen w-screen bg-gray-100 flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="w-full">
      {questions.map((question) => {
        return <QuestionCard question={question} key={question.id} />;
      })}
    </div>
  );
};

export default QuestionList;
