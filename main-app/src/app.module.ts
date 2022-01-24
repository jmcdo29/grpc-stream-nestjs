import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
 
@Module({
  imports: [],
  exports: [],
  controllers: [AppController],
})
export class AppModule {}