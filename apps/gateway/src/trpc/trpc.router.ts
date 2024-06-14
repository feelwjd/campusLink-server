import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

export const appRouter = t.router({
  hello: t.procedure
    .input(z.object({ name: z.string().optional() }))
    .query(({ input }) => `Hello, ${input.name ?? 'world'}!`),
  createProject: t.procedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        requirements: z.string(),
        companyId: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      // 프로젝트 생성 로직
      return { success: true, project: input };
    }),
  getProjects: t.procedure.query(async () => {
    // 모든 프로젝트를 가져오는 로직
    return [
      {
        id: 1,
        title: 'Project 1',
        description: 'Description 1',
        requirements: 'Requirements 1',
        companyId: 1,
      },
    ];
  }),
});

export type AppRouter = typeof appRouter;
