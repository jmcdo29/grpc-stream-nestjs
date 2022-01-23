import { ClientGrpc } from '@nestjs/microservices';
import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { interval, map, ReplaySubject, tap, EMPTY } from 'rxjs';

@Controller()
export class AppController implements OnModuleInit {
  private helloService;
  constructor(
    @Inject('HELLO_PACKAGE') private readonly grpcClientProxy: ClientGrpc,
  ) {}

  onModuleInit() {
    this.helloService = this.grpcClientProxy.getService('HelloService');
    this.helloService.bidiHello(EMPTY).pipe(tap(console.log)).subscribe();
  }
}
