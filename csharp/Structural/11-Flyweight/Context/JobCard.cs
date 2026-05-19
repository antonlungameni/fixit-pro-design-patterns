public class JobCard
{
    public string JobId { get; } = Guid.NewGuid().ToString()[..8];
    public string ClientRef { get; }
    public DateTime ScheduledAt { get; }
    public string Status { get; set; } = "Active";

    private readonly JobCategoryMetadata _metadata;

    public JobCard(string clientRef, DateTime scheduledAt, string category)
    {
        ClientRef = clientRef;
        ScheduledAt = scheduledAt;
        _metadata = JobCategoryFactory.GetMetadata(category);
    }

    public void PrintSummary()
    {
        Console.WriteLine($"\n  Job #{JobId} | Client: {ClientRef} | {ScheduledAt:dd MMM yyyy} | {Status}");
        _metadata.PrintMetadata();
    }
}
