import { INotificationChannel } from "../Channel/INotificationChannel";
import { JobNotification } from "./JobNotification";

export class UrgentNotification extends JobNotification {
  constructor(
    channel: INotificationChannel,
    private readonly repeatCount: number = 3,
  ) {
    super(channel);
  }

  notify(jobId: string, recipient: string, message: string): void {
    for (let i = 1; i <= this.repeatCount; i++)
      this.channel.send(
        recipient,
        `🚨 URGENT (#${i}/${this.repeatCount}) Job #${jobId}`,
        message,
      );
  }
}
