import type { JobCard } from "../Subject/JobCard";

export interface IJobCardObserver {
  update(eventName: string, jobCard: JobCard): void;
}
