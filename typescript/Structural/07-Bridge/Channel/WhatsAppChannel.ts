import { INotificationChannel } from "./INotificationChannel";

export class WhatsAppChannel implements INotificationChannel {
  send(recipient: string, subject: string, body: string): void {
    console.log(`💬 WhatsApp → ${recipient}: *${subject}* — ${body}`);
  }
}
