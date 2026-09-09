import type { IJobVisitor } from "./IJobVisitor";
import type { PlumbingJob } from "../Element/PlumbingJob";
import type { ElectricalJob } from "../Element/ElectricalJob";
import type { CarpentryJob } from "../Element/CarpentryJob";

export class PdfExportVisitor implements IJobVisitor {
  private lines: string[] = [];

  visitPlumbing(job: PlumbingJob): void {
    this.lines.push(
      `  [PLUMBING]   #${job.jobId} | ${job.title.padEnd(32)} | ` +
        `${job.pipeMetres}m pipe @ ${job.pressureBar} bar | N$${job.cost.toFixed(2)}`,
    );
  }

  visitElectrical(job: ElectricalJob): void {
    const coc = job.requiresCertificate ? " | CoC required" : "";

    this.lines.push(
      `  [ELECTRICAL] #${job.jobId} | ${job.title.padEnd(32)} | ` +
        `${job.circuitLoadAmps}A load${coc} | N$${job.cost.toFixed(2)}`,
    );
  }

  visitCarpentry(job: CarpentryJob): void {
    this.lines.push(
      `  [CARPENTRY]  #${job.jobId} | ${job.title.padEnd(32)} | ` +
        `${job.timberMetres}m timber, ${job.finishType} | N$${job.cost.toFixed(2)}`,
    );
  }

  render(): void {
    console.log("\n=== PDF Export Preview ===");

    for (const line of this.lines) console.log(line);
  }
}
