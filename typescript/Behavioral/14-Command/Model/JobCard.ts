export class JobCard {
  jobId: string = Math.random().toString(36).substring(2, 10);
  title: string = "";
  category: string = "";
  status: string = "Draft";
  assignee: string | null = null;

  toString(): string {
    return (
      `Job #${this.jobId} '${this.title}' [${this.category}] — Status: ${this.status}` +
      (this.assignee !== null ? ` | Assignee: ${this.assignee}` : "")
    );
  }
}
