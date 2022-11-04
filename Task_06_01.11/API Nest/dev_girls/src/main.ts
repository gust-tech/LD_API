import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Fórum Dev Girls')
    .setDescription('Projeto do Fórum Dev Girls')
    .setContact('Generation Brasil', 'www.genbr.com.br', 'gstvgeneration@gmail.com')
    .setVersion('1.0')
    .addBearerAuth()
    .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/swagger', app, document)

  process.env.TZ = '-03:00'
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
