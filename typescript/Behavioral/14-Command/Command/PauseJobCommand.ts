import { ICommand } from "./ICommand";
import { JobCard } from "../Model/JobCard";

export class PauseJobCommand implements ICommand {
  private previousStatus: string = "";

  constructor(private readonly jobCard: JobCard) {}

  execute(): void {
    this.previousStatus = this.jobCard.status;
    this.jobCard.status = "Paused";
    console.log(`  Paused ${this.jobCard.jobId}. Status → Paused`);
  }

  undo(): void {
    this.jobCard.status = this.previousStatus;
    console.log(
      `  Undo pause: ${this.jobCard.jobId} Status → ${this.previousStatus}`,
    );
  }
}
