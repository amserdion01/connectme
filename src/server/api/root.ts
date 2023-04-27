import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { serverRouter } from "./routers/serverRouter";
import { questionRouter } from "./routers/questionRouter";
import { userRouter } from "./routers/userRouter";
import { messageRouter } from "./routers/messageRouter";
import { answerRouter } from "./routers/answearRouter";
import { reviewRouter } from "./routers/reviewRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  server: serverRouter,
  question: questionRouter,
  user: userRouter,
  message: messageRouter,
  answer: answerRouter,
  review: reviewRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
