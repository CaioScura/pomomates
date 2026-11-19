import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Fecha a conexão com o banco quando o servidor é desligado
  app.enableShutdownHooks();


  //documentacao swagger: itens do topo da doc
  const config = new DocumentBuilder()
      .setTitle('Pomomates API')
      .setDescription('API do Pomomates')
      .setVersion('0.1')
      .addBearerAuth() //cria o botão "Authorize" para enviar o token
      .build();

  //le os controllers
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
