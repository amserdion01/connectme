// messageRouter.ts
import { z } from "zod";
import { prisma } from "../../db";
import {
    createTRPCRouter,
    protectedProcedure,
} from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const messageRouter = createTRPCRouter({
    createMessage: protectedProcedure
        .input(z.object({ content: z.string(), serverId: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return ctx.prisma.message.create({
                data: {
                    content: input.content,
                    senderId: ctx.session.user.id, // use senderId instead of userId
                    serverId: input.serverId,
                },
            });
        }),

    deleteMessage: protectedProcedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return ctx.prisma.message.delete({
                where: {
                    id: input.id,
                },
            });
        }),

    getAllMessages: protectedProcedure
        .input(z.object({ serverId: z.string() }))
        .query(({ ctx, input }) => {
            return ctx.prisma.message.findMany({
                where: {
                    serverId: input.serverId,
                },
            });
        }),

    getMessageById: protectedProcedure
        .input(z.object({ id: z.string(), serverId: z.string() }))
        .query(async ({ ctx, input }) => {
            const message = await prisma.message.findFirst({
                where: {
                    id: input.id,
                    serverId: input.serverId,
                },
            });
            if (!message) {
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message: `Message not found (id ='(${input.id})' )`
                })
            }
            console.log(message)
            return message
        }),
});
