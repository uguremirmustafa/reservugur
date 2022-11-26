import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";

export const placeRouter = router({
  //   hello: publicProcedure
  //     .input(z.object({ text: z.string().nullish() }).nullish())
  //     .query(({ input }) => {
  //       return {
  //         greeting: `Hello ${input?.text ?? "world"}`,
  //       };
  //     }),
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.place.findMany({
      where: { ownerId: ctx.userId },
      include: {
        _count: true,
        owner: true,
        address: true,
      },
    });
  }),
});
