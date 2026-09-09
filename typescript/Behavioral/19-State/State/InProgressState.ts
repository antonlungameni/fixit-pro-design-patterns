import { BaseJobState } from "./BaseJobState";
import { PausedState } from "./PausedState";
import { PendingReviewState } from "./PendingReviewState";
import type { JobCard } from "../Context/JobCard";

export class InProgressState extends BaseJobState {
  readonly name = "InProgress";

  override pause(job: JobCard, reason: string): void {
    job.pauseReason = reason;
    job.transitionTo(new PausedState());
    console.log(`  ⏸️  Paused — ${reason}`);
  }

  override complete(job: JobCard): void {
    job.completedAt = new Date();
    job.transitionTo(new PendingReviewState());
    console.log("  ✔️  Work complete — awaiting review");
  }
}
