// sub-notification/processors/notification.processor.ts
import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { SubNotificationService } from '../services/sub-notification/sub-notification.service';

@Processor('notificationQueue')
export class NotificationProcessor {
  constructor(private readonly subNotificationService: SubNotificationService) {}

  @Process()
  async processNotificationJob(job: Job<{ subscriberId: number; notificationId: number }>): Promise<void> {
    const { subscriberId, notificationId } = job.data;

    // Update the 'has_read' status and perform other tasks
    await this.subNotificationService.updateNotificationStatus(subscriberId, notificationId);
  }
}
