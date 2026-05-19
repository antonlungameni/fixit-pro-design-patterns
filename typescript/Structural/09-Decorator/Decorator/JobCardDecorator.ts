import { IJobCard } from "../Component/IJobCard";

// Wraps an IJobCard and delegates all calls to it by default.
// Concrete decorators only override what they need to change.
export abstract class JobCardDecorator implements IJobCard {
  constructor(protected readonly wrapped: IJobCard) {}

  get jobId(): string {
    return this.wrapped.jobId;
  }
  get title(): string {
    return this.wrapped.title;
  }
  get category(): string {
    return this.wrapped.category;
  }
  get cost(): number {
    return this.wrapped.cost;
  }
  get description(): string {
    return this.wrapped.description;
  }

  execute(): void {
    this.wrapped.execute();
  }
}
