import { IJobCard } from "../Component/IJobCard";
import { JobCardDecorator } from "./JobCardDecorator";

export class InsuredDecorator extends JobCardDecorator {
  private static readonly INSURANCE_PREMIUM = 350;

  constructor(jobCard: IJobCard) {
    super(jobCard);
  }

  get cost(): number {
    return this.wrapped.cost + InsuredDecorator.INSURANCE_PREMIUM;
  }

  get description(): string {
    return `🛡️  INSURED | ${this.wrapped.description}`;
  }

  execute(): void {
    console.log("  📄 Generating liability waiver...");
    super.execute();
    console.log("  ✅ Insurance certificate issued.");
  }
}
