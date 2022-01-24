import { Controller } from '@nestjs/common';
import { GrpcStreamMethod } from '@nestjs/microservices';

@Controller()
export class AppController {

  @GrpcStreamMethod('HelloService', 'BidiHello')
  async bidiHello() {
    const fake_data_got_from_microservice = {
      id: Math.floor(Math.random() * 10),
      name: 'test name'
    }
    console.log('i was launched from the microservice!')
    console.log('this is the data that was passed to me from the microservice: ', fake_data_got_from_microservice)
    console.log('i will now save data that i just got to the database: await this.helloRepository.save(newHello);')
    return {
      fake_data_got_from_microservice
    }
  }
}