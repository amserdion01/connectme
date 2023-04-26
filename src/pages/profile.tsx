import React from "react";
import type { ProfileProps } from "../components/user/Profile";
import Profile from "../components/user/Profile";
import type { GetServerSideProps, NextPage } from "next";
import { prisma } from "~/server/db";
import { getServerAuthSession } from "~/server/auth";


const ProfilePage: NextPage<ProfileProps> = ({data, user}) => {
  // const x = user.email;

  return <div> 
    <Profile data={data} user={user}/> </div>;
};

export const getServerSideProps: GetServerSideProps<object> = async (
  context
) => {
  try {
    const session = await getServerAuthSession(context);
    
    if (!session?.user?.id) {
      throw new Error("User is not authenticated");
    }

    const currentUser = await prisma.user.findFirstOrThrow({
      where: { id: session.user.id },
    });

    const data = await prisma.data.findFirstOrThrow({
      where: { userId: currentUser.id },
    });

    return {
      props: {
        user: currentUser,
        data: data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
export default ProfilePage;