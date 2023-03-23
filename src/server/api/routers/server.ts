import { z } from "zod";
import {prisma} from "../../db"
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

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
                    })).mutation(async ({input}) => {
                        return await prisma.server.create({data: input})
                    })
})