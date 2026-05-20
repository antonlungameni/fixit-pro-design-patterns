import { JobCardMemento } from "../Memento/JobCardMemento";

export class JobCard {
  readonly jobId: string = Math.random().toString(36).slice(2, 10);

  private _status: string = "Draft";
  private _assignee: string | undefined;
  private _notes: string | undefined;
  private _cost: number;

  get status(): string {
    return this._status;
  }
  get assignee(): string | undefined {
    return this._assignee;
  }
  get notes(): string | undefined {
    return this._notes;
  }
  get cost(): number {
    return this._cost;
  }

  constructor(
    readonly title: string,
    readonly category: string,
    cost: number,
  ) {
    this._cost = cost;
  }

  assign(handyman: string): void {
    this._assignee = handyman;
    this._status = "Assigned";
  }

  startWork(): void {
    this._status = "InProgress";
  }

  pauseWork(reason: string): void {
    this._status = "Paused";
    this._notes = reason;
  }

  complete(): void {
    this._status = "Completed";
    this._notes = undefined;
  }

  updateCost(newCost: number): void {
    this._cost = newCost;
  }

  save(label: string = ""): JobCardMemento {
    return new JobCardMemento(label, {
      status: this._status,
      assignee: this._assignee,
      notes: this._notes,
      cost: this._cost,
    });
  }

  restore(memento: JobCardMemento): void {
    const state = memento.getState();
    this._status = state.status;
    this._assignee = state.assignee;
    this._notes = state.notes;
    this._cost = state.cost;
  }

  toString(): string {
    return [
      `Job #${this.jobId} '${this.title}' [${this.category}]`,
      `  Status  : ${this._status}`,
      `  Assignee: ${this._assignee ?? "none"}`,
      `  Notes   : ${this._notes ?? "none"}`,
      `  Cost    : N$${this._cost.toFixed(2)}`,
    ].join("\n");
  }
}
