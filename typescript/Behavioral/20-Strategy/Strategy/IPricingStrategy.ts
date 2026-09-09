import type { JobCard } from "../Model/JobCard";

// One pricing algorithm. Implementations are interchangeable —
// the billing service never knows which one it is holding.
export interface IPricingStrategy {
  readonly name: string;

  calculate(job: JobCard): number;
  explain(job: JobCard): string;
}
