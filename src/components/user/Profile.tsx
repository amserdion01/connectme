import React, { useState } from "react";
import Image from "next/image";
import type { Data, User } from "@prisma/client";
import { useRouter } from "next/router";
import { BsArrowLeftCircle, BsArrowLeftCircleFill } from "react-icons/bs";
import DeleteAccount from "./DeleteAcount";
export interface ProfileProps {
  data: Data;
  user: User;
}
 
const Profile: React.FC<ProfileProps> = ({ data, user }) => {
  console.log(data)
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const Icon = isHovered ? BsArrowLeftCircleFill : BsArrowLeftCircle;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 min-h-screen bg-gray-100">
      <div className="md:col-span-1">
      <button
      type="button"
      onClick={() => router.push("/server")}
      className="absolute top-4 left-4 focus:outline-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon className="h-12 w-12" />
    </button>
      </div>

      {/* Profile information */}
      <div className="md:col-span-2 flex justify-center items-center">
        <div className="w-full max-w-lg p-8 rounded-lg shadow-md">
          <div className="flex justify-center">
            {/* {user?.image && (
              <img
                src={user.image}
                alt="Profile picture"
                className="h-32 w-32 rounded-full object-cover"
              />
            )} */}
            {user?.image && (
              <Image
              alt = "Profile picture"
              src={user.image}
              width={100}
              height={100}
              className="rounded-full object-cover"
              />
            )}
          </div>
          <div className="text-center mt-4">
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <div className="mt-8 space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">University</h2>
              <p className="text-gray-600">{data.university}</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Faculty</h2>
              <p className="text-gray-600">{data.faculty}</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Year</h2>
              <p className="text-gray-600">{data.year}</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Age</h2>
              <p className="text-gray-600">{data.age}</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Role</h2>
              <p className="text-gray-600 capitalize">{data.role}</p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">Description</h2>
              <p className="text-gray-600">{data.description}</p>
            </div>
          </div>
        </div>
      </div>
      <DeleteAccount userId={user.id} />
      <div className="md:col-span-1"></div>
    </div>
  );
};

export default Profile;
