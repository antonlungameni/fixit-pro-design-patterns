import { JobCard } from "../Model/JobCard";
import { PriorityJobIterator } from "../Iterator/PriorityJobIterator";

export class HandymanJobQueue {
  private jobs: JobCard[] = [];

  constructor(readonly handymanName: string) {}

  addJob(job: JobCard): void {
    this.jobs.push(job);
  }

  get count(): number {
    return this.jobs.length;
  }

  createIterator(): PriorityJobIterator {
    return new PriorityJobIterator(this.jobs);
  }

  [Symbol.iterator](): Iterator<JobCard> {
    const sorted = [...this.jobs].sort((a, b) => b.priority - a.priority);
    let index = 0;

    return {
      next(): IteratorResult<JobCard> {
        if (index < sorted.length)
          return { value: sorted[index++], done: false };
        return { value: undefined as unknown as JobCard, done: true };
      },
    };
  }
}
