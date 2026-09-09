import type { IJobElement } from "./IJobElement";
import type { IJobVisitor } from "../Visitor/IJobVisitor";

export class ElectricalJob implements IJobElement {
  readonly jobId: string = Math.random().toString(36).slice(2, 10);

  constructor(
    readonly title: string,
    readonly cost: number,
    readonly circuitLoadAmps: number,
    readonly requiresCertificate: boolean,
  ) {}

  accept(visitor: IJobVisitor): void {
    visitor.visitElectrical(this);
  }
}
