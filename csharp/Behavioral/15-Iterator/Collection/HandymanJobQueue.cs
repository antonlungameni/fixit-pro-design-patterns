public class HandymanJobQueue : IJobCollection
{
    private readonly List<JobCard> _jobs = new();
    public string HandymanName { get; }

    public HandymanJobQueue(string handymanName)
    {
        HandymanName = handymanName;
    }

    public void AddJob(JobCard job) => _jobs.Add(job);
    public int  Count               => _jobs.Count;

    public IJobIterator CreateIterator() =>
        new PriorityJobIterator(_jobs);
}
