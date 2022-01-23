import { Module } from '@nestjs/common';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppService],
  providers: [],
})
export class AppModule {}
