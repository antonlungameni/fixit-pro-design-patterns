import type { IJobElement } from "../Element/IJobElement";
import type { IJobVisitor } from "../Visitor/IJobVisitor";

export class ProjectJobList {
  private jobs: IJobElement[] = [];

  add(job: IJobElement): void {
    this.jobs.push(job);
  }

  // One traversal method serves every visitor
  accept(visitor: IJobVisitor): void {
    for (const job of this.jobs) job.accept(visitor);
  }
}
