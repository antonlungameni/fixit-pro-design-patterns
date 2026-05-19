import { INotificationChannel } from "./INotificationChannel";

export class EmailChannel implements INotificationChannel {
  send(recipient: string, subject: string, body: string): void {
    console.log(`📧 Email  → ${recipient} | Subject: ${subject} | ${body}`);
  }
}
