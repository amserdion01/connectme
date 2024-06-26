import { useState, ChangeEvent, FormEvent, useRef } from "react";
import { api } from "~/utils/api";
import BackButton from "../BackButton";
import { useRouter } from "next/router";

function QuestionForm() {
  const apicontext = api.useContext()
  const createQuestion = api.question.createQuestion.useMutation({ 
  async onSettled() {
    await apicontext.question.getAllQuestions.invalidate()
  },
  });
  const router = useRouter();
  const currentPath = router.asPath;
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serverId = currentPath.split("/")[2];

    if (typeof serverId === "string")
      createQuestion.mutate({ ...formData, serverId });
    router.back();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-screen-xl px-6">
        <h1 className="mx-20 mb-6 text-4xl font-bold text-gray-800">
          Ask a question
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="mb-2 block text-xl font-bold text-gray-700"
              htmlFor="title"
            >
              Question title
            </label>
            <input
              className="focus:shadow-outline w-full rounded border-gray-300 py-2 px-3 leading-tight focus:outline-none"
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter question title"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-xl font-bold text-gray-700"
              htmlFor="content"
            >
              Question content
            </label>
            <textarea
              className="focus:shadow-outline h-48 w-full rounded border-gray-300 py-2 px-3 leading-tight "
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Enter question content"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="focus:shadow-outline rounded bg-gray-800 py-2 px-4 font-bold text-white hover:bg-gray-700 focus:outline-none"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <BackButton />
    </div>
  );
}

export default QuestionForm;
