public class JobCard
{
    public string  JobId    { get; init; } = Guid.NewGuid().ToString()[..8];
    public string  Title    { get; init; } = string.Empty;
    public string  Category { get; init; } = string.Empty;
    public string  Status   { get; set;  } = "Draft";
    public string? Assignee { get; set;  }
    public override string ToString() =>
        $"Job #{JobId} '{Title}' [{Category}] — Status: {Status}" +
        (Assignee is not null ? $" | Assignee: {Assignee}" : "");
}
