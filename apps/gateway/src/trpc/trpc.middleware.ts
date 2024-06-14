import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './trpc.router';

export const trpcMiddleware = trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext: () => ({}),
});
