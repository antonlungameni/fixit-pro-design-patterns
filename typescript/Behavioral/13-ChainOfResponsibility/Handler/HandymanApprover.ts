import { BaseApprovalHandler } from "./BaseApprovalHandler";
import { ApprovalRequest } from "../Model/ApprovalRequest";

export class HandymanApprover extends BaseApprovalHandler {
  private static readonly LIMIT = 1_000;

  handle(request: ApprovalRequest): void {
    if (request.cost <= HandymanApprover.LIMIT)
      console.log(`  ✅ Handyman approved: ${request}`);
    else {
      console.log(
        `  ↗️  Handyman escalating (N$${request.cost.toFixed(2)} > N$${HandymanApprover.LIMIT.toFixed(2)})...`,
      );
      super.handle(request);
    }
  }
}
