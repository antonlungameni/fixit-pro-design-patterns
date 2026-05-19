import { INotificationChannel } from "../Channel/INotificationChannel";

export abstract class JobNotification {
  constructor(protected readonly channel: INotificationChannel) {}

  abstract notify(jobId: string, recipient: string, message: string): void;
}
