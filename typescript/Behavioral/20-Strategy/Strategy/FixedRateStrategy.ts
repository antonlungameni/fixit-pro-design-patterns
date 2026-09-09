import { IPricingStrategy } from "./IPricingStrategy";
import type { JobCard } from "../Model/JobCard";

export class FixedRateStrategy implements IPricingStrategy {
  readonly name = "Fixed Rate";

  calculate(job: JobCard): number {
    return job.quotedPrice;
  }

  explain(job: JobCard): string {
    return `Flat quoted price of N$${job.quotedPrice.toFixed(2)}, regardless of time taken.`;
  }
}
