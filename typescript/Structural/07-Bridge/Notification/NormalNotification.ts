import { INotificationChannel } from "../Channel/INotificationChannel";
import { JobNotification } from "./JobNotification";

export class NormalNotification extends JobNotification {
  constructor(channel: INotificationChannel) {
    super(channel);
  }

  notify(jobId: string, recipient: string, message: string): void {
    this.channel.send(recipient, `Job #${jobId} Update`, message);
  }
}
