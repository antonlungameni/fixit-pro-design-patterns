const shortId = () => Math.random().toString(36).slice(2, 10);

export class JobCard {
  readonly jobId: string = shortId();
  status: string = "Active";

  constructor(
    readonly title: string,
    readonly category: string,
  ) {}

  toString(): string {
    return `[${this.category}] #${this.jobId} — ${this.title} (${this.status})`;
  }
}
