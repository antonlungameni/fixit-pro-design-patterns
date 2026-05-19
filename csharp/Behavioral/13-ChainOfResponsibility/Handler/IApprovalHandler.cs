public interface IApprovalHandler
{
    IApprovalHandler SetNext(IApprovalHandler next);
    void Handle(ApprovalRequest request);
}
