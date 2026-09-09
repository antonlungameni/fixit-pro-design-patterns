import { JobInspectionReport } from "./JobInspectionReport";

export class PlumbingInspection extends JobInspectionReport {
  protected get tradeName(): string {
    return "PLUMBING";
  }

  protected verifySafety(): void {
    console.log("║ SAFETY CHECK");
    console.log("║   ✓ Water main isolated");
    console.log("║   ✓ Pressure relief valve tested");
    console.log("║   ✓ Work area drained");
  }

  protected performInspection(): void {
    console.log("║ INSPECTION");
    console.log("║   → Pressure test at 3 bar for 15 minutes");
    console.log("║   → Joint integrity check on all connections");
    console.log("║   → Flow rate measurement at outlet");
  }

  protected recordFindings(): void {
    console.log("║ FINDINGS");
    this.addFinding("Pressure held at 3 bar — no drop detected");
    this.addFinding("All joints sealed correctly");
    this.addFinding("Flow rate 12 L/min — within specification");
  }

  protected attachComplianceNote(): void {
    console.log("║ COMPLIANCE");
    console.log("║   SANS 10400-W water installation standard — COMPLIANT");
  }
}
