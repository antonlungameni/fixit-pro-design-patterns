import { JobInspectionReport } from "./JobInspectionReport";

export class ElectricalInspection extends JobInspectionReport {
  protected get tradeName(): string {
    return "ELECTRICAL";
  }

  protected verifySafety(): void {
    console.log("║ SAFETY CHECK");
    console.log("║   ✓ Circuit isolated at DB board");
    console.log("║   ✓ Lockout tag applied");
    console.log("║   ✓ Tested for live wires — confirmed dead");
  }

  protected performInspection(): void {
    console.log("║ INSPECTION");
    console.log("║   → Insulation resistance test");
    console.log("║   → Earth continuity verification");
    console.log("║   → RCD trip time measurement");
  }

  protected recordFindings(): void {
    console.log("║ FINDINGS");
    this.addFinding("Insulation resistance 250 MΩ — well above 1 MΩ minimum");
    this.addFinding("Earth continuity 0.3 Ω — acceptable");
    this.addFinding("RCD tripped at 24 ms — within 40 ms requirement");
  }

  // Override the hook — electrical work requires photo evidence
  protected override captureAdditionalPhotos(): void {
    console.log("║ PHOTO EVIDENCE");
    console.log("║   📷 DB board before and after");
    console.log("║   📷 Certification label close-up");
  }

  protected attachComplianceNote(): void {
    console.log("║ COMPLIANCE");
    console.log("║   Certificate of Compliance issued — Registered Electrician #RE-4471");
  }
}
