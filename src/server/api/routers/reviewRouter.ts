import { z } from "zod";
import { prisma } from "../../db"
import {
    createTRPCRouter,
    protectedProcedure,
} from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";


export const reviewRouter = createTRPCRouter({
    deleteReview: protectedProcedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return ctx.prisma.review.delete({
                where: {
                    id: input.id,
                },
            });
        }),

    createReview: protectedProcedure
        .input(
            z.object({ title: z.string(), rating: z.number(),description: z.string(), serverId: z.string() })
        )
        .mutation(async ({ ctx, input }) => {
            return ctx.prisma.review.create({
                data: {
                    title: input.title,
                    serverId: input.serverId,
                    description: input.description,
                    rating: input.rating,
                    userId: ctx.session.user.id,
                },
            });
        }),

    getAllReviews: protectedProcedure
        .input(z.object({ serverId: z.string() }))
        .query(({ ctx, input }) => {
            return ctx.prisma.review.findMany({
                where: {
                    serverId: input.serverId,
                },
            });
        }),
    getReviewById: protectedProcedure
        .input(z.object({ id: z.string() })).query(async ({
            input
        }) => {
            const review = await prisma.review.findFirst({ where: { id: input.id } })
            if (!review) {
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message: `Review not found (id ='(${input.id})' )`
                })

            }
            return review
        }),
        

});