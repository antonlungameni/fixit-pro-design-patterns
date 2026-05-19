import { INotifier } from "../Notifier/INotifier";
import { LegacySmsGateway } from "../Legacy/LegacySmsGateway";

// Object Adapter — wraps LegacySmsGateway, implements INotifier.

export class SmsNotifierAdapter implements INotifier {
  constructor(
    private readonly gateway: LegacySmsGateway,
    private readonly phoneNumber: string,
  ) {}

  sendNotification(jobId: string, message: string): void {
    const smsText = `[FixIt Pro] Job #${jobId}: ${message}`;
    this.gateway.transmit(this.phoneNumber, smsText);
  }
}
