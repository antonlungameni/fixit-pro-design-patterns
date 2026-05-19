import { INotifier } from "./INotifier";

export class PushNotifier implements INotifier {
  sendNotification(jobId: string, message: string): void {
    console.log(`🔔 Push  | Job #${jobId}: ${message}`);
  }
}
