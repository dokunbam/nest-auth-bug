import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';


const port = process.env.PORT;
const uiusername = process.env.SwaggerUIAuthUser;
const uipassword = process.env.SwaggerUIAuthPass;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const options = new DocumentBuilder().addBearerAuth()
    .setTitle('SureBanka')
    .setDescription('SureBank API description')
    .setVersion('1.0')
    .addTag('Secured Payment', 'POS')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('', app, document);

  app.enableCors();
  app.use(helmet());
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );
  app.use('/public', express.static(join(__dirname, '..', 'public')));

  await app.listen(port);
  Logger.log('info', `Server running on http://localhost:${port}`);
}
bootstrap();
