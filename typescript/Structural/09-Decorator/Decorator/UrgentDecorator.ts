import { IJobCard } from "../Component/IJobCard";
import { JobCardDecorator } from "./JobCardDecorator";

export class UrgentDecorator extends JobCardDecorator {
  private static readonly SURCHARGE_RATE = 0.25;

  constructor(jobCard: IJobCard) {
    super(jobCard);
  }

  get cost(): number {
    return this.wrapped.cost * (1 + UrgentDecorator.SURCHARGE_RATE);
  }

  get description(): string {
    return `🚨 URGENT | ${this.wrapped.description}`;
  }

  execute(): void {
    console.log("  📟 Paging on-call handyman immediately...");
    super.execute();
    console.log("  ⚡ Urgent flag set — supervisor notified.");
  }
}
