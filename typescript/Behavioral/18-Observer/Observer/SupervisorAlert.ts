import type { JobCard } from "../Subject/JobCard";
import { IJobCardObserver } from "./IJobCardObserver";

export class SupervisorAlert implements IJobCardObserver {
  constructor(private readonly supervisorName: string) {}

  update(eventName: string, jobCard: JobCard): void {
    console.log(
      `  🔔 [${this.supervisorName}] Alert: '${eventName}' — Assignee: ${jobCard.assignee ?? "unassigned"}`,
    );
  }
}
