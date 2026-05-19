public class JobApprovalService
{
    private readonly IApprovalHandler _chain;

    public JobApprovalService()
    {
        var handyman = new HandymanApprover();
        var supervisor = new SupervisorApprover();
        var manager = new ManagerApprover();
        var director = new DirectorApprover();

        handyman
            .SetNext(supervisor)
            .SetNext(manager)
            .SetNext(director);

        _chain = handyman;
    }

    public void RequestApproval(ApprovalRequest request)
    {
        Console.WriteLine($"\n--- Approval request: {request} ---");
        _chain.Handle(request);
    }
}
