import React from "react";
import Profile from "../components/Profile";
import { GetServerSideProps, NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import { Data, User } from "@prisma/client";
import { prisma } from "~/server/db";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/utils/api";



const ProfilePage: NextPage = () => {
  // const x = user.email;
  const { data: session } = useSession();
  const user = session?.user;
  const dataQuery = api.user.getUserDataByUserId.useQuery({ id : user?.id });
  const data = dataQuery.data
  if (!data){
    return <div>sdasd</div>
  }
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
