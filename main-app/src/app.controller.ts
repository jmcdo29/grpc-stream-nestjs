import { ClientGrpc } from '@nestjs/microservices';
import { Controller, Get, Inject } from '@nestjs/common';
import { GrpcStreamMethod, GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AppController {

  @GrpcMethod('HelloService', 'BidiHello')
  // @GrpcMethod()
  // @GrpcStreamMethod('HelloService', 'BidiHello')
  // @GrpcStreamMethod()
  async bidiHello() {
    console.log('i was launched')
    const data = 'hello';
    return {
      data
    }
  }
}