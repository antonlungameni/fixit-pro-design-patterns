import type { JobCard } from "../Subject/JobCard";
import { IJobCardObserver } from "./IJobCardObserver";

export class HomeownerNotifier implements IJobCardObserver {
  constructor(private readonly ownerName: string) {}

  update(eventName: string, jobCard: JobCard): void {
    console.log(
      `  📧 [${this.ownerName}] Notification: '${eventName}' for job '${jobCard.title}' — Status: ${jobCard.status}`,
    );
  }
}
