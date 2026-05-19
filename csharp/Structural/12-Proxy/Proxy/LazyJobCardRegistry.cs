public class LazyJobCardRegistry : IJobCardAccess
{
    private IJobCardAccess? _realRegistry;

    private IJobCardAccess Registry =>
        _realRegistry ??= CreateRegistry();

    private IJobCardAccess CreateRegistry()
    {
        Console.WriteLine("  [LazyProxy] Initialising real registry (first access)...");
        return new JobCardRegistry();
    }

    public void Register(JobCard card) => Registry.Register(card);
    public JobCard? GetJobCard(string jobId) => Registry.GetJobCard(jobId);
    public IReadOnlyList<JobCard> GetAll() => Registry.GetAll();
}
