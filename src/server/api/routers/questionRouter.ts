import { z } from "zod";
import { prisma } from "../../db"
import {
    createTRPCRouter,
    protectedProcedure,
} from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";


export const questionRouter = createTRPCRouter({
    deleteQuestion: protectedProcedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return ctx.prisma.question.delete({
                where: {
                    id: input.id,
                },
            });
        }),

    createQuestion: protectedProcedure
        .input(
            z.object({ title: z.string(), content: z.string(), serverId: z.string() })
        )
        .mutation(async ({ ctx, input }) => {
            return ctx.prisma.question.create({
                data: {
                    title: input.title,
                    serverId: input.serverId,
                    content: input.content,
                    userId: ctx.session.user.id,
                },
            });
        }),

    getAllQuestions: protectedProcedure
        .input(z.object({ serverId: z.string() }))
        .query(({ ctx, input }) => {
            return ctx.prisma.question.findMany({
                where: {
                    serverId: input.serverId,
                },
            });
        }),
    getQuestionById: protectedProcedure
        .input(z.object({ id: z.string() })).query(async ({
            input
        }) => {
            const question = await prisma.question.findFirst({ where: { id: input.id } })
            if (!question) {
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message: `Question not found (id ='(${input.id})' )`
                })

            }
            console.log(question)
            return question
        }),
});