namespace Visitor;

public class ProjectJobList
{
    private readonly List<IJobElement> _jobs = new();

    public void Add(IJobElement job) => _jobs.Add(job);

    // One traversal method serves every visitor
    public void Accept(IJobVisitor visitor)
    {
        foreach (var job in _jobs)
            job.Accept(visitor);
    }
}
