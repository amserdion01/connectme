import { z } from "zod";
import { prisma } from "../../db"
import {
    createTRPCRouter,
    protectedProcedure,
} from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const answerRouter = createTRPCRouter({
    createAnswer: protectedProcedure
        .input(z.object({ content: z.string(), questionId: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return ctx.prisma.answer.create({
                data: {
                    content: input.content,
                    userId: ctx.session.user.id,
                    questionId: input.questionId,
                },
            });
        }),

    deleteAnswer: protectedProcedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return ctx.prisma.answer.delete({
                where: {
                    id: input.id,
                },
            });
        }),

    getAllAnswers: protectedProcedure
        .input(z.object({ questionId: z.string() }))
        .query(({ ctx, input }) => {
            return ctx.prisma.answer.findMany({
                where: {
                    questionId: input.questionId,
                },
            });
        }),

    getAnswerById: protectedProcedure
        .input(z.object({ id: z.string() }))
        .query(async ({ ctx, input }) => {
            const answer = await prisma.answer.findFirst({ where: { id: input.id } })
            if (!answer) {
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message: `Answer not found (id ='(${input.id})' )`
                })

            }
            console.log(answer)
            return answer
        }),
});
