import React from "react";
import BackButton from "~/components/BackButton";
import Tag from "~/components/Tag";

const mockQuestion = {
  id: "1",
  title: "How to debug React application in VSCode?",
  body:
    "I am facing some issues while trying to debug my React application in Visual Studio Code. Can anyone help me with the proper configuration for debugging React apps in VSCode?",
  tags: [
    {
      id: "1",
      name: "React",
    },
    {
      id: "2",
      name: "VSCode",
    },
    {
      id: "3",
      name: "Debugging",
    },
  ],
};

const Question = () => {
  return (
    <div className="min-h-screen bg-gray-50">
    <BackButton/>

      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900">
          {mockQuestion.title}
        </h1>
        <div className="mt-4 flex flex-wrap">
          {mockQuestion.tags.map((tag) => (
            <Tag key={tag.id} name={tag.name} children={""} />
          ))}
        </div>
        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {mockQuestion.title}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Posted by John Doe
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid  sm:gap-4 sm:px-6">
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 ">
                  {mockQuestion.body}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
