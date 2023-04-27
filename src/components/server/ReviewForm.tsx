import type { ChangeEvent, FormEvent} from "react";
import { useState } from "react";
import { api } from "~/utils/api";
import BackButton from "../BackButton";
import { useRouter } from "next/router";

const ReviewForm : React.FC = () => {
  const apicontext = api.useContext();

  const createReview = api.review.createReview.useMutation({
    async onSettled() {
      await apicontext.review.getAllReviews.invalidate();
    },
  });
  const router = useRouter();
  const currentPath = router.asPath;
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    rating: 1,
  });
  const [selectedRating, setSelectedRating] = useState("1");

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
    console.log(formData);

    if (typeof serverId === "string")
      createReview.mutate({
        ...formData,
        serverId,
        rating: parseInt(selectedRating),
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-screen-xl px-6">
        <h1 className="mx-2 mb-6 text-4xl font-bold text-gray-800">
          Feedback
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="mb-2 block text-xl font-bold text-gray-700"
              htmlFor="title"
            >
              Review title
            </label>
            <input
              className="focus:shadow-outline w-full rounded border-gray-300 py-2 px-3 leading-tight focus:outline-none"
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter review title"
              required
            />
            </div>

            <div className="mb-4">
              <label
                className="mb-2 block text-xl font-bold text-gray-700"
                htmlFor="title"
              >
                Rate this course
              </label>
              <select
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                id="year"
                name="year"
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                required
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-xl font-bold text-gray-700"
              htmlFor="description"
            >
              Review description
            </label>
            <textarea
              className="focus:shadow-outline h-48 w-full rounded border-gray-300 py-2 px-3 leading-tight "
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter review description"
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

export default ReviewForm;
