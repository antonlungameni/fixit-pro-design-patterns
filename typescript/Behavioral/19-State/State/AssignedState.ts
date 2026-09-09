import { BaseJobState } from "./BaseJobState";
import { InProgressState } from "./InProgressState";
import type { JobCard } from "../Context/JobCard";

export class AssignedState extends BaseJobState {
  readonly name = "Assigned";

  override start(job: JobCard): void {
    const startedAt = new Date();
    job.startedAt = startedAt;
    job.transitionTo(new InProgressState());
    console.log(`  ▶️  Work started at ${startedAt.toTimeString().slice(0, 8)}`);
  }

  // Reassignment is allowed while still Assigned
  override assign(job: JobCard, handyman: string): void {
    const previous = job.assignee;
    job.assignee = handyman;
    console.log(`  🔄 Reassigned from ${previous} to ${handyman}`);
  }
}
