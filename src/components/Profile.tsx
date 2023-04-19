import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import BackButton from "./BackButton";

import { api } from "~/utils/api";
import { GetServerSideProps } from "next";
import { prisma } from "~/server/db";
import { getSession } from "next-auth/react";
import { Data, User } from "@prisma/client";
import router from "next/router";

export interface ProfileProps {
  data: Data;
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ data, user }) => {
  // const userQuery = api.user.getCurrentUser.useQuery();
  // const user  = userQuery.data
  // if (!user){
  //   return(
  //     <div>Autentifica- {userQuery.error?.message}</div>
  //   )
  // }
  // const dataId = user.dataId

  // if (!dataId) {
  //   return (
  //     <div>Data ID is null.</div>
  //   );
  // }
  
  return (
    <div className="grid grid-cols-4 gap-4 h-screen">
    <BackButton/>

      <div className="col-span-1"></div>
      <div className="col-span-2 flex justify-center items-center">
        <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
          <div className="flex justify-center">
            {user?.image && <img
              src={user.image}
              alt="Profile picture"
              className="h-32 w-32 rounded-full object-cover"
            />}
          </div>
          <div className="text-center mt-4">
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">University</h2>
              <p className="text-gray-600">{data.university}</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <h2 className="text-lg font-medium text-gray-900">Faculty</h2>
              <p className="text-gray-600">{data.faculty}</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <h2 className="text-lg font-medium text-gray-900">Year</h2>
              <p className="text-gray-600">{data.year}</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <h2 className="text-lg font-medium text-gray-900">Age</h2>
              <p className="text-gray-600">{data.age}</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <h2 className="text-lg font-medium text-gray-900">Role</h2>
              <p className="text-gray-600 capitalize">{data.role}</p>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-medium text-gray-900">Description</h2>
              <p className="text-gray-600">{data.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
};

export default Profile;


// export const getServerSideProps: GetServerSideProps<object> = async (
//   context
// ) => {
//   try {
//     const session = await getSession(context);

//     if (!session?.user?.id) {
//       throw new Error("User is not authenticated");
//     }

//     const currentUser = await prisma.user.findFirst({
//       where: { id: session.user.id },
//     });

//     if (!currentUser) {
//       throw new Error("User not found in database");
//     }

//     const data = await prisma.data.findFirst({
//       where: { userId: currentUser.id },
//     });

//     if (!data) {
//       throw new Error("User data not found in database");
//     }

//     return {
//       props: {
//         user: currentUser,
//         data: data,
//       },
//     };
//   } catch (error) {
//     return {
//       notFound: true,
//     };
//   }
// };
