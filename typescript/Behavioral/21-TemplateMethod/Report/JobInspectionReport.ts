export abstract class JobInspectionReport {
  protected jobId: string = "";
  protected inspector: string = "";
  protected findings: string[] = [];

  // ══════════════════════════════════════════════════════
  // THE TEMPLATE METHOD
  // TypeScript has no 'sealed' — convention is to document
  // that subclasses must not override this method.
  // ══════════════════════════════════════════════════════
  generateReport(jobId: string, inspector: string): void {
    this.jobId     = jobId;
    this.inspector = inspector;
    this.findings  = [];

    this.openReport();              // concrete
    this.verifySafety();            // abstract
    this.performInspection();       // abstract
    this.recordFindings();          // abstract
    this.captureAdditionalPhotos(); // hook
    this.attachComplianceNote();    // abstract
    this.signOff();                 // concrete
  }

  // ── Concrete steps — identical for every trade ─────────

  private openReport(): void {
    console.log("\n╔══════════════════════════════════════════════════");
    console.log(`║ INSPECTION REPORT — ${this.tradeName}`);
    console.log("╠══════════════════════════════════════════════════");
    console.log(`║ Job ID    : #${this.jobId}`);
    console.log(`║ Inspector : ${this.inspector}`);
    console.log(`║ Opened    : ${this.timestamp()}`);
    console.log("╠══════════════════════════════════════════════════");
  }

  private signOff(): void {
    console.log("╠══════════════════════════════════════════════════");
    console.log(`║ Findings recorded : ${this.findings.length}`);
    console.log(`║ Signed off by     : ${this.inspector}`);
    console.log(`║ Closed            : ${this.timestamp()}`);
    console.log("╚══════════════════════════════════════════════════");
  }

  private timestamp(): string {
    return new Date().toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  // ── Abstract steps — subclasses MUST implement ─────────

  protected abstract get tradeName(): string;

  protected abstract verifySafety(): void;
  protected abstract performInspection(): void;
  protected abstract recordFindings(): void;
  protected abstract attachComplianceNote(): void;

  // ── Hook — optional, empty by default ──────────────────

  protected captureAdditionalPhotos(): void {
    // Default: no additional photos required
  }

  // ── Helper available to all subclasses ─────────────────

  protected addFinding(finding: string): void {
    this.findings.push(finding);
    console.log(`║   • ${finding}`);
  }
}
