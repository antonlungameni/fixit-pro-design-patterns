export class ApprovalRequest {
  constructor(
    readonly jobId: string,
    readonly title: string,
    readonly cost: number,
    readonly category: string,
  ) {}

  toString(): string {
    return `Job #${this.jobId} '${this.title}' [${this.category}] — N$${this.cost.toFixed(2)}`;
  }
}
