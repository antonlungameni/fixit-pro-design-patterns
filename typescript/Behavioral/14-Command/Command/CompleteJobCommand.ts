import { ICommand } from "./ICommand";
import { JobCard } from "../Model/JobCard";

export class CompleteJobCommand implements ICommand {
  private previousStatus: string = "";

  constructor(private readonly jobCard: JobCard) {}

  execute(): void {
    this.previousStatus = this.jobCard.status;
    this.jobCard.status = "Completed";
    console.log(`  Completed ${this.jobCard.jobId}. Status → Completed`);
  }

  undo(): void {
    this.jobCard.status = this.previousStatus;
    console.log(
      `  Undo complete: ${this.jobCard.jobId} Status → ${this.previousStatus}`,
    );
  }
}
