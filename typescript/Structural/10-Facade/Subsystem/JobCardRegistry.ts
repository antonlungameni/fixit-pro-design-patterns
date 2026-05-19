export class JobCardRegistry {
  private jobs: { jobId: string; title: string; status: string }[] = [];

  register(jobId: string, title: string): void {
    this.jobs.push({ jobId, title, status: "Active" });
    console.log(`  🗂️  JobCardRegistry: Job #${jobId} '${title}' registered.`);
  }

  get count(): number {
    return this.jobs.length;
  }
}
