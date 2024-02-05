// sub-notification/services/sub-notification/sub-notification.service.ts
import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { Job } from 'bull';
import { SubscriberNotification } from 'src/sub-notification/sub-notification.entity';

@Injectable()
export class SubNotificationService {
  constructor(@InjectQueue('notificationQueue') private notificationQueue: Queue) {}

  async processNotification(subscriberId: number, notificationId: number): Promise<Job> {
    // Add job to the queue to process the notification
    const job = await this.notificationQueue.add({ subscriberId, notificationId });
    return job;
  }

  async updateNotificationStatus(subscriberId: number, notificationId: number): Promise<void> {
    try {
      // Find the record in the database
      const subscriberNotification = await SubscriberNotification.findOne({
        where: { subscriberId, notificationId },
      });

      // Check if the record exists
      if (subscriberNotification) {
        // Update the 'has_read' status to true
        subscriberNotification.hasRead = true;

        // Save the changes to the database
        await subscriberNotification.save();
      } else {
        // Handle case where the record is not found
        console.error(`SubscriberNotification with subscriber_id ${subscriberId} and notification_id ${notificationId} not found.`);
      }
    } catch (error) {
      // Handle any errors that may occur during the database operation
      console.error('Error updating notification status:', error.message);
    }
  }
}
