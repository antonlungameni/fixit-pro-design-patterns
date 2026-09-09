import type { JobCard } from "../Context/JobCard";

// Declares every possible action. Each state implements only
// the ones valid from itself; the rest are rejected.
export interface IJobState {
  readonly name: string;

  assign(job: JobCard, handyman: string): void;
  start(job: JobCard): void;
  pause(job: JobCard, reason: string): void;
  resume(job: JobCard): void;
  complete(job: JobCard): void;
  approve(job: JobCard): void;
}
