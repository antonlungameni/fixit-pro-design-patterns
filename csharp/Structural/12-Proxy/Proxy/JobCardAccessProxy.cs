public class JobCardAccessProxy : IJobCardAccess
{
    private readonly IJobCardAccess _registry;
    private readonly Handyman _handyman;

    private static readonly HashSet<string> _restricted =
        new(StringComparer.OrdinalIgnoreCase) { "Electrical", "Plumbing" };

    public JobCardAccessProxy(IJobCardAccess registry, Handyman handyman)
    {
        _registry = registry;
        _handyman = handyman;
    }

    public void Register(JobCard card)
    {
        Log($"REGISTER — {card}");
        _registry.Register(card);
    }

    public JobCard? GetJobCard(string jobId)
    {
        var card = _registry.GetJobCard(jobId);

        if (card is null)
        {
            Log($"GET #{jobId} — not found.");
            return null;
        }

        if (_restricted.Contains(card.Category) &&
            !_handyman.HasCertification(card.Category))
        {
            Log($"ACCESS DENIED — {_handyman.Name} lacks {card.Category} certification for Job #{jobId}.");
            throw new UnauthorizedAccessException(
                $"{_handyman.Name} is not certified for {card.Category} jobs.");
        }

        Log($"ACCESS GRANTED — {_handyman.Name} accessed {card}.");
        return card;
    }

    public IReadOnlyList<JobCard> GetAll()
    {
        Log($"GET ALL — {_handyman.Name} listed all job cards.");
        return _registry.GetAll();
    }

    private void Log(string message) =>
        Console.WriteLine($"  [{DateTime.Now:HH:mm:ss}] [Proxy] {message}");
}
