import { Colleague } from "./Colleague";
import { IDispatchMediator } from "../Mediator/IDispatchMediator";

export class BillingService extends Colleague {
  constructor(mediator: IDispatchMediator) {
    super(mediator, "BillingService");
  }

  generateInvoice(jobId: string, handyman: string): void {
    console.log(
      `  [BillingService] Invoice generated for Job #${jobId} completed by ${handyman}.`,
    );
  }
}
