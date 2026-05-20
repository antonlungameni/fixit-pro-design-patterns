import { Colleague } from "./Colleague";
import { IDispatchMediator } from "../Mediator/IDispatchMediator";

export class Handyman extends Colleague {
  constructor(
    mediator: IDispatchMediator,
    name: string,
    readonly specialisation: string,
  ) {
    super(mediator, name);
  }

  completeJob(jobId: string): void {
    console.log(`\n[${this.name}] Marking Job #${jobId} as complete.`);
    this.mediator.notify(this, "JobCompleted", { jobId, handyman: this.name });
  }

  receiveAssignment(jobTitle: string, slot: string): void {
    console.log(`  [${this.name}] Assigned: '${jobTitle}' at ${slot}`);
  }
}
