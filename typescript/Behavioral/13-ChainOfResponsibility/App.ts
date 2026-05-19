import { JobApprovalService } from "./Service/JobApprovalService";
import { ApprovalRequest } from "./Model/ApprovalRequest";

const service = new JobApprovalService();

service.requestApproval(
  new ApprovalRequest("JC-401", "Replace tap washer", 750, "Plumbing"),
);
service.requestApproval(
  new ApprovalRequest("JC-402", "Rewire kitchen sockets", 3_200, "Electrical"),
);
service.requestApproval(
  new ApprovalRequest(
    "JC-403",
    "Full bathroom renovation",
    14_500,
    "Carpentry",
  ),
);
service.requestApproval(
  new ApprovalRequest(
    "JC-404",
    "Office block refurbishment",
    55_000,
    "General",
  ),
);
