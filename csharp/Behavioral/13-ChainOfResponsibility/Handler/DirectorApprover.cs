public class DirectorApprover : BaseApprovalHandler
{
    public override void Handle(ApprovalRequest request)
    {
        Console.WriteLine($"  ✅ Director approved: {request}");
    }
}
