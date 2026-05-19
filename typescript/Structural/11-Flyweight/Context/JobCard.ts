import { JobCategoryMetadata } from "../Flyweight/JobCategoryMetadata";
import { JobCategoryFactory } from "../Flyweight/JobCategoryFactory";

const shortId = () => Math.random().toString(36).slice(2, 10);

export class JobCard {
  readonly jobId: string = shortId();
  status: string = "Active";

  private readonly metadata: JobCategoryMetadata;

  constructor(
    readonly clientRef: string,
    readonly scheduledAt: Date,
    category: string,
  ) {
    this.metadata = JobCategoryFactory.getMetadata(category);
  }

  printSummary(): void {
    console.log(
      `\n  Job #${this.jobId} | Client: ${this.clientRef} | ${this.scheduledAt.toDateString()} | ${this.status}`,
    );
    this.metadata.printMetadata();
  }

  getMetadata(): JobCategoryMetadata {
    return this.metadata;
  }
}
