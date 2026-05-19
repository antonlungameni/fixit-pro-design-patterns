import { ApprovalRequest } from "../Model/ApprovalRequest";

export interface IApprovalHandler {
  setNext(next: IApprovalHandler): IApprovalHandler;
  handle(request: ApprovalRequest): void;
}
