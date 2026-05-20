import { Colleague } from "./Colleague";
import { IDispatchMediator } from "../Mediator/IDispatchMediator";

export class Homeowner extends Colleague {
  constructor(mediator: IDispatchMediator, name: string) {
    super(mediator, name);
  }

  submitJobRequest(jobTitle: string, category: string): void {
    console.log(
      `\n[${this.name}] Submitting job request: '${jobTitle}' [${category}]`,
    );

    this.mediator.notify(this, "JobRequested", {
      title: jobTitle,
      category: category,
      client: this.name,
    });
  }

  receiveUpdate(message: string): void {
    console.log(`  [${this.name}] Received update: ${message}`);
  }
}
