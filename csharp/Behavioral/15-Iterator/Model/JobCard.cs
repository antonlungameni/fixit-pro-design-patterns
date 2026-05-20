public class JobCard
{
    public string JobId    { get; init; } = Guid.NewGuid().ToString()[..8];
    public string Title    { get; init; } = string.Empty;
    public string Category { get; init; } = string.Empty;
    public int    Priority { get; init; } = 0;
    public string Status   { get; set;  } = "Queued";

    public override string ToString() =>
        $"[P{Priority}] #{JobId} '{Title}' [{Category}] — {Status}";
}
