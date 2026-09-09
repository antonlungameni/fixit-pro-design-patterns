import type { IJobVisitor } from "../Visitor/IJobVisitor";

export interface IJobElement {
  readonly jobId: string;
  readonly title: string;
  readonly cost: number;

  accept(visitor: IJobVisitor): void;
}
