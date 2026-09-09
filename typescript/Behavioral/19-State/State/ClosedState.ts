import { BaseJobState } from "./BaseJobState";

export class ClosedState extends BaseJobState {
  readonly name = "Closed";
  // No transitions out of Closed — all actions rejected by base
}
