import { IJobCard } from "../Component/IJobCard";

const shortId = () => Math.random().toString(36).slice(2, 10);

export class JobCard implements IJobCard {
  readonly jobId = shortId();

  constructor(
    readonly title: string,
    readonly category: string,
    readonly cost: number,
  ) {}

  get description(): string {
    return `[${this.category}] ${this.title}`;
  }

  execute(): void {
    console.log(
      `⚙️  Executing: ${this.description} — N$${this.cost.toFixed(2)}`,
    );
  }
}
