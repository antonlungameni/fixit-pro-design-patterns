import { IPricingStrategy } from "./IPricingStrategy";
import type { JobCard } from "../Model/JobCard";

// Wraps another strategy and adds an after-hours surcharge on top
export class EmergencyRateStrategy implements IPricingStrategy {
  constructor(
    private readonly baseStrategy: IPricingStrategy,
    private readonly surchargeRate: number = 0.5,
  ) {}

  get name(): string {
    return `Emergency (${(this.surchargeRate * 100).toFixed(0)}% surcharge)`;
  }

  calculate(job: JobCard): number {
    return this.baseStrategy.calculate(job) * (1 + this.surchargeRate);
  }

  explain(job: JobCard): string {
    const baseAmount = this.baseStrategy.calculate(job);
    const surcharge = baseAmount * this.surchargeRate;

    return (
      `${this.baseStrategy.explain(job)} ` +
      `After-hours surcharge of ${(this.surchargeRate * 100).toFixed(0)}% ` +
      `(N$${surcharge.toFixed(2)}) applied.`
    );
  }
}
