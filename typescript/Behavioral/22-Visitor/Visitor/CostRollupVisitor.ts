import type { IJobVisitor } from "./IJobVisitor";
import type { PlumbingJob } from "../Element/PlumbingJob";
import type { ElectricalJob } from "../Element/ElectricalJob";
import type { CarpentryJob } from "../Element/CarpentryJob";

export class CostRollupVisitor implements IJobVisitor {
  private plumbingTotal = 0;
  private electricalTotal = 0;
  private carpentryTotal = 0;

  get grandTotal(): number {
    return this.plumbingTotal + this.electricalTotal + this.carpentryTotal;
  }

  visitPlumbing(job: PlumbingJob): void {
    this.plumbingTotal += job.cost;
  }

  visitElectrical(job: ElectricalJob): void {
    this.electricalTotal += job.cost;
  }

  visitCarpentry(job: CarpentryJob): void {
    this.carpentryTotal += job.cost;
  }

  printSummary(): void {
    console.log("\n=== Cost Rollup ===");
    console.log(`  Plumbing   : N$${this.plumbingTotal.toFixed(2)}`);
    console.log(`  Electrical : N$${this.electricalTotal.toFixed(2)}`);
    console.log(`  Carpentry  : N$${this.carpentryTotal.toFixed(2)}`);
    console.log("  ─────────────────────────");
    console.log(`  TOTAL      : N$${this.grandTotal.toFixed(2)}`);
  }
}
