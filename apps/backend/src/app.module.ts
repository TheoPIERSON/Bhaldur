import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // accessible partout sans réimporter
      envFilePath: '.env', // facultatif si ton .env est bien à la racine du backend
    }),
    // autres modules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
