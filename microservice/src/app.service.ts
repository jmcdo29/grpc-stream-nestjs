import { GrpcStreamMethod } from '@nestjs/microservices';

export class AppService {
  @GrpcStreamMethod()
  createNewData(): any {
    setInterval(() => {
      const data = Math.floor(Math.random())
      console.log(`Data generated to be received by the NestJS app automatically: ${data}`);
      return data;
    }, 5000) // generated random number and sends it every 5 seconds
  }
}
