import { IJobCardAccess } from "../Subject/IJobCardAccess";
import { JobCard } from "../Model/JobCard";

export class JobCardRegistry implements IJobCardAccess {
  private store = new Map<string, JobCard>();

  register(card: JobCard): void {
    this.store.set(card.jobId, card);
    console.log(`  [Registry] Registered: ${card}`);
  }

  getJobCard(jobId: string): JobCard | undefined {
    return this.store.get(jobId);
  }

  getAll(): ReadonlyArray<JobCard> {
    return Array.from(this.store.values());
  }
}
