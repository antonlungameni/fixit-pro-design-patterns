import type { IJobVisitor } from "./IJobVisitor";
import type { PlumbingJob } from "../Element/PlumbingJob";
import type { ElectricalJob } from "../Element/ElectricalJob";
import type { CarpentryJob } from "../Element/CarpentryJob";

export class ComplianceAuditVisitor implements IJobVisitor {
  private issues: string[] = [];
  private checked: number = 0;

  visitPlumbing(job: PlumbingJob): void {
    this.checked++;

    if (job.pressureBar > 4)
      this.issues.push(
        `#${job.jobId} — pressure ${job.pressureBar} bar exceeds ` +
          `SANS 10400-W maximum of 4 bar`,
      );
  }

  visitElectrical(job: ElectricalJob): void {
    this.checked++;

    if (job.circuitLoadAmps > 60 && !job.requiresCertificate)
      this.issues.push(
        `#${job.jobId} — ${job.circuitLoadAmps}A load requires a ` +
          `Certificate of Compliance, none flagged`,
      );
  }

  visitCarpentry(job: CarpentryJob): void {
    this.checked++;

    if (job.finishType === "untreated")
      this.issues.push(
        `#${job.jobId} — untreated timber not permitted in wet areas`,
      );
  }

  printReport(): void {
    console.log("\n=== Compliance Audit ===");
    console.log(`  Jobs checked : ${this.checked}`);
    console.log(`  Issues found : ${this.issues.length}`);

    for (const issue of this.issues) console.log(`  ⚠️  ${issue}`);

    if (this.issues.length === 0) console.log("  ✅ All jobs compliant.");
  }
}
