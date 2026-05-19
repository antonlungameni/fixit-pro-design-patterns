public class ApprovalRequest
{
    public string JobId { get; }
    public string Title { get; }
    public decimal Cost { get; }
    public string Category { get; }

    public ApprovalRequest(string jobId, string title, decimal cost, string category)
    {
        JobId = jobId;
        Title = title;
        Cost = cost;
        Category = category;
    }

    public override string ToString() =>
        $"Job #{JobId} '{Title}' [{Category}] — N${Cost:N2}";
}
