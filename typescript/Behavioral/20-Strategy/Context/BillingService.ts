import type { IPricingStrategy } from "../Strategy/IPricingStrategy";
import type { JobCard } from "../Model/JobCard";

export class BillingService {
  constructor(private strategy: IPricingStrategy) {}

  // Strategy can be swapped at runtime
  setStrategy(strategy: IPricingStrategy): void {
    console.log(`  [Billing] Pricing strategy set to: ${strategy.name}`);
    this.strategy = strategy;
  }

  generateInvoice(job: JobCard): number {
    const amount = this.strategy.calculate(job);

    console.log(`\n  Invoice for ${job}`);
    console.log(`    Strategy : ${this.strategy.name}`);
    console.log(`    Basis    : ${this.strategy.explain(job)}`);
    console.log(`    TOTAL    : N$${amount.toFixed(2)}`);

    return amount;
  }
}
