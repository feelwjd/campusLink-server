import { Module } from '@nestjs/common';
import { RedisModule } from '@nestjs-modules/ioredis';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    RedisModule.forRoot({
      type: 'single',
      options: {
        host: '127.0.0.1',
        port: 6379,
        password: '',
      },
    }),
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'campuslink',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'campuslink-consumer',
          },
        },
      },
    ]),
  ],
})
export class AppModule {}
