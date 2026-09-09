import type { IJobElement } from "./IJobElement";
import type { IJobVisitor } from "../Visitor/IJobVisitor";

export class CarpentryJob implements IJobElement {
  readonly jobId: string = Math.random().toString(36).slice(2, 10);

  constructor(
    readonly title: string,
    readonly cost: number,
    readonly timberMetres: number,
    readonly finishType: string,
  ) {}

  accept(visitor: IJobVisitor): void {
    visitor.visitCarpentry(this);
  }
}
