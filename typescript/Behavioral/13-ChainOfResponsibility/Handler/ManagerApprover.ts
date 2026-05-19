import { BaseApprovalHandler } from "./BaseApprovalHandler";
import { ApprovalRequest } from "../Model/ApprovalRequest";

export class ManagerApprover extends BaseApprovalHandler {
  private static readonly LIMIT = 20_000;

  handle(request: ApprovalRequest): void {
    if (request.cost <= ManagerApprover.LIMIT)
      console.log(`  ✅ Manager approved: ${request}`);
    else {
      console.log(
        `  ↗️  Manager escalating (N$${request.cost.toFixed(2)} > N$${ManagerApprover.LIMIT.toFixed(2)})...`,
      );
      super.handle(request);
    }
  }
}
