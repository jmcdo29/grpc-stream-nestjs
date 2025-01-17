
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'hello',
      protoPath: join(process.cwd(), 'src/hello.proto'),
      url: 'localhost:50051',
    },
  });

  app.startAllMicroservices();
}
bootstrap(); 