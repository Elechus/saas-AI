import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Log MongoDB connection (only for debugging)
  const mongoUri = process.env.MONGODB_URI;
  console.log('MongoDB URI format check:', 
    mongoUri ? 
    mongoUri.replace(/\/\/.*@/, '//[credentials]@') : 
    'No MongoDB URI found'
  );
  
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Legal Documents API')
    .setDescription('API for searching legal documents')
    .setVersion('1.0')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Accept'],
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
