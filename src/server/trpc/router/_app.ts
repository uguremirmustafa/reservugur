// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { placeRouter } from "./place";
import { userRouter } from "./user";
import { reservationRouter } from "./reservation";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  place: placeRouter,
  reservation: reservationRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
