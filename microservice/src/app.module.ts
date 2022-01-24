import { Module } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { join } from "path";
import { AppService } from './app.service';
 
@Module({
  imports: [],
  controllers: [AppService],
  providers: [
    {
      provide: 'HELLO_PACKAGE',
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            package: 'hello',
            protoPath: join(process.cwd(), 'src/hello.proto'),
            url: 'localhost:50050'
          },
        })
      },
    }
  ],
})
export class AppModule {}