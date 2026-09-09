import type { PlumbingJob } from "../Element/PlumbingJob";
import type { ElectricalJob } from "../Element/ElectricalJob";
import type { CarpentryJob } from "../Element/CarpentryJob";

// TypeScript has no runtime overloading, so each element type
// gets its own distinctly named visit method.
export interface IJobVisitor {
  visitPlumbing(job: PlumbingJob): void;
  visitElectrical(job: ElectricalJob): void;
  visitCarpentry(job: CarpentryJob): void;
}
