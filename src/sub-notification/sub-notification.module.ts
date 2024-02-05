// sub-notification/sub-notification.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BullModule } from '@nestjs/bull';
import { NotificationProcessor } from './processors/notification.processor';
import { SubNotificationController } from './controllers/sub-notification/sub-notification.controller';
import { SubNotificationService } from './services/sub-notification/sub-notification.service';
import { SubscriberNotification } from './sub-notification.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([SubscriberNotification]), 
    BullModule.registerQueue({
      name: 'notificationQueue',
    }),
  ],
  controllers: [SubNotificationController],
  providers: [SubNotificationService, NotificationProcessor],
})
export class SubNotificationModule {}
