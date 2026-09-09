namespace State;

public class JobCard
{
    public string JobId { get; } = Guid.NewGuid().ToString("N")[..8];

    public string Title { get; }
    public string Category { get; }

    public string? Assignee { get; set; }
    public string? PauseReason { get; set; }
    public DateTime? StartedAt { get; set; }
    public DateTime? CompletedAt { get; set; }
    public DateTime? ClosedAt { get; set; }

    private IJobState _state;

    public JobCard(string title, string category)
    {
        Title = title;
        Category = category;
        _state = new DraftState(); // initial state
    }

    public string CurrentState => _state.Name;

    // Called by state classes to move to the next state
    public void TransitionTo(IJobState newState)
    {
        Console.WriteLine($"  [{_state.Name}] → [{newState.Name}]");
        _state = newState;
    }

    // Delegate all actions to the current state
    public void Assign(string handyman) => _state.Assign(this, handyman);
    public void Start()                 => _state.Start(this);
    public void Pause(string reason)    => _state.Pause(this, reason);
    public void Resume()                => _state.Resume(this);
    public void Complete()              => _state.Complete(this);
    public void Approve()               => _state.Approve(this);

    public override string ToString() =>
        $"Job #{JobId} '{Title}' [{Category}] — State: {_state.Name}" +
        (Assignee is not null ? $" | {Assignee}" : "");
}
