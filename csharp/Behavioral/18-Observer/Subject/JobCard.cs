namespace Observer;

public class JobCard : IJobCardSubject
{
    public string JobId { get; } = Guid.NewGuid().ToString("N")[..8];

    private string _status = "Draft";
    private string? _assignee;
    private string? _notes;
    private decimal _cost;

    public string Title { get; }
    public string Category { get; }
    public string Status => _status;
    public string? Assignee => _assignee;
    public string? Notes => _notes;
    public decimal Cost => _cost;

    private readonly List<IJobCardObserver> _observers = new();

    public JobCard(string title, string category, decimal cost)
    {
        Title = title;
        Category = category;
        _cost = cost;
    }

    public void Subscribe(IJobCardObserver observer) => _observers.Add(observer);
    public void Unsubscribe(IJobCardObserver observer) => _observers.Remove(observer);

    public void NotifyObservers(string eventName)
    {
        foreach (var observer in _observers)
            observer.Update(eventName, this);
    }

    public void Assign(string handyman)
    {
        _assignee = handyman;
        _status = "Assigned";
        NotifyObservers("JobAssigned");
    }

    public void StartWork()
    {
        _status = "InProgress";
        NotifyObservers("JobStarted");
    }

    public void PauseWork(string reason)
    {
        _status = "Paused";
        _notes = reason;
        NotifyObservers("JobPaused");
    }

    public void Complete()
    {
        _status = "Completed";
        _notes = null;
        NotifyObservers("JobCompleted");
    }

    public override string ToString() =>
        $"Job #{JobId} '{Title}' [{Category}]\n" +
        $"  Status  : {_status}\n" +
        $"  Assignee: {_assignee ?? "none"}\n" +
        $"  Notes   : {_notes ?? "none"}\n" +
        $"  Cost    : N${_cost:F2}";
}
