import { BaseApprovalHandler } from "./BaseApprovalHandler";
import { ApprovalRequest } from "../Model/ApprovalRequest";

export class DirectorApprover extends BaseApprovalHandler {
  handle(request: ApprovalRequest): void {
    console.log(`  ✅ Director approved: ${request}`);
  }
}
