import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { trpcMiddleware } from './trpc/trpc.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const server = express();

  server.use('/trpc', trpcMiddleware);

  server.use(await app.getHttpAdapter().getInstance());

  await app.listen(8000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
