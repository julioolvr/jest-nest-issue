import { Module } from '@nestjs/common';
import { BullModule, Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Processor('test-queue')
class QueueConsumer {
  @Process('test-job')
  handleEvent(job: Job) {
    console.log('Processing job', job);
  }
}

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'test-queue',
    }),
  ],
  providers: [QueueConsumer],
})
class QueueModule {}

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    QueueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
