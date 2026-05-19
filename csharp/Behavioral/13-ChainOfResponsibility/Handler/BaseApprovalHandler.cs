public abstract class BaseApprovalHandler : IApprovalHandler
{
    private IApprovalHandler? _next;

    public IApprovalHandler SetNext(IApprovalHandler next)
    {
        _next = next;
        return next;
    }

    public virtual void Handle(ApprovalRequest request)
    {
        if (_next is not null)
            _next.Handle(request);
        else
            Console.WriteLine($"  ❌ No handler could approve: {request}");
    }
}
