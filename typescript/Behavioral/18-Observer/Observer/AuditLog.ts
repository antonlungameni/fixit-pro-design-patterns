import type { JobCard } from "../Subject/JobCard";
import { IJobCardObserver } from "./IJobCardObserver";

export class AuditLog implements IJobCardObserver {
  private readonly entries: string[] = [];

  update(eventName: string, jobCard: JobCard): void {
    const time = new Date().toTimeString().slice(0, 8);
    const entry = `[${time}] ${eventName} — Job #${jobCard.jobId} Status: ${jobCard.status}`;
    this.entries.push(entry);
    console.log(`  📋 [Audit] ${entry}`);
  }

  printLog(): void {
    console.log(`\n  [AuditLog] ${this.entries.length} event(s) recorded:`);
    for (const e of this.entries) console.log(`    ${e}`);
  }
}
