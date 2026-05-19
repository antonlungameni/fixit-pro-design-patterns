import { JobCard } from "../Model/JobCard";

export interface IJobCardAccess {
  register(card: JobCard): void;
  getJobCard(jobId: string): JobCard | undefined;
  getAll(): ReadonlyArray<JobCard>;
}
