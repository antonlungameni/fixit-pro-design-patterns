import { INotificationChannel } from "./INotificationChannel";

export class PushChannel implements INotificationChannel {
  send(recipient: string, subject: string, body: string): void {
    console.log(`🔔 Push   → ${recipient} | ${subject}: ${body}`);
  }
}
