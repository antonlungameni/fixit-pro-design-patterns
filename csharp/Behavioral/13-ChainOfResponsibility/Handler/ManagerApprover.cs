public class ManagerApprover : BaseApprovalHandler
{
    private const decimal Limit = 20_000m;

    public override void Handle(ApprovalRequest request)
    {
        if (request.Cost <= Limit)
            Console.WriteLine($"  ✅ Manager approved: {request}");
        else
        {
            Console.WriteLine($"  ↗️  Manager escalating (N${request.Cost:N2} > N${Limit:N2})...");
            base.Handle(request);
        }
    }
}
