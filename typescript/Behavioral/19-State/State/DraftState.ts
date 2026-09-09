import { BaseJobState } from "./BaseJobState";
import { AssignedState } from "./AssignedState";
import type { JobCard } from "../Context/JobCard";

export class DraftState extends BaseJobState {
  readonly name = "Draft";

  override assign(job: JobCard, handyman: string): void {
    job.assignee = handyman;
    job.transitionTo(new AssignedState());
    console.log(`  ✅ Assigned to ${handyman}`);
  }
}
