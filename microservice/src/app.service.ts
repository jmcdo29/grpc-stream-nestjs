import { ClientGrpc } from '@nestjs/microservices';
import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { interval, Observable, Subject, map } from 'rxjs';
import { GrpcStreamMethod, GrpcStreamCall } from '@nestjs/microservices';
import { ReplaySubject } from 'rxjs';

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
export class AppController implements OnModuleInit {
  constructor(
    @Inject('HELLO_PACKAGE') private readonly grpcClientProxy: ClientGrpc,
  ) { }
  
  onModuleInit() {
      
const helloService = this.grpcClientProxy.getService<HelloService>('HelloService');
// const helloRequest$ = new ReplaySubject<HelloRequest>();

// helloRequest$.next({   id: 13,
//   name: 'string' });
//   helloRequest$.next({   id: 66,
//     name: 'hi' });
// helloRequest$.complete();
// return helloService.lotsOfGreetings(helloRequest$);

  }
  @GrpcStreamMethod('HelloService')
  lotsOfGreetings(
  ): Observable<HelloRequest> {
    return interval(5000).pipe(map(() => ({
      id: Math.random(),
      name: `test name ${Math.random()}`
    })));
  }
}