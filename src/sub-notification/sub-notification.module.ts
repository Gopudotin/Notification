import { Module } from '@nestjs/common';
import { SubNotificationController } from './controllers/sub-notification/sub-notification.controller';
import { SubNotificationService } from './services/sub-notification/sub-notification.service';

@Module({
  controllers: [SubNotificationController],
  providers: [SubNotificationService]
})
export class SubNotificationModule {}
