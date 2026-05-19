import { INotificationChannel } from "./INotificationChannel";

export class SmsChannel implements INotificationChannel {
  send(recipient: string, subject: string, body: string): void {
    console.log(`📱 SMS    → ${recipient}: [${subject}] ${body}`);
  }
}
