namespace Facade.Subsystem;

public class JobCardRegistry
{
    private readonly List<(string JobId, string Title, string Status)> _jobs = new();

    public void Register(string jobId, string title)
    {
        _jobs.Add((jobId, title, "Active"));
        Console.WriteLine($"  🗂️  JobCardRegistry: Job #{jobId} '{title}' registered.");
    }

    public int Count => _jobs.Count;
}
