export class JobCard {
  readonly jobId: string = Math.random().toString(36).slice(2, 10);

  hoursWorked: number = 0;
  isAfterHours: boolean = false;

  constructor(
    readonly title: string,
    readonly category: string,
    readonly quotedPrice: number = 0,
  ) {}

  toString(): string {
    return `Job #${this.jobId} '${this.title}' [${this.category}] — ${this.hoursWorked}h`;
  }
}
