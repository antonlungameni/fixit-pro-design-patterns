export class NotificationService {
  notifyHomeowner(jobId: string, slot: string): void {
    console.log(
      `  📧 NotificationService: Homeowner notified — Job #${jobId} scheduled for ${slot}.`,
    );
  }

  notifyHandyman(jobId: string, handyman: string): void {
    console.log(
      `  📱 NotificationService: ${handyman} notified of Job #${jobId}.`,
    );
  }

  notifySupervisor(jobId: string): void {
    console.log(
      `  🔔 NotificationService: Supervisor notified of new Job #${jobId}.`,
    );
  }
}
