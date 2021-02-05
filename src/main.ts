import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Reto SONR')
    .setDescription('Documentación de la API del Sistema de Inspección para informar al cliente dedicado al sector automotriz. Elaborado por Brian Orellana')
    .setVersion('1.0')
    .addTag('Automotriz')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
