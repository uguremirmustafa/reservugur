import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";

export const reservationRouter = router({
  //   hello: publicProcedure
  //     .input(z.object({ text: z.string().nullish() }).nullish())
  //     .query(({ input }) => {
  //       return {
  //         greeting: `Hello ${input?.text ?? "world"}`,
  //       };
  //     }),
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.reservation.findMany({
      where: { ownerId: ctx.userId },
      include: {
        owner: true,
        place: {
          include: {
            owner: true,
          },
        },
      },
    });
  }),
  getById: protectedProcedure
    .input(z.object({ reservationId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.reservation.findUnique({
        where: { id: input.reservationId },
      });
    }),
});
