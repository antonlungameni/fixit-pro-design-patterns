import { BaseJobState } from "./BaseJobState";
import { ClosedState } from "./ClosedState";
import { InProgressState } from "./InProgressState";
import type { JobCard } from "../Context/JobCard";

export class PendingReviewState extends BaseJobState {
  readonly name = "PendingReview";

  override approve(job: JobCard): void {
    job.closedAt = new Date();
    job.transitionTo(new ClosedState());
    console.log("  🔒 Approved and closed");
  }

  // Review rejected — send back to InProgress
  override start(job: JobCard): void {
    job.completedAt = undefined;
    job.transitionTo(new InProgressState());
    console.log("  ↩️  Review rejected — reopened for rework");
  }
}
