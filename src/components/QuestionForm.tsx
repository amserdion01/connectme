import { useState, ChangeEvent, FormEvent } from "react";
import { api } from "~/utils/api";
import BackButton from "./BackButton";

function QuestionForm() {
  //const createQuestion = api.questions.createQuestion.useMutation();

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
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

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    //setSelectedImage(file);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataWithImage = new FormData();
    formDataWithImage.append("title", formData.title);
    formDataWithImage.append("description", formData.description);
    formDataWithImage.append("tags", formData.tags);
    if (selectedImage) {
      formDataWithImage.append("image", selectedImage);
    }

    //createQuestion.mutate(formDataWithImage);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-screen-xl px-6">
        <h1 className="mb-6 text-3xl font-bold text-gray-800 mx-20">
          Ask a question
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
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
              className="mb-2 block font-bold text-gray-700"
              htmlFor="description"
            >
              Question description
            </label>
            <textarea
              className="focus:shadow-outline w-full rounded border-gray-300 py-2 px-3 leading-tight focus:outline-none"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter question description"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="image"
            >
              Add a photo (optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="image"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="tags"
            >
              Tags (comma-separated)
            </label>
            <input
              className="focus:shadow-outline w-full rounded border-gray-300 py-2 px-3 leading-tight focus:outline-none"
              id="tags"
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="Enter tags (comma-separated)"
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