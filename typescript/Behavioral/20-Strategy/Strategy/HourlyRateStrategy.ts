import { IPricingStrategy } from "./IPricingStrategy";
import type { JobCard } from "../Model/JobCard";

export class HourlyRateStrategy implements IPricingStrategy {
  readonly name = "Hourly Rate";

  constructor(
    private readonly hourlyRate: number = 450,
    private readonly minimumCallout: number = 350,
  ) {}

  calculate(job: JobCard): number {
    return Math.max(job.hoursWorked * this.hourlyRate, this.minimumCallout);
  }

  explain(job: JobCard): string {
    const raw = job.hoursWorked * this.hourlyRate;

    return raw < this.minimumCallout
      ? `${job.hoursWorked}h × N$${this.hourlyRate.toFixed(2)} = N$${raw.toFixed(2)}, ` +
          `below minimum callout — charged N$${this.minimumCallout.toFixed(2)}.`
      : `${job.hoursWorked}h × N$${this.hourlyRate.toFixed(2)} = N$${raw.toFixed(2)}.`;
  }
}
