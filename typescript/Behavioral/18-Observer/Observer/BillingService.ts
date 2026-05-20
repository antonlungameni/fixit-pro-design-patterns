import type { JobCard } from "../Subject/JobCard";
import { IJobCardObserver } from "./IJobCardObserver";

export class BillingService implements IJobCardObserver {
  update(eventName: string, jobCard: JobCard): void {
    if (eventName === "JobCompleted") {
      console.log(
        `  💰 [Billing] Invoice raised for job '${jobCard.title}' — N$${jobCard.cost.toFixed(2)}`,
      );
    }
  }
}
