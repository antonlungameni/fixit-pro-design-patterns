import { INotifier } from "./INotifier";

export class EmailNotifier implements INotifier {
  sendNotification(jobId: string, message: string): void {
    console.log(`📧 Email | Job #${jobId}: ${message}`);
  }
}
