import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const userRouter = createTRPCRouter({
  getUserById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUniqueOrThrow({
        where: { id: input.id },
      });
      return user;
    }),
    getUserDataById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const data = await ctx.prisma.data.findUniqueOrThrow({
        where: { id: input.id },
      });
      return data;
    }),
  getCurrentUser: protectedProcedure
    .query(async ({ ctx }) => await ctx.prisma.user.findUniqueOrThrow(
      {
        where: { id: ctx.session.user.id }
      }
    )
    ),
    saveUserData: protectedProcedure
      .input(
        z.object({
          userId: z.string(),
          university: z.string(),
          faculty: z.string(),
          description: z.string(),
          year: z.string(),
          age: z.string(),
          role: z.enum(['Teacher', 'Student']),
        }),
      )
      //change to 
      .mutation(async ({ ctx, input }) => {
        try {
          const user = await ctx.prisma.user.update({
            where: { id: input.userId },
            data: {
              Data: {
                create: {
                  // upsert!!!
                  university: input.university,
                  faculty: input.faculty,
                  description: input.description,
                  year: input.year,
                  age: input.age,
                  role: input.role,
                },
              },
            },
            
          });
          
          return { message: 'User data saved successfully', user };
        } catch (error) {
          console.error(error);
          throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Error saving user data' });
        }
      }),
      getUserDataByUserId: protectedProcedure
      .input(z.object({ id: z.string() }))
      .query(async ({ ctx, input }) => {
        const data = await ctx.prisma.data.findUniqueOrThrow({
          where: { userId: input.id },
        });
        return data;
      }),  
  
});
