import { GrpcStreamCall } from "@nestjs/microservices"; 
import { Controller } from "@nestjs/common";

@Controller()
export class AppController {
  @GrpcStreamCall()
  bidiHello(requestStream: any) {
    requestStream.on('data', (message: any) => {
      console.log(`Received this from gRPC microservice: ${message}`);
      console.log('Saving it to DB here...')
    });
  }
}
