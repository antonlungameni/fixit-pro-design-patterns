public class JobDispatcher
{
    private readonly IReadOnlyList<INotifier> _notifiers;

    public JobDispatcher(IEnumerable<INotifier> notifiers)
    {
        _notifiers = notifiers.ToList().AsReadOnly();
    }

    public void DispatchJob(string jobId, string title)
    {
        Console.WriteLine($"\n--- Dispatching Job #{jobId}: {title} ---");

        foreach (var notifier in _notifiers)
            notifier.SendNotification(jobId, $"Your job '{title}' has been assigned.");
    }
}
