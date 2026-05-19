import { IJobCardAccess } from "../Subject/IJobCardAccess";
import { JobCard } from "../Model/JobCard";
import { JobCardRegistry } from "../Real/JobCardRegistry";

export class LazyJobCardRegistry implements IJobCardAccess {
  private realRegistry?: JobCardRegistry;

  private get registry(): JobCardRegistry {
    if (!this.realRegistry) {
      console.log("  [LazyProxy] Initialising real registry (first access)...");
      this.realRegistry = new JobCardRegistry();
    }
    return this.realRegistry;
  }

  register(card: JobCard): void {
    this.registry.register(card);
  }

  getJobCard(jobId: string): JobCard | undefined {
    return this.registry.getJobCard(jobId);
  }

  getAll(): ReadonlyArray<JobCard> {
    return this.registry.getAll();
  }
}
