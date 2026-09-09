import type { IJobState } from "./IJobState";
import type { JobCard } from "../Context/JobCard";

// Default behaviour: reject the action. Concrete states
// override only the transitions valid from themselves.
export abstract class BaseJobState implements IJobState {
  abstract readonly name: string;

  assign(_job: JobCard, _handyman: string): void {
    this.reject("assign");
  }
  start(_job: JobCard): void {
    this.reject("start");
  }
  pause(_job: JobCard, _reason: string): void {
    this.reject("pause");
  }
  resume(_job: JobCard): void {
    this.reject("resume");
  }
  complete(_job: JobCard): void {
    this.reject("complete");
  }
  approve(_job: JobCard): void {
    this.reject("approve");
  }

  private reject(action: string): never {
    throw new Error(`Cannot '${action}' a job in '${this.name}' state.`);
  }
}
