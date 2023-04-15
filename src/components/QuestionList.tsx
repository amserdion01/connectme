import React from 'react';
import { api } from '~/utils/api';
import QuestionCard from './QuestionCard';

const QuestionList: React.FC<{ filter: string | undefined }> = ({ filter }) => {
    const mockQuestions = [
        {
          id: "1",
          title: "How can I improve my React skills?",
          body: "I am new to React and want to improve my skills. Any suggestions?",
          answers: 3,
          solved: false,
          numAnswers: 3
        },
        {
          id: "2",
          title: "What are the best resources for learning JavaScript?",
          body: "I want to learn JavaScript from scratch. What are the best resources available?",
          answers: 5,
          solved: false,
          numAnswers: 5
        },
        {
          id: "3",
          title: "How can I debug my code in Visual Studio Code?",
          body: "I am having trouble debugging my code in Visual Studio Code. Any tips?",
          answers: 2,
          solved: true,
          numAnswers: 2
        }
      ]
            
  //const questions = api.question.getAllQuestions.useQuery({ filter });
  const questions = mockQuestions
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
