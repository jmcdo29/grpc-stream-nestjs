import { GrpcStreamMethod } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { Metadata, ServerDuplexStream } from '@grpc/grpc-js';
import { interval, Observable, Subject, map } from 'rxjs';
@Controller()
export class AppService {
  @GrpcStreamMethod('HelloService')
  bidiHello(
    messages: Observable<any>,
    metadata: Metadata,
    call: ServerDuplexStream<any, any>,
  ): Observable<any> {
    return interval(5000).pipe(map(() => ({ reply: Math.random() })));
  }
}
