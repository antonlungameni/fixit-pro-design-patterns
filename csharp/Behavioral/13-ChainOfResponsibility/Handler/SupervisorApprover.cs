public class SupervisorApprover : BaseApprovalHandler
{
    private const decimal Limit = 5_000m;

    public override void Handle(ApprovalRequest request)
    {
        if (request.Cost <= Limit)
            Console.WriteLine($"  ✅ Supervisor approved: {request}");
        else
        {
            Console.WriteLine($"  ↗️  Supervisor escalating (N${request.Cost:N2} > N${Limit:N2})...");
            base.Handle(request);
        }
    }
}
