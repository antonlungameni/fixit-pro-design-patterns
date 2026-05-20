import type { IJobCardObserver } from "../Observer/IJobCardObserver";

export class JobCard {
  readonly jobId: string = Math.random().toString(36).slice(2, 10);

  private _status: string = "Draft";
  private _assignee: string | undefined;
  private _notes: string | undefined;
  private _cost: number;
  private _observers: IJobCardObserver[] = [];

  constructor(
    readonly title: string,
    readonly category: string,
    cost: number,
  ) {
    this._cost = cost;
  }

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

  subscribe(observer: IJobCardObserver): void {
    this._observers.push(observer);
  }

  unsubscribe(observer: IJobCardObserver): void {
    this._observers = this._observers.filter((o) => o !== observer);
  }

  notifyObservers(eventName: string): void {
    for (const observer of this._observers) {
      observer.update(eventName, this);
    }
  }

  assign(handyman: string): void {
    this._assignee = handyman;
    this._status = "Assigned";
    this.notifyObservers("JobAssigned");
  }

  startWork(): void {
    this._status = "InProgress";
    this.notifyObservers("JobStarted");
  }

  pauseWork(reason: string): void {
    this._status = "Paused";
    this._notes = reason;
    this.notifyObservers("JobPaused");
  }

  complete(): void {
    this._status = "Completed";
    this._notes = undefined;
    this.notifyObservers("JobCompleted");
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
