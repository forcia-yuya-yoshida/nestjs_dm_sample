import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(await AppModule.register());
  await app.listen(3456);
  console.log(process.env.COOP);
}
bootstrap();
