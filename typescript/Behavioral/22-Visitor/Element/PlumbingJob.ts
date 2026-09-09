import type { IJobElement } from "./IJobElement";
import type { IJobVisitor } from "../Visitor/IJobVisitor";

export class PlumbingJob implements IJobElement {
  readonly jobId: string = Math.random().toString(36).slice(2, 10);

  constructor(
    readonly title: string,
    readonly cost: number,
    readonly pressureBar: number,
    readonly pipeMetres: number,
  ) {}

  // Double dispatch — calls back into the visitor's plumbing method
  accept(visitor: IJobVisitor): void {
    visitor.visitPlumbing(this);
  }
}
