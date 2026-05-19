import { ICommand } from "./ICommand";
import { JobCard } from "../Model/JobCard";

export class AssignHandymanCommand implements ICommand {
  private previousAssignee: string | null = null;
  private previousStatus: string = "";

  constructor(
    private readonly jobCard: JobCard,
    private readonly handyman: string,
  ) {}

  execute(): void {
    this.previousAssignee = this.jobCard.assignee;
    this.previousStatus = this.jobCard.status;
    this.jobCard.assignee = this.handyman;
    this.jobCard.status = "Assigned";
    console.log(
      `  Assigned '${this.handyman}' to ${this.jobCard.jobId}. Status → Assigned`,
    );
  }

  undo(): void {
    this.jobCard.assignee = this.previousAssignee;
    this.jobCard.status = this.previousStatus;
    console.log(
      `  Undo assign: ${this.jobCard.jobId} Assignee → ${this.previousAssignee ?? "none"}, Status → ${this.previousStatus}`,
    );
  }
}
