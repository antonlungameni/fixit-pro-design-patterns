import { BaseJobState } from "./BaseJobState";
import { InProgressState } from "./InProgressState";
import type { JobCard } from "../Context/JobCard";

export class PausedState extends BaseJobState {
  readonly name = "Paused";

  override resume(job: JobCard): void {
    job.pauseReason = undefined;
    job.transitionTo(new InProgressState());
    console.log("  ▶️  Resumed");
  }
}
