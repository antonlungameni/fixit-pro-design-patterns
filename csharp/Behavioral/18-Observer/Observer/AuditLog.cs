namespace Observer;

public class AuditLog : IJobCardObserver
{
    private readonly List<string> _entries = new();

    public void Update(string eventName, JobCard jobCard)
    {
        var entry = $"[{DateTime.Now:HH:mm:ss}] {eventName} — Job #{jobCard.JobId} Status: {jobCard.Status}";
        _entries.Add(entry);
        Console.WriteLine($"  📋 [Audit] {entry}");
    }

    public void PrintLog()
    {
        Console.WriteLine($"\n  [AuditLog] {_entries.Count} event(s) recorded:");
        foreach (var e in _entries)
            Console.WriteLine($"    {e}");
    }
}
