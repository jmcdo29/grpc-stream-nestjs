import { ClientGrpc } from '@nestjs/microservices';
import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { interval, Observable, Subject, map } from 'rxjs';
import { GrpcStreamMethod, GrpcStreamCall } from '@nestjs/microservices';

@Controller()
export class AppController {
  private helloService;
  constructor(
    @Inject('HELLO_PACKAGE') private readonly grpcClientProxy: ClientGrpc,
  ) { }

  @GrpcStreamMethod('HelloService')
  lotsOfGreetings(
  ): Observable<any> {
    return interval(5000).pipe(map(() => ({
      id: Math.random(),
      name: `test name ${Math.random()}`
    })));
  }
}