public class JobCardHistory
{
    private readonly Stack<JobCard.JobCardMemento> _history = new();

    public void Push(JobCard.JobCardMemento memento)
    {
        _history.Push(memento);
        Console.WriteLine($"  [History] Saved: {memento}");
    }

    public JobCard.JobCardMemento? Pop()
    {
        if (_history.Count == 0)
        {
            Console.WriteLine("  [History] Nothing to restore.");
            return null;
        }

        var memento = _history.Pop();
        Console.WriteLine($"  [History] Restoring: {memento}");
        return memento;
    }

    public void PrintAll()
    {
        Console.WriteLine($"  [History] {_history.Count} snapshot(s):");
        foreach (var m in _history)
            Console.WriteLine($"    {m}");
    }
}
