import { IPricingStrategy } from "./IPricingStrategy";
import type { JobCard } from "../Model/JobCard";

// Wraps another strategy and applies an annual-contract discount
export class ContractRateStrategy implements IPricingStrategy {
  constructor(
    private readonly baseStrategy: IPricingStrategy,
    private readonly contractRef: string,
    private readonly discountRate: number = 0.15,
  ) {}

  get name(): string {
    return `Contract Rate (${(this.discountRate * 100).toFixed(0)}% discount)`;
  }

  calculate(job: JobCard): number {
    return this.baseStrategy.calculate(job) * (1 - this.discountRate);
  }

  explain(job: JobCard): string {
    const baseAmount = this.baseStrategy.calculate(job);
    const discount = baseAmount * this.discountRate;

    return (
      `${this.baseStrategy.explain(job)} ` +
      `Contract ${this.contractRef} discount of ` +
      `${(this.discountRate * 100).toFixed(0)}% (N$${discount.toFixed(2)}) applied.`
    );
  }
}
