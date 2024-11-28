import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

  // nest g module user => tạo module cho user
  //nest g controller user => tạo controller cho user
  //nest g controller modules/user => tạo service cho user
}
bootstrap();
