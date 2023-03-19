import { useState } from "react";
import { prisma } from "~/server/db";

function ServerForm() {
  const [formData, setFormData] = useState({
    courseName: "",
    courseDescription: "",
    faculty: "",
    year: "",
    semester: "",
    importance: "",
    additionalInfo: "",
    usefulLinks: "",
  });

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  try {
    const formInput = await prisma.FormInput.create({
      data: {
        courseName: formData.courseName,
        courseDescription: formData.courseDescription,
        faculty: formData.faculty,
        year: formData.year,
        semester: formData.semester,
        importance: formData.importance,
        additionalInfo: formData.additionalInfo,
        usefulLinks: formData.usefulLinks
      }
    })

    console.log('Created new form input:', formInput)
  } catch (error) {
    console.error('Error creating form input:', error)
  }
}

    
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="w-full max-w-screen-xl px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Course Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="courseName">
              Course Name
            </label>
            <input
              className="w-full border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="courseName"
              type="text"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              placeholder="Enter course name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="courseDescription">
              Course Description
            </label>
            <textarea
              className="w-full border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="courseDescription"
              name="courseDescription"
              value={formData.courseDescription}
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
              onChange={handleChange}
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
        onChange={handleChange}
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
