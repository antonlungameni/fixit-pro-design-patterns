import type { IJobState } from "../State/IJobState";
import { DraftState } from "../State/DraftState";

export class JobCard {
  readonly jobId: string = Math.random().toString(36).slice(2, 10);

  assignee: string | undefined;
  pauseReason: string | undefined;
  startedAt: Date | undefined;
  completedAt: Date | undefined;
  closedAt: Date | undefined;

  private state: IJobState;

  constructor(
    readonly title: string,
    readonly category: string,
  ) {
    this.state = new DraftState(); // initial state
  }

  get currentState(): string {
    return this.state.name;
  }

  // Called by state classes to move to the next state
  transitionTo(newState: IJobState): void {
    console.log(`  [${this.state.name}] → [${newState.name}]`);
    this.state = newState;
  }

  // Delegate all actions to the current state
  assign(handyman: string): void {
    this.state.assign(this, handyman);
  }
  start(): void {
    this.state.start(this);
  }
  pause(reason: string): void {
    this.state.pause(this, reason);
  }
  resume(): void {
    this.state.resume(this);
  }
  complete(): void {
    this.state.complete(this);
  }
  approve(): void {
    this.state.approve(this);
  }

  toString(): string {
    return (
      `Job #${this.jobId} '${this.title}' [${this.category}] — State: ${this.state.name}` +
      (this.assignee ? ` | ${this.assignee}` : "")
    );
  }
}
