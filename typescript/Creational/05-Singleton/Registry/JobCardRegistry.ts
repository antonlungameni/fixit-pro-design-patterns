import { JobCard } from "../Product/JobCard";

// TypeScript modules are evaluated once and cached — exporting an instance
// is the idiomatic Singleton. The class itself is not exported, so callers
// cannot construct additional instances.

class JobCardRegistryClass {
  private jobs: JobCard[] = [];

  register(card: JobCard): void {
    this.jobs.push(card);
  }

  updateStatus(jobId: string, status: string): void {
    const job = this.jobs.find((j) => j.jobId === jobId);
    if (job) job.status = status;
  }

  getAll(): ReadonlyArray<JobCard> {
    return this.jobs;
  }

  getByStatus(status: string): JobCard[] {
    return this.jobs.filter((j) => j.status === status);
  }

  get count(): number {
    return this.jobs.length;
  }

  printSummary(): void {
    console.log(`\n=== Job Card Registry (${this.jobs.length} jobs) ===`);
    for (const job of this.jobs)
      console.log(
        `  [${job.status}] #${job.jobId} — ${job.title} (${job.category})`,
      );
  }
}

export const JobCardRegistry = new JobCardRegistryClass();
