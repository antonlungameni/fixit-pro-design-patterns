interface IAlertNotifier {
  sendAlert(jobId: string, message: string): void;
}