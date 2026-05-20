import { Colleague } from "./Colleague";
import { IDispatchMediator } from "../Mediator/IDispatchMediator";

export class Scheduler extends Colleague {
  private slotCounter = 1;

  constructor(mediator: IDispatchMediator) {
    super(mediator, "Scheduler");
  }

  bookSlot(category: string): string {
    const slot = `Slot-${this.slotCounter++} (${category})`;
    console.log(`  [Scheduler] Booked: ${slot}`);
    return slot;
  }
}
