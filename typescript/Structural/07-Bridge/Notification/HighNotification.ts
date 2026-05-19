import { INotificationChannel } from "../Channel/INotificationChannel";
import { JobNotification } from "./JobNotification";

export class HighNotification extends JobNotification {
  constructor(channel: INotificationChannel) {
    super(channel);
  }

  notify(jobId: string, recipient: string, message: string): void {
    this.channel.send(recipient, `[HIGH PRIORITY] Job #${jobId}`, message);
  }
}
