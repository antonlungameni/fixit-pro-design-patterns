import { JobCard } from "../Model/JobCard";

export class PriorityJobIterator {
  private sorted: JobCard[];
  private index = 0;

  constructor(jobs: JobCard[]) {
    this.sorted = [...jobs].sort((a, b) => b.priority - a.priority);
  }

  hasNext(): boolean {
    return this.index < this.sorted.length;
  }
  next(): JobCard {
    return this.sorted[this.index++];
  }
  reset(): void {
    this.index = 0;
  }
}
