import { BaseApprovalHandler } from "./BaseApprovalHandler";
import { ApprovalRequest } from "../Model/ApprovalRequest";

export class SupervisorApprover extends BaseApprovalHandler {
  private static readonly LIMIT = 5_000;

  handle(request: ApprovalRequest): void {
    if (request.cost <= SupervisorApprover.LIMIT)
      console.log(`  ✅ Supervisor approved: ${request}`);
    else {
      console.log(
        `  ↗️  Supervisor escalating (N$${request.cost.toFixed(2)} > N$${SupervisorApprover.LIMIT.toFixed(2)})...`,
      );
      super.handle(request);
    }
  }
}
