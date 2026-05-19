// ── ❌ Naive Singleton — NOT thread-safe ───────────────────
// Shown here for contrast. Two threads can both pass the null-check
// simultaneously and each create a separate instance.

public class JobCardRegistryNaive
{
    private static JobCardRegistryNaive? _instance;

    private readonly List<JobCard> _jobs = new();

    private JobCardRegistryNaive() { }

    public static JobCardRegistryNaive Instance
    {
        get
        {
            if (_instance == null)
                _instance = new JobCardRegistryNaive();

            return _instance;
        }
    }

    public void Register(JobCard card) => _jobs.Add(card);
    public IReadOnlyList<JobCard> GetAll() => _jobs.AsReadOnly();
}

// ── ✅ Thread-safe Singleton — Lazy<T> (recommended) ───────
// Lazy<T> guarantees thread-safe, deferred initialisation.
// The instance is created only when first accessed, not at startup.

public sealed class JobCardRegistry
{
    private static readonly Lazy<JobCardRegistry> _lazy =
        new(() => new JobCardRegistry());

    public static JobCardRegistry Instance => _lazy.Value;

    private readonly List<JobCard> _jobs = new();
    private readonly object _lock = new();

    private JobCardRegistry() { }

    public void Register(JobCard card)
    {
        lock (_lock) { _jobs.Add(card); }
    }

    public void UpdateStatus(string jobId, string status)
    {
        lock (_lock)
        {
            var job = _jobs.FirstOrDefault(j => j.JobId == jobId);
            if (job is not null) job.Status = status;
        }
    }

    public IReadOnlyList<JobCard> GetAll()
    {
        lock (_lock) { return _jobs.ToList().AsReadOnly(); }
    }

    public IReadOnlyList<JobCard> GetByStatus(string status)
    {
        lock (_lock)
        {
            return _jobs.Where(j => j.Status == status).ToList().AsReadOnly();
        }
    }

    public int Count
    {
        get { lock (_lock) { return _jobs.Count; } }
    }

    public void PrintSummary()
    {
        lock (_lock)
        {
            Console.WriteLine($"\n=== Job Card Registry ({_jobs.Count} jobs) ===");
            foreach (var job in _jobs)
                Console.WriteLine($"  [{job.Status}] #{job.JobId} — {job.Title} ({job.Category})");
        }
    }
}
