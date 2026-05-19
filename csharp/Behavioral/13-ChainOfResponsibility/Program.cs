var service = new JobApprovalService();

service.RequestApproval(new ApprovalRequest("JC-401", "Replace tap washer", 750m, "Plumbing"));
service.RequestApproval(new ApprovalRequest("JC-402", "Rewire kitchen sockets", 3_200m, "Electrical"));
service.RequestApproval(new ApprovalRequest("JC-403", "Full bathroom renovation", 14_500m, "Carpentry"));
service.RequestApproval(new ApprovalRequest("JC-404", "Office block refurbishment", 55_000m, "General"));
