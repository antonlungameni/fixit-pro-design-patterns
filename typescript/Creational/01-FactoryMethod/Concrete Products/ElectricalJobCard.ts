class ElectricalJobCard implements JobCard {
  readonly jobId    = shortId();
  readonly category = "Electrical";

  constructor(
    readonly title:    string,
    readonly priority: string
  ) {}

  printSummary(): void {
    console.log(`[${this.category}] #${this.jobId} — ${this.title} (Priority: ${this.priority})`);
    console.log("  → Requires: Certified electrician + safety inspection");
  }
}