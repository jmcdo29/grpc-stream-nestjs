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
      console.log('calling bidiHello which is located inside the main-app')
      console.log('im supposed to somehow send some random generated number to the main-app')
      return this.helloService.bidiHello(EMPTY)
  }
}
