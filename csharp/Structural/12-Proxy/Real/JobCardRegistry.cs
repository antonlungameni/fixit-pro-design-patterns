public class JobCardRegistry : IJobCardAccess
{
    private readonly Dictionary<string, JobCard> _store = new();

    public void Register(JobCard card)
    {
        _store[card.JobId] = card;
        Console.WriteLine($"  [Registry] Registered: {card}");
    }

    public JobCard? GetJobCard(string jobId)
    {
        _store.TryGetValue(jobId, out var card);
        return card;
    }

    public IReadOnlyList<JobCard> GetAll() =>
        _store.Values.ToList().AsReadOnly();
}
