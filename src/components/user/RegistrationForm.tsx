// components/RegistrationForm.tsx
import React, { useState } from "react";
import type { Role } from "@prisma/client";

export interface FormData {
  university: string;
  faculty: string;
  description: string;
  year: string;
  age: string;
  role: Role;
}

interface RegistrationFormProps {
  onSubmit: (formData: FormData) => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onSubmit,
}) => {
  const [formData, setFormData] = useState<FormData>({
    university: "",
    faculty: "",
    description: "",
    year: "",
    age: "",
    role: "Student",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-screen-lg rounded-md bg-white px-6 py-4 shadow-md">
        <h1 className="mb-8 text-3xl justify-center font-bold text-red-800">
          You need to submit this form to complete the registration process!
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="university"
                className="mb-2 block font-bold text-gray-700"
              >
                University
              </label>
              <input
                type="text"
                name="university"
                id="university"
                autoComplete="university"
                required
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter university"
                value={formData.university}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="faculty"
                className="mb-2 block font-bold text-gray-700"
              >
                Faculty
              </label>
              <input
                type="text"
                name="faculty"
                id="faculty"
                autoComplete="faculty"
                required
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter faculty"
                value={formData.faculty}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="description"
                className="mb-2 block font-bold text-gray-700"
              >
                Description
              </label>
              <textarea
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter description"
                required
              />
            </div>
            <div>
              <label
                htmlFor="role"
                className="mb-2 block font-bold text-gray-700"
              >
                Role
              </label>
              <select
                id="role"
                name="role"
                required
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Select role</option>
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
              </select>
            </div>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="year"
                className="mb-2 block font-bold text-gray-700"
              >
                Year
              </label>
              <select
                id="year"
                name="year"
                required
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                value={formData.year}
                onChange={handleChange}
              >
                <option value="">Select year</option>
                <option value="1st year">1st year</option>
                <option value="2nd year">2nd year</option>
                <option value="3rd year">3rd year</option>
                <option value="4th year">4th year</option>
                <option value="5th year">5th year</option>
                <option value="6th year">6th year</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="age"
                className="mb-2 block font-bold text-gray-700"
              >
                Age
              </label>
              <input
                id="age"
                name="age"
                type="number"
                required
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
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
    </div>
  );
};
export default RegistrationForm;
