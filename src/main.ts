import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { PrismaService } from 'nestjs-prisma';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //  enableな シャットダウン のための Hooks
  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);

  await app.listen(3000);
}
bootstrap();
