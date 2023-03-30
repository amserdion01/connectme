import { useState, ChangeEvent, FormEvent } from "react";
import { api } from "~/utils/api";


const server: FormData [] = []
function ServerForm() {
  const createServer = api.server.createServer.useMutation()

  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    faculty: "",
    year: 0 ,
    semester: 0,
    importance: "",
    additionalInfo: "",
    usefulLinks: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const{ name, valueAsNumber } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: valueAsNumber,
    }));
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createServer.mutate({...formData})
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="w-full max-w-screen-xl px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Course Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Course Name
            </label>
            <input
              className="w-full border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
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
            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
              Course Description
            </label>
            <textarea
              className="w-full border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter course description"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="faculty">
              Faculty
            </label>
            <input
              className="w-full border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
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
            <label className="block text-gray-700 font-bold mb-2" htmlFor="year">
              Year
            </label>
            <input
              className="w-full border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="year"
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChangeNumber}
              placeholder="Enter year"
              required
            />
          </div>
          <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="semester">
        Semester
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="semester"
        type="number"
        name="semester"
        value={formData.semester}
        onChange={handleChangeNumber}
        placeholder="Enter semester"
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="importance">
        Importance
      </label>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="importance"
        name="importance"
        value={formData.importance}
        onChange={handleChange}
        placeholder="Enter why this course is important"
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="additionalInfo">
        Additional Information
      </label>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="additionalInfo"
        name="additionalInfo"
        value={formData.additionalInfo}
        onChange={handleChange}
        placeholder="Enter additional information (optional)"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="usefulLinks">
        Useful Links
      </label>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="usefulLinks"
        name="usefulLinks"
        value={formData.usefulLinks}
        onChange={handleChange}
        placeholder="Enter useful links (optional)"
      />
    </div>
    <div className="flex items-center justify-center">
      <button
        className="bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-700"
        type="submit"
      >
        Submit
      </button>
    </div>
  </form>
</div>
</div>
);  }
export default ServerForm;
