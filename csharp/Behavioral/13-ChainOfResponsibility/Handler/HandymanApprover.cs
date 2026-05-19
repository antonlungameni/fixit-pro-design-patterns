public class HandymanApprover : BaseApprovalHandler
{
    private const decimal Limit = 1_000m;

    public override void Handle(ApprovalRequest request)
    {
        if (request.Cost <= Limit)
            Console.WriteLine($"  ✅ Handyman approved: {request}");
        else
        {
            Console.WriteLine($"  ↗️  Handyman escalating (N${request.Cost:N2} > N${Limit:N2})...");
            base.Handle(request);
        }
    }
}
