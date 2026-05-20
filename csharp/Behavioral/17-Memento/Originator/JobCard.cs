public class JobCard
{
    public string JobId { get; init; } = Guid.NewGuid().ToString()[..8];
    public string Title { get; init; } = string.Empty;
    public string Category { get; init; } = string.Empty;
    private string _status = "Draft";
    private string? _assignee;
    private string? _notes;
    private decimal _cost;

    public string Status => _status;
    public string? Assignee => _assignee;
    public string? Notes => _notes;
    public decimal Cost => _cost;

    public JobCard(string title, string category, decimal cost)
    {
        Title = title;
        Category = category;
        _cost = cost;
    }

    public void Assign(string handyman)
    {
        _assignee = handyman;
        _status = "Assigned";
    }

    public void StartWork() => _status = "InProgress";

    public void PauseWork(string reason)
    {
        _status = "Paused";
        _notes = reason;
    }

    public void Complete()
    {
        _status = "Completed";
        _notes = null;
    }

    public void UpdateCost(decimal newCost) => _cost = newCost;

    public JobCardMemento Save(string label = "") =>
        new JobCardMemento(label, _status, _assignee, _notes, _cost);

    public void Restore(JobCardMemento memento)
    {
        _status = memento.Status;
        _assignee = memento.Assignee;
        _notes = memento.Notes;
        _cost = memento.Cost;
    }

    public override string ToString() =>
        $"Job #{JobId} '{Title}' [{Category}]" +
        $"\n  Status  : {_status}" +
        $"\n  Assignee: {_assignee ?? "none"}" +
        $"\n  Notes   : {_notes ?? "none"}" +
        $"\n  Cost    : N${_cost:N2}";

    public sealed class JobCardMemento
    {
        internal string Status { get; }
        internal string? Assignee { get; }
        internal string? Notes { get; }
        internal decimal Cost { get; }

        public string Label { get; }
        public DateTime SavedAt { get; } = DateTime.Now;

        internal JobCardMemento(
            string label, string status,
            string? assignee, string? notes, decimal cost)
        {
            Label = label;
            Status = status;
            Assignee = assignee;
            Notes = notes;
            Cost = cost;
        }

        public override string ToString() =>
            $"[{SavedAt:HH:mm:ss}] Snapshot: '{Label}' — Status: {Status}";
    }
}
