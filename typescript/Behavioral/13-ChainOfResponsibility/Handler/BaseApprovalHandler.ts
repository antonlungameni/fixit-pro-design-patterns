import { IApprovalHandler } from "./IApprovalHandler";
import { ApprovalRequest } from "../Model/ApprovalRequest";

export abstract class BaseApprovalHandler implements IApprovalHandler {
  private next?: IApprovalHandler;

  setNext(next: IApprovalHandler): IApprovalHandler {
    this.next = next;
    return next;
  }

  handle(request: ApprovalRequest): void {
    if (this.next) this.next.handle(request);
    else console.log(`  ❌ No handler could approve: ${request}`);
  }
}
