import { IJobCard } from "../Component/IJobCard";
import { JobCardDecorator } from "./JobCardDecorator";

export class WarrantiedDecorator extends JobCardDecorator {
  private static readonly WARRANTY_DAYS = 90;

  constructor(jobCard: IJobCard) {
    super(jobCard);
  }

  get description(): string {
    return `🔒 WARRANTIED (${WarrantiedDecorator.WARRANTY_DAYS}d) | ${this.wrapped.description}`;
  }

  execute(): void {
    super.execute();
    console.log(
      `  📆 90-day callback warranty registered for Job #${this.jobId}.`,
    );
  }
}
