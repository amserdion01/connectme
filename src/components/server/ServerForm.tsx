import router from "next/router";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { api } from "~/utils/api";
import BackButton from "../BackButton";

function ServerForm() {
  const createServer = api.server.createServer.useMutation();

  const [selectedSemester, setSelectedSemester] = useState("1");
  const [selectedYear, setSelectedYear] = useState("1");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    faculty: "",
    year: 1,
    semester: 1,
    importance: "",
    additionalInfo: "",
    usefulLinks: "",
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

    createServer.mutate({
      ...formData,
      year: parseInt(selectedYear),
      semester: parseInt(selectedSemester),
    });
    router.push("/server");
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-screen-xl px-6">
        <h1 className="mb-6 text-3xl font-bold text-gray-800 mx-20">Course Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="name"
            >
              Course Name
            </label>
            <input
              className="focus:shadow-outline w-full rounded border-gray-300 py-2 px-3 leading-tight focus:outline-none"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter course name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="description"
            >
              Course Description
            </label>
            <textarea
              className="focus:shadow-outline w-full rounded border-gray-300 py-2 px-3 leading-tight focus:outline-none"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter course description"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="faculty"
            >
              Faculty
            </label>
            <input
              className="focus:shadow-outline w-full rounded border-gray-300 py-2 px-3 leading-tight focus:outline-none"
              id="faculty"
              type="text"
              name="faculty"
              value={formData.faculty}
              onChange={handleChange}
              placeholder="Enter faculty"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="year"
            >
              Year
            </label>
            <select
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="year"
              name="year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <div className="mb-4">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="semester"
              >
                Semester
              </label>
              <select
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                id="semester"
                name="semester"
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                required
              >
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="importance"
            >
              Importance
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="importance"
              name="importance"
              value={formData.importance}
              onChange={handleChange}
              placeholder="Enter why this course is important"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="additionalInfo"
            >
              Additional Information
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Enter additional information (optional)"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="usefulLinks"
            >
              Useful Links
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="usefulLinks"
              name="usefulLinks"
              value={formData.usefulLinks}
              onChange={handleChange}
              placeholder="Enter useful links (optional)"
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
export default ServerForm;
