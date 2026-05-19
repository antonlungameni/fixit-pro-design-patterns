import { IJobComponent } from "../Component/IJobComponent";

export class JobCard implements IJobComponent {
  assignee: string = "Unassigned";

  constructor(
    readonly name: string,
    readonly category: string,
    readonly cost: number,
  ) {}

  execute(): void {
    console.log(
      `${"  ".repeat(2)}✅ Executing: [${this.category}] ${this.name} — N$${this.cost.toFixed(2)} | Assigned to: ${this.assignee}`,
    );
  }

  display(depth: number = 0): void {
    console.log(
      `${"  ".repeat(depth)}📋 ${this.name} [${this.category}] — N$${this.cost.toFixed(2)}`,
    );
  }
}
