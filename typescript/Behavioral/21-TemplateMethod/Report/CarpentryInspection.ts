import { JobInspectionReport } from "./JobInspectionReport";

export class CarpentryInspection extends JobInspectionReport {
  protected get tradeName(): string {
    return "CARPENTRY";
  }

  protected verifySafety(): void {
    console.log("║ SAFETY CHECK");
    console.log("║   ✓ Cable scan completed before cutting");
    console.log("║   ✓ Dust extraction in place");
    console.log("║   ✓ PPE worn throughout");
  }

  protected performInspection(): void {
    console.log("║ INSPECTION");
    console.log("║   → Level and plumb verification");
    console.log("║   → Fixing point load test");
    console.log("║   → Finish and edge quality review");
  }

  protected recordFindings(): void {
    console.log("║ FINDINGS");
    this.addFinding("All surfaces level within 2 mm tolerance");
    this.addFinding("Fixings rated for 45 kg — exceeds 25 kg requirement");
    this.addFinding("Edges sanded and sealed");
  }

  protected attachComplianceNote(): void {
    console.log("║ COMPLIANCE");
    console.log("║   Non-structural work — no building plan approval required");
  }
}
