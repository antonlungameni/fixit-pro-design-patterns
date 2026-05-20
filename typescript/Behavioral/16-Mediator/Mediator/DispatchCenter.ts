import { IDispatchMediator } from "./IDispatchMediator";
import { Colleague } from "../Colleague/Colleague";
import { Homeowner } from "../Colleague/Homeowner";
import { Handyman } from "../Colleague/Handyman";
import { Scheduler } from "../Colleague/Scheduler";
import { BillingService } from "../Colleague/BillingService";

export class DispatchCenter implements IDispatchMediator {
  private homeowner?: Homeowner;
  private handyman?: Handyman;
  private scheduler?: Scheduler;
  private billing?: BillingService;

  registerHomeowner(c: Homeowner): void {
    this.homeowner = c;
  }
  registerHandyman(c: Handyman): void {
    this.handyman = c;
  }
  registerScheduler(c: Scheduler): void {
    this.scheduler = c;
  }
  registerBilling(c: BillingService): void {
    this.billing = c;
  }

  notify(
    sender: object,
    eventName: string,
    data: Record<string, unknown> = {},
  ): void {
    const senderName = sender instanceof Colleague ? sender.name : "Unknown";
    console.log(`  [DispatchCenter] Event: '${eventName}' from ${senderName}`);

    switch (eventName) {
      case "JobRequested": {
        const { title, category } = data as {
          title: string;
          category: string;
        };
        const slot = this.scheduler!.bookSlot(category);
        this.handyman!.receiveAssignment(title, slot);
        this.homeowner!.receiveUpdate(
          `Your job '${title}' is booked for ${slot} and assigned to ${this.handyman!.name}.`,
        );
        break;
      }

      case "JobCompleted": {
        const { jobId, handyman } = data as {
          jobId: string;
          handyman: string;
        };
        this.billing!.generateInvoice(jobId, handyman);
        this.homeowner!.receiveUpdate(
          `Job #${jobId} has been completed by ${handyman}. Invoice is on its way.`,
        );
        break;
      }
    }
  }
}
