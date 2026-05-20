public class HandymanJobQueueEnumerable : IEnumerable<JobCard>
{
    private readonly List<JobCard> _jobs = new();
    public string HandymanName { get; }

    public HandymanJobQueueEnumerable(string handymanName)
    {
        HandymanName = handymanName;
    }

    public void AddJob(JobCard job) => _jobs.Add(job);

    public IEnumerator<JobCard> GetEnumerator()
    {
        foreach (var job in _jobs.OrderByDescending(j => j.Priority))
            yield return job;
    }

    System.Collections.IEnumerator
        System.Collections.IEnumerable.GetEnumerator() => GetEnumerator();
}
