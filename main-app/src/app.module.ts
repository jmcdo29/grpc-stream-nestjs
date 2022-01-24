import { Module } from '@nestjs/common';
import { AppService } from './app.controller';

@Module({
  imports: [],
  controllers: [AppService],
  providers: [],
})
export class AppModule {}