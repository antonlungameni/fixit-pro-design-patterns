class SmsStyleAlert implements IAlertNotifier {
  sendAlert(jobId: string, message: string): void {
    console.log(`📱 SMS to homeowner | Job #${jobId}: ${message}`);
  }
}