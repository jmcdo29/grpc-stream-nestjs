import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Transport, ClientsModule } from '@nestjs/microservices'
import { join } from 'path'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HELLO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'hello',
          protoPath: join(
            process.cwd(),
            'src/hello.proto',
          ),
          url: 'localhost:50051',
        },
      },
    ]),
  ],
  controllers: [AppController]
})
export class AppModule {}
