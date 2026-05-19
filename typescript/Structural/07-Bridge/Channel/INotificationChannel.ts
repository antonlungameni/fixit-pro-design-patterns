export interface INotificationChannel {
  send(recipient: string, subject: string, body: string): void;
}
