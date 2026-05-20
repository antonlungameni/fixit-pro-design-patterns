const shortId = () => Math.random().toString(36).slice(2, 10);

export class JobCard {
  readonly jobId: string = shortId();
  status: string = "Queued";

  constructor(
    readonly title: string,
    readonly category: string,
    readonly priority: number = 0,
  ) {}

  toString(): string {
    return `[P${this.priority}] #${this.jobId} '${this.title}' [${this.category}] — ${this.status}`;
  }
}
