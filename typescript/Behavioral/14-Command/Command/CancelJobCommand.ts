import { ICommand } from "./ICommand";
import { JobCard } from "../Model/JobCard";

export class CancelJobCommand implements ICommand {
  private previousStatus: string = "";

  constructor(private readonly jobCard: JobCard) {}

  execute(): void {
    this.previousStatus = this.jobCard.status;
    this.jobCard.status = "Cancelled";
    console.log(`  Cancelled ${this.jobCard.jobId}. Status → Cancelled`);
  }

  undo(): void {
    this.jobCard.status = this.previousStatus;
    console.log(
      `  Undo cancel: ${this.jobCard.jobId} Status → ${this.previousStatus}`,
    );
  }
}
