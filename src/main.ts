//import { NestFactory } from '@nestjs/core';
//import { AppModule } from './app.module';

//async function bootstrap() {
  //const app = await NestFactory.create(AppModule);
  //await app.listen(process.env.PORT ?? 3000);
//}
//bootstrap();

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaExceptionFilter } from './prisma/prisma-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.useGlobalFilters(new PrismaExceptionFilter());

  const config = new DocumentBuilder()
  .setTitle('Catálogo API')
  .setDescription('API de la tienda: productos, categorías y usuarios')
  .setVersion('1.0')
  .build();

const documento = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('docs', app, documento);

  await app.listen(3000);
}
bootstrap();
