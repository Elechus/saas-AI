import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModule } from './search/search.module';
import { Connection } from 'mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory: () => {
        console.log('Initializing MongoDB connection...');
        return {
          uri: process.env.MONGODB_URI ?? 'mongodb://localhost:27017/default',
          dbName: 'prod',
          connectionFactory: (connection: Connection) => {
            console.log('Attempting MongoDB connection...');
            connection.on('connected', () => {
              console.log('MongoDB connected successfully');
            });
            connection.on('error', (error) => {
              console.error('MongoDB connection error details:', {
                name: error.name,
                message: error.message,
                code: error.code
              });
            });
            return connection;
          }
        };
      },
    }),
    SearchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
