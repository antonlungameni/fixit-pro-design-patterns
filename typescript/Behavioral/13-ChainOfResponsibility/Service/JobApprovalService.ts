import { IApprovalHandler } from "../Handler/IApprovalHandler";
import { HandymanApprover } from "../Handler/HandymanApprover";
import { SupervisorApprover } from "../Handler/SupervisorApprover";
import { ManagerApprover } from "../Handler/ManagerApprover";
import { DirectorApprover } from "../Handler/DirectorApprover";
import { ApprovalRequest } from "../Model/ApprovalRequest";

export class JobApprovalService {
  private readonly chain: IApprovalHandler;

  constructor() {
    const handyman = new HandymanApprover();
    const supervisor = new SupervisorApprover();
    const manager = new ManagerApprover();
    const director = new DirectorApprover();

    handyman.setNext(supervisor).setNext(manager).setNext(director);

    this.chain = handyman;
  }

  requestApproval(request: ApprovalRequest): void {
    console.log(`\n--- Approval request: ${request} ---`);
    this.chain.handle(request);
  }
}
