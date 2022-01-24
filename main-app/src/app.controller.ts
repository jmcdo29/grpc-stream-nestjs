import { GrpcStreamMethod, GrpcStreamCall } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { Metadata, ServerDuplexStream } from '@grpc/grpc-js';
import { interval, Observable, Subject, map } from 'rxjs';

interface HelloService { 
  lotsOfGreetings(
    upstream: Observable<HelloRequest>,
  ): any;
}

interface HelloRequest {
  id: number;
  name: string;
}

@Controller()
export class AppService {
  @GrpcStreamCall('HelloService')
  lotsOfGreetings(requestStream: any, callback: (err: unknown, value: any) => void) {
    requestStream.on('data', message => {
      console.log('data object received: ', message);
      console.log('this.eventRepository.save(event)')
    });
  }
}