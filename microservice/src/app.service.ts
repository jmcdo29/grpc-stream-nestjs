import { Controller, Inject, OnModuleInit } from '@nestjs/common';
import { EMPTY } from 'rxjs';
import { ClientGrpc } from '@nestjs/microservices';

interface HelloService {
  bidiHello(): any;
}

@Controller()
export class AppService implements OnModuleInit{
  private helloService;params: {}

  constructor(
    @Inject('HELLO_PACKAGE') private readonly grpcClientProxy: ClientGrpc,
  ) {}

  onModuleInit() {
      console.log('init')
      this.helloService = this.grpcClientProxy.getService('HelloService');
      return this.helloService.bidiHello(EMPTY)
  }
}
