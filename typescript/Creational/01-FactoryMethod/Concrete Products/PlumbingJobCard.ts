class PlumbingJobCard implements JobCard {
  readonly jobId    = shortId();
  readonly category = "Plumbing";

  constructor(
    readonly title:    string,
    readonly priority: string
  ) {}

  printSummary(): void {
    console.log(`[${this.category}] #${this.jobId} — ${this.title} (Priority: ${this.priority})`);
    console.log("  → Requires: Licensed plumber + water shutoff check");
  }
}