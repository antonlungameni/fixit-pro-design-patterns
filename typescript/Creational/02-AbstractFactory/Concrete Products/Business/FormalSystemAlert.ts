class FormalSystemAlert implements IAlertNotifier {
  sendAlert(jobId: string, message: string): void {
    console.log(`🔔 System notification | Job #${jobId}: ${message} [ref: BSNS]`);
  }
}