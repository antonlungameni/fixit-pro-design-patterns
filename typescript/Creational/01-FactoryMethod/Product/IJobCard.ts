interface JobCard {
  readonly jobId:    string;
  readonly title:    string;
  readonly category: string;
  readonly priority: string;
  printSummary(): void;
}

const shortId = () => Math.random().toString(36).slice(2, 10);