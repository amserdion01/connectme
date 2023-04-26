import { z } from "zod";
import { prisma } from "../../db"
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";

import { TRPCError } from "@trpc/server";

export const serverRouter = createTRPCRouter({
    createServer: publicProcedure
        .input(z.object({
            name: z.string(),
            description: z.string(),
            faculty: z.string(),
            year: z.number(),
            semester: z.number(),
            importance: z.string(),
            additionalInfo: z.string().optional(),
            usefullLink: z.string().optional(),
        })).mutation(async ({ input }) => {
            return await prisma.server.create({ data: input })
        }),
    getAllServers: publicProcedure
        .input(z.object({ filter: z.string().optional() })).query(async ({ input
        }) => {
            const { filter } = input;
            let servers = await prisma.server.findMany();
            if (filter) {
                servers = servers.filter((server) => {
                    const nameFilter = server.name
                        .toLowerCase()
                        .includes(filter.toLowerCase())

                    const facultyFilter = server.faculty
                        .toLowerCase()
                        .includes(filter.toLowerCase())
                    return nameFilter || facultyFilter
                }

                )
            } return servers;
        }),
    getServerById: publicProcedure
        .input(z.object({ id: z.string() })).query(async ({
            input
        }) => {
            const server = await prisma.server.findFirst({ where: { id: input.id } })
            if (!server) {
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message: `Server not found (id ='(${input.id})' )`
                })

            }
            return server
        }),
    deleteServerById: publicProcedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({ input }) => {
            const serverToDelete = await prisma.server.findFirst({ where: { id: input.id } });

            if (!serverToDelete) {
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message: `Server not found (id ='(${input.id})' )`,
                });
            }

            await prisma.server.delete({ where: { id: input.id } });
            return { message: `Server with id '${input.id}' has been deleted.` };
        }),
    addRaiting: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
        const serverToDelete = await prisma.server.findFirst({ where: { id: input.id } });

        if (!serverToDelete) {
            throw new TRPCError({
                code: "BAD_REQUEST",
                message: `Server not found (id ='(${input.id})' )`,
            });
        }

        await prisma.server.delete({ where: { id: input.id } });
        return { message: `Server with id '${input.id}' has been deleted.` };
    }),
})