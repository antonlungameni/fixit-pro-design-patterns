export interface INotifier {
  sendNotification(jobId: string, message: string): void;
}
